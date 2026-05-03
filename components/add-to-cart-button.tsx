"use client";

import { useState } from "react";

import { useCart } from "@/context/cart-context";

type AddToCartButtonProps = {
  variantId: string;
  availableForSale: boolean;
  label?: string;
};

export function AddToCartButton({
  variantId,
  availableForSale,
  label = "Add to Cart",
}: AddToCartButtonProps) {
  const { addItem, isLoading } = useCart();
  const [added, setAdded] = useState(false);

  if (!availableForSale) {
    return (
      <button className="button-secondary" disabled>
        Sold Out
      </button>
    );
  }

  const handleClick = async () => {
    await addItem(variantId);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      className="button-primary"
      onClick={handleClick}
      disabled={isLoading || added}
    >
      {added ? "Added!" : isLoading ? "Adding…" : label}
    </button>
  );
}
