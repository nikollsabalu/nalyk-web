import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "./cartDrawer";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


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
                  sticky font-italiana top-0 left-0 z-20 w-full px-8 md:px-14 py-5
                  flex items-center justify-between text-xs tracking-[0.2em]
                  transition-all duration-300 bg-[#F5F5F5]  
                `}
      >

        <nav className="hidden md:flex items-center gap-12 text-black ">
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

        <div className="hover:cursor-pointer" >

          <button onClick={() => setIsCartOpen(true)}>
            <HiOutlineShoppingCart size={20} />
          </button>
        </div>
      </header>

      {isCartOpen && (
        <CartDrawer onClose={() => setIsCartOpen(false)} />
      )}

    </>
  );
}