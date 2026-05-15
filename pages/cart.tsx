// components/cart/CartPage.tsx
"use client";

import Image from "next/image";
import { FaMinus, FaPlus, FaLock } from "react-icons/fa";
import { IoTrashOutline, IoClose } from "react-icons/io5";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

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


export default function Cart() {


    const {
        cart,
        increaseQty,
        decreaseQty,
        removeItem,
        subtotal,
        hydrated,
        getSubtotalItem
    } = useCart();

    return (


        <Layout>

            <section className="mx-auto flex max-w-[1200px] gap-20 px-6 py-16 lg:flex-row flex-col">
                {/* LEFT */}
                <div className="flex-1">
                    <h2 className="font-bold mb-6 border-b border-[#d8d8d8] pb-3 font-italiana text-lg uppercase tracking-wide">
                        Mi carrito
                    </h2>

                    <div className="space-y-5">
                        {cart.map((product) => (
                            <CartItem key={product?.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                        <input
                            placeholder="Código de descuento"
                            className="h-[52px] w-[260px] rounded-full border border-[#bfbfbf] bg-transparent px-6 text-sm outline-none"
                        />

                        <button className="h-[52px] rounded-full bg-[#252525] px-10 text-sm text-white transition hover:opacity-90">
                            Aplicar
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[360px]">
                    <div className="sticky top-10">
                        <h3 className="font-bold border-b border-[#d8d8d8] pb-3 font-italiana text-lg uppercase">
                            Resumen del pedido
                        </h3>

                        <div className="mt-8 space-y-5 text-[15px]  font-italiana">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span className="font-judson">S/ {subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span>Envío</span>
                                <span className="font-judson">GRATIS</span>
                            </div>

                            <div className="my-6 border-t border-[#d8d8d8]" />

                            <div className="flex items-center justify-between text-[28px] font-light">
                                <span className="font-bold">Total</span>
                                <span className="font-judson">S/ {subtotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="mt-8 font-italiana font-medium tracking-wider h-[50px] w-full rounded-full bg-[#252525] text-[15px] text-white transition hover:opacity-90">
                            Finalizar compra
                        </button>


                        <div className="flex gap-2 items-center mt-4 justify-center">
                            <FaLock />
                            <div className=" text-center text-sm">
                                Pago seguro
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>



    );
}


function CartItem({ product }) {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeItem,
        subtotal,
        hydrated,
        getSubtotalItem
    } = useCart();
    return (
        <div className="border-b border-[#d8d8d8] pb-4">
            <div className="flex gap-5">
                <div className="relative h-[100px] w-[70px] overflow-hidden bg-[#ececec]">
                    <Image
                        src={product?.image}
                        alt={product?.name}
                        layout='fill'
                        objectFit="cover"
                    />
                </div>

                <div className="flex flex-1 justify-between">
                    <div className="flex flex-col justify-between font-italiana">
                        <div>
                            <h3 className="font-serif text-xs">{product?.name}</h3>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="flex h-7 w-7 items-center justify-center rounded bg-[#efefef]"
                                onClick={() => decreaseQty(product.id)}>
                                <FaMinus className="h-3 w-3" />
                            </button>

                            <span className="text-sm font-judson">
                                {product.quantity}
                            </span>

                            <button className="flex h-7 w-7 items-center justify-center rounded bg-[#efefef]"
                                onClick={() => increaseQty(product.id)}>
                                <FaPlus className="h-3 w-3" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-light font-judson">S/ {subtotal.toFixed(2)} </span>

                            <button>
                                <IoTrashOutline className="h-5 w-5 stroke-[1.5]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

