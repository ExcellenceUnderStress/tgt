import fs from "node:fs";
import path from "node:path";

import StyleDictionary from "style-dictionary";
import { fileHeader } from "style-dictionary/utils";

const tokenSourcePath = path.join(process.cwd(), "_Primitives", "Style.tokens.json");
const rawTokenSource = JSON.parse(fs.readFileSync(tokenSourcePath, "utf8"));

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase()
    .replace(/\(light mode\)/g, "")
    .replace(/\(dark mode alpha\)/g, " alpha")
    .replace(/\(dark mode\)/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function getColorValue(token) {
  const value = token?.$value;

  if (!value) {
    return undefined;
  }

  if (typeof value.alpha === "number" && value.alpha < 1 && Array.isArray(value.components)) {
    const [red, green, blue] = value.components.map((component) => Math.round(component * 255));
    return `rgba(${red}, ${green}, ${blue}, ${Number(value.alpha.toFixed(3))})`;
  }

  return value.hex;
}

function getDimension(token) {
  const value = token?.$value;
  return typeof value === "number" ? `${value}px` : value;
}

function normalizeColorGroups(colors) {
  const common = {};
  const modes = {
    light: {},
    dark: {},
  };

  for (const [groupName, entries] of Object.entries(colors)) {
    const normalizedGroup = slugify(groupName);

    if (groupName.includes("(light mode)")) {
      modes.light[normalizedGroup] = entries;
      continue;
    }

    if (groupName.includes("(dark mode)")) {
      modes.dark[normalizedGroup] = entries;
      continue;
    }

    common[normalizedGroup] = entries;
  }

  return { common, modes };
}

function createLeafTokens(entries, valueGetter, type) {
  return Object.fromEntries(
    Object.entries(entries).map(([entryName, entryValue]) => [
      slugify(entryName),
      {
        value: valueGetter(entryValue),
        type,
      },
    ]),
  );
}

function buildTokenTree(figmaTokens) {
  const { common, modes } = normalizeColorGroups(figmaTokens.Colors);

  const commonColors = Object.fromEntries(
    Object.entries(common).map(([groupName, entries]) => [
      groupName,
      createLeafTokens(entries, getColorValue, "color"),
    ]),
  );

  const modeColors = Object.fromEntries(
    Object.entries(modes).map(([modeName, groups]) => [
      modeName,
      {
        color: Object.fromEntries(
          Object.entries(groups).map(([groupName, entries]) => [
            groupName,
            createLeafTokens(entries, getColorValue, "color"),
          ]),
        ),
      },
    ]),
  );

  return {
    common: {
      color: commonColors,
      space: createLeafTokens(figmaTokens.Spacing, getDimension, "dimension"),
    },
    theme: modeColors,
  };
}

function toCssVarName(token) {
  if (token.path[0] === "common" && token.path[1] === "color") {
    return `--tg-color-${token.path.slice(2).join("-")}`;
  }

  if (token.path[0] === "common" && token.path[1] === "space") {
    return `--tg-space-${token.path.slice(2).join("-")}`;
  }

  if (token.path[0] === "theme" && token.path[2] === "color") {
    return `--tg-color-${token.path.slice(3).join("-")}`;
  }

  return `--tg-${token.path.slice(1).join("-")}`;
}

StyleDictionary.registerFormat({
  name: "tgt/css-color-modes",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file });
    const commonTokens = dictionary.allTokens.filter((token) => token.path[0] === "common");
    const lightTokens = dictionary.allTokens.filter(
      (token) => token.path[0] === "theme" && token.path[1] === "light",
    );
    const darkTokens = dictionary.allTokens.filter(
      (token) => token.path[0] === "theme" && token.path[1] === "dark",
    );

    const renderBlock = (selector, tokens, extraLines = []) => {
      const lines = tokens.map((token) => `  ${toCssVarName(token)}: ${token.value};`);
      return `${selector} {\n${[...extraLines, ...lines].join("\n")}\n}\n`;
    };

    return [
      header.trimEnd(),
      "",
      renderBlock(":root", commonTokens),
      renderBlock(":root, [data-color-mode=\"light\"]", lightTokens, ["  color-scheme: light;"]),
      renderBlock("[data-color-mode=\"dark\"]", darkTokens, ["  color-scheme: dark;"]),
    ].join("\n");
  },
});

export default {
  tokens: buildTokenTree(rawTokenSource),
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "styles/generated/",
      files: [
        {
          destination: "tokens.css",
          format: "tgt/css-color-modes",
        },
      ],
    },
  },
};
