import Image, { type ImageProps } from "next/image";

type ThemedImageProps = Omit<ImageProps, "src" | "alt"> & {
  alt: string;
  darkSrc: string;
  lightSrc: string;
};

export function ThemedImage({
  alt,
  className,
  darkSrc,
  lightSrc,
  ...props
}: ThemedImageProps) {
  return (
    <>
      <Image
        {...props}
        alt={alt}
        className={["theme-image theme-image-light", className].filter(Boolean).join(" ")}
        src={lightSrc}
      />
      <Image
        {...props}
        alt=""
        aria-hidden="true"
        className={["theme-image theme-image-dark", className].filter(Boolean).join(" ")}
        src={darkSrc}
      />
    </>
  );
}
