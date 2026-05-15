// components/products/ProductDetail.tsx

import Image from "next/image";
import ProductGrid from "../../components/ProductGrid"; 

interface ProductImage {
    id: number;
    image: string;
}

interface RelatedProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    hoverImage: string;
}

interface ProductDetailProps {
    name: string;
    price: number;
    description: string;
    features: string[];
    images: ProductImage[];
    relatedProducts: RelatedProduct[];
}

export default function ProductDetail({
    name,
    price,
    description,
    features,
    images,
    relatedProducts,
}: ProductDetailProps) {

    const collections = [
        {
            id: "col_001",
            name: "Anillos Dorados",
            image: "/hover.png",
            description: "Piezas doradas con diseño elegante y atemporal."
        },
        {
            id: "col_002",
            name: "Collares Perla",
            image: "/hover.png",
            description: "Perlas delicadas que elevan cualquier look."
        },
        {
            id: "col_003",
            name: "Aretes Minimalistas",
            image: "/hover.png",
            description: "Diseños limpios, modernos y ligeros."
        },
        {
            id: "col_004",
            name: "Barroco Chunky",
            image: "/hover.png",
            description: "Piezas bold inspiradas en lo barroco y artístico."
        },
        {
            id: "col_005",
            name: "Astro Collection",
            image: "/hover.png",
            description: "Inspiración celestial, lunas y estrellas."
        },
        {
            id: "col_006",
            name: "Perlas & Oro",
            image: "/hover.png",
            description: "La combinación clásica de lujo y suavidad."
        }
    ];

    return (

        <section className="  px-6 py-14 lg:px-16">
            <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_420px]">

                {/* LEFT */}
                <div>
                    <div className="grid grid-cols-2">
                        {images?.slice(0, 2)?.map((item) => (
                            <div
                                key={item.id}
                                className="
                                relative
                                aspect-[0.9]
                                overflow-hidden
                                bg-[#eceae6]
                                "
                            >
                                <Image
                                    src={item.image}
                                    alt={name}
                                    layout='fill'
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3">
                        {images?.slice(2, 5)?.map((item) => (
                            <div
                                key={item.id}
                                className="
                                relative
                                aspect-square
                                overflow-hidden
                                bg-[#eceae6]
                                "
                            >
                                <Image
                                    src={item.image}
                                    alt={name}
                                    layout='fill'
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <h1
                        className="
                        font-italiana
                        text-2xl
                        font-bold
                        uppercase
                        leading-none
                        "
                    >
                        {name}
                    </h1>

                    <p className="mt-2 font-judson text-lg">
                        S/. {price?.toFixed(2)}
                    </p>

                    <button
                        className="
                        mt-10
                        h-[58px]
                        w-full
                        rounded-full
                        bg-[#252525]
                        text-white
                        "
                    >
                        Añadir al carrito
                    </button>

                    <div className="mt-20  font-italiana">
                        <h2
                            className="
                            font-judson
                            text-xl
                            uppercase
                        "
                        >
                            Detalles del producto
                        </h2>

                        <p
                            className="
                                mt-5
                                font-judson
                                text-[15px]
                                leading-[1.9]
                                text-[#444]
                            "
                        >
                            {description}
                        </p>

                        <ul
                            className="
                            mt-8
                            list-disc
                            space-y-2
                            pl-5
                            font-judson
                            text-[15px]
                            text-[#444]
                        "
                        >
                            {features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* RELATED PRODUCTS */}
            <ProductGrid
                title="También te puede interesar"
                products={relatedProducts}
            />

            {/* <CollectionGrid
                collections={collections}
            /> */}


        </section>
    );
}