"use client";

import { useCart } from "@/context/cart-context";

export function CartTrigger() {
  const { openCart, cart } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <button
      className="cart-trigger"
      onClick={openCart}
      aria-label={`Open cart${count > 0 ? ` — ${count} item${count === 1 ? "" : "s"}` : ""}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {count > 0 && (
        <span className="cart-trigger-count" aria-hidden>
          {count}
        </span>
      )}
    </button>
  );
}
