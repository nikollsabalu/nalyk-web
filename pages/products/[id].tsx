// pages/products/[id].tsx

import { useRouter } from "next/router";
import ProductDetail from "./ProductDetails";
import Layout from "../../components/Layout";



export default function ProductPage() {
    const router = useRouter();

    const { id } = router.query;

    // luego esto vendrá de Firebase
    const product = {
        id,
        name: "Nombre del producto",
        price: 39.9,
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        features: [
            "Resistente al agua.",
            "Chapado en oro de 18k.",
            "Hecho a mano.",
        ],
        images: [
            {
                id: 1,
                image: "/hero.png",
            },
            {
                id: 2,
                image: "/hero.png",
            },
            {
                id: 3,
                image: "/hero.png",
            },
            {
                id: 4,
                image: "/hero.png",
            },
            {
                id: 5,
                image: "/hero.png",
            },
        ],
        relatedProducts: [],

    };

    const relatedProducts = [
        {
            id: 2,
            name: "Golden Ring",
            price: 59.9,
            image: "/hero.png",
            hoverImage: "/hover.png",
        },
        {
            id: 3,
            name: "Pearl Necklace",
            price: 89.9,
            image: "/hero.png",
            hoverImage: "/hover.png",
        },
        {
            id: 4,
            name: "Star Earrings",
            price: 69.9,
            image: "/hero.png",
            hoverImage: "/hover.png",
        },
        {
            id: 5,
            name: "Aura Bracelet",
            price: 79.9,
            image: "/hero.png",
            hoverImage: "/hover.png",
        },
    ]



    return (

        <Layout>
            <ProductDetail
                name={product?.name}
                price={product?.price}
                description={product?.description}
                features={product?.features}
                images={product?.images}
                relatedProducts={relatedProducts}
            />
        </Layout>
    );
}