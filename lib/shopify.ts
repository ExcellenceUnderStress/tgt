const STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "";
const STOREFRONT_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";
const API_URL = `https://${STORE_DOMAIN}/api/2024-10/graphql.json`;

export function isShopifyConfigured(): boolean {
  return Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);
}

async function storefront<T>(
  query: string,
  variables?: Record<string, unknown>,
  fetchOptions?: RequestInit,
): Promise<T> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(`Shopify Storefront API: ${res.status} ${res.statusText}`);
  }

  const { data, errors } = await res.json();
  if (errors?.length) {
    throw new Error(`Shopify GraphQL: ${errors[0].message}`);
  }
  return data as T;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type ShopifyImage = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ShopifyProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: ShopifyImage | null;
  variants: { edges: { node: ShopifyProductVariant }[] };
};

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    product: {
      title: string;
      featuredImage: ShopifyImage | null;
    };
  };
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { totalAmount: { amount: string; currencyCode: string } };
  lines: { edges: { node: ShopifyCartLine }[] };
};

// ─── Fragments ───────────────────────────────────────────────────────────────

const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id checkoutUrl totalQuantity
    cost { totalAmount { amount currencyCode } }
    lines(first: 100) {
      edges {
        node {
          id quantity
          merchandise {
            ... on ProductVariant {
              id title
              price { amount currencyCode }
              product {
                title
                featuredImage { url altText width height }
              }
            }
          }
        }
      }
    }
  }
`;

// ─── Products ────────────────────────────────────────────────────────────────

export async function getCollectionProducts(
  handle: string,
): Promise<ShopifyProduct[]> {
  const data = await storefront<{
    collection: { products: { edges: { node: ShopifyProduct }[] } } | null;
  }>(
    `
    query CollectionProducts($handle: String!) {
      collection(handle: $handle) {
        products(first: 20) {
          edges {
            node {
              id handle title description
              featuredImage { url altText width height }
              variants(first: 5) {
                edges {
                  node {
                    id title availableForSale
                    price { amount currencyCode }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    { handle },
    { next: { revalidate: 60 } } as RequestInit,
  );
  return data.collection?.products.edges.map((e) => e.node) ?? [];
}

// ─── Cart ────────────────────────────────────────────────────────────────────

export async function createCart(): Promise<ShopifyCart> {
  const data = await storefront<{ cartCreate: { cart: ShopifyCart } }>(
    `
    mutation CartCreate {
      cartCreate { cart { ...CartFragment } }
    }
    ${CART_FRAGMENT}
    `,
    undefined,
    { cache: "no-store" },
  );
  return data.cartCreate.cart;
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await storefront<{ cart: ShopifyCart | null }>(
    `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) { ...CartFragment }
    }
    ${CART_FRAGMENT}
    `,
    { cartId },
    { cache: "no-store" },
  );
  return data.cart;
}

export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity: number,
): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesAdd: { cart: ShopifyCart } }>(
    `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ...CartFragment }
      }
    }
    ${CART_FRAGMENT}
    `,
    { cartId, lines: [{ merchandiseId, quantity }] },
    { cache: "no-store" },
  );
  return data.cartLinesAdd.cart;
}

export async function removeFromCart(
  cartId: string,
  lineId: string,
): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesRemove: { cart: ShopifyCart } }>(
    `
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ...CartFragment }
      }
    }
    ${CART_FRAGMENT}
    `,
    { cartId, lineIds: [lineId] },
    { cache: "no-store" },
  );
  return data.cartLinesRemove.cart;
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesUpdate: { cart: ShopifyCart } }>(
    `
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ...CartFragment }
      }
    }
    ${CART_FRAGMENT}
    `,
    { cartId, lines: [{ id: lineId, quantity }] },
    { cache: "no-store" },
  );
  return data.cartLinesUpdate.cart;
}
