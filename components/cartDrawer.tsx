
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline, IoClose } from "react-icons/io5";


interface Props {
  onClose: any;
}
const products = [
  {
    id: 1,
    name: "Nombre del producto",
    price: 89.9,
    image:
      "/hero.png",
  },
  {
    id: 2,
    name: "Nombre del producto",
    price: 89.9,
    image:
      "/hero.png",
  },
  {
    id: 3,
    name: "Nombre del producto",
    price: 89.9,
    image:
      "/hero.png",
  },
  {
    id: 4,
    name: "Nombre del producto",
    price: 89.9,
    image:
      "/hero.png",
  },
];

export default function CartDrawer({ onClose }: Props) {

  return (
    <div className="fixed right-0 top-0 z-50 flex h-screen w-full justify-end bg-black/30">
      <div className="flex h-full w-full max-w-[430px] flex-col bg-[#f7f7f5]">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#e4e4e4] px-6 py-5">
          <h2 className="font-serif text-lg">Carrito</h2>

          <button>
            <IoClose onClick={onClose} />
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="flex-1 overflow-y-auto">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="border-b border-[#dfdfdf] px-6 py-5"
            >
              <div className="flex gap-4">
                <div className="relative h-[60px] w-[50px] overflow-hidden bg-[#ececec]">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    fill
                    className="object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between font-italiana">
                    <div>
                      <h3 className="font-serif text-xs">
                        {product?.name}
                      </h3>

                      <p className="mt-6 text-sm font-light font-judson">
                        S/ 89.90
                      </p>
                    </div>

                    <button>
                      <IoTrashOutline className="h-6 w-6 stroke-[1.5]" />
                    </button>
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    <button className="flex h-8 w-8 items-center justify-center rounded bg-[#efefef]">
                      <FaMinus className="h-3 w-3" />
                    </button>

                    <span className="text-sm font-judson">1</span>

                    <button className="flex h-8 w-8 items-center justify-center rounded bg-[#efefef]">
                      <FaPlus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#dfdfdf] px-6 py-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-lg">Total estimado</span>

            <span className="text-xl font-light">S/ 378.60</span>
          </div>

          <Link href="/cart"
          >
            <div className="font-italiana font-semibold h-[50px] w-full justify-center flex items-center rounded-full bg-[#252525] text-sm text-white transition hover:opacity-90 hover:cursor-pointer" >
              Realizar pedido
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}