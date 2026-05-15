import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "./cartDrawer"; 
import { useCart } from "../context/CartContext";

export default function Header() {

  const {
    cartCount
  } = useCart();


  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const openDrawer = () => {
    setIsCartVisible(true);
    setIsCartOpen(true);
  };
  const closeDrawer = () => {
    setIsCartOpen(false);

    setTimeout(() => {
      setIsCartVisible(false);
    }, 300);
  };


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

    <>
      <header
        className={`
                  sticky  top-0 left-0 z-20 w-full px-8 md:px-14 py-5
                  flex items-center justify-between text-xs 
                  transition-all duration-300 bg-[#F5F5F5]  
                `}
      >

        <nav className="hidden md:flex items-center gap-12 text-black font-italiana tracking-[0.2em]">
          <a href="#" className="font-semibold hover:font-bold">NEW IN</a>
          <a href="#" className="font-semibold hover:font-bold">Nosotros</a>
        </nav>

        <div className="font-bold text-xl text-white">
          <Link href="/" >
            <Image
              src="/logo.svg"
              alt="Nalyk"
              width={120}
              height={32}
              className="h-8 w-auto hover:cursor-pointer"
            />
          </Link>
        </div>

        <div className="hover:cursor-pointer relative" >

          <button onClick={openDrawer}>
            <HiOutlineShoppingCart size={20} />
          </button>

          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 font-bold flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      <CartDrawer onClose={closeDrawer} isCartOpen={isCartOpen} />


    </>
  );
}