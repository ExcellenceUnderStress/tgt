"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/cart-context";

function formatMoney(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, removeItem, updateItem } =
    useCart();
  const lines = cart?.lines.edges.map((e) => e.node) ?? [];
  const isEmpty = lines.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            aria-hidden
          />

          <motion.aside
            className="cart-drawer"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
          >
            <div className="cart-drawer-header">
              <h2>
                Cart
                {cart?.totalQuantity ? ` (${cart.totalQuantity})` : ""}
              </h2>
              <button
                className="cart-drawer-close"
                onClick={closeCart}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {isEmpty ? (
              <div className="cart-empty">
                <p>Your cart is empty.</p>
                <Link
                  className="button-secondary"
                  href="/shop/merch"
                  onClick={closeCart}
                >
                  Shop Merch
                </Link>
              </div>
            ) : (
              <>
                <ul className="cart-lines" aria-label="Cart items">
                  {lines.map((line) => (
                    <li key={line.id} className="cart-line">
                      <div className="cart-line-media">
                        {line.merchandise.product.featuredImage ? (
                          <Image
                            src={line.merchandise.product.featuredImage.url}
                            alt={
                              line.merchandise.product.featuredImage.altText ??
                              line.merchandise.product.title
                            }
                            width={80}
                            height={80}
                          />
                        ) : (
                          <div
                            className="cart-line-media-fallback"
                            aria-hidden
                          />
                        )}
                      </div>

                      <div className="cart-line-details">
                        <p className="cart-line-title">
                          {line.merchandise.product.title}
                        </p>
                        {line.merchandise.title !== "Default Title" && (
                          <p className="cart-line-variant">
                            {line.merchandise.title}
                          </p>
                        )}
                        <p className="cart-line-price">
                          {formatMoney(
                            line.merchandise.price.amount,
                            line.merchandise.price.currencyCode,
                          )}
                        </p>
                        <div className="cart-line-actions">
                          <div className="cart-qty" aria-label="Quantity">
                            <button
                              className="cart-qty-btn"
                              disabled={isLoading}
                              aria-label="Decrease quantity"
                              onClick={() =>
                                line.quantity > 1
                                  ? updateItem(line.id, line.quantity - 1)
                                  : removeItem(line.id)
                              }
                            >
                              −
                            </button>
                            <span>{line.quantity}</span>
                            <button
                              className="cart-qty-btn"
                              disabled={isLoading}
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateItem(line.id, line.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="cart-line-remove"
                            disabled={isLoading}
                            onClick={() => removeItem(line.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Subtotal</span>
                    <span>
                      {cart &&
                        formatMoney(
                          cart.cost.totalAmount.amount,
                          cart.cost.totalAmount.currencyCode,
                        )}
                    </span>
                  </div>
                  <a
                    className="button-primary"
                    href={cart?.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Checkout →
                  </a>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
