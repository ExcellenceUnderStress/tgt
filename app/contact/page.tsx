import { IntakeForm, type ProductInquiry } from "@/components/intake-form";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const sku = firstParam(params.sku).trim();
  const product = firstParam(params.product).trim();
  const category = firstParam(params.category).trim();

  const productInquiry: ProductInquiry | undefined =
    sku || product
      ? {
          category,
          product: product || sku,
          sku,
        }
      : undefined;

  return <IntakeForm productInquiry={productInquiry} />;
}
