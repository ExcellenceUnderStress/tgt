import { BrandGrid } from "@/components/BrandGrid";

type BrandStripProps = {
  brands?: unknown[];
};

export function BrandStrip(_: BrandStripProps) {
  return <BrandGrid />;
}
