"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

const initialProducts = [
  {
    id: 1,
    name: "Nombre del producto",
    price: 89.9,
    image: "/hero.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Nombre del producto",
    price: 89.9,
    image: "/hero.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Nombre del producto",
    price: 89.9,
    image: "/hero.png",
    quantity: 1,
  },
];

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // 🔵 load cart
  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      setCart(JSON.parse(saved));
    } else {
      setCart(initialProducts);
    }

    setHydrated(true);
  }, []);

  // 💾 save cart (debounce)
  useEffect(() => {
    if (!hydrated) return;

    const timeout = setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, 300);

    return () => clearTimeout(timeout);
  }, [cart, hydrated]);

  // ➕ add to cart
  const addToCart = (product: any) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ➕ increase
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ decrease
  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 🗑 remove
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 subtotal general
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 💰 subtotal por item
  const getSubtotalItem = (item: any) => {
    return item.price * item.quantity;
  };

  // 🛒 total items
  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        hydrated,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        subtotal,
        getSubtotalItem,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// hook limpio para consumir
export const useCart = () => useContext(CartContext);