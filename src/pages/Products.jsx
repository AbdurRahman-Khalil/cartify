import { useAtomValue } from "jotai";

import { products } from "../atoms/atoms";

import shuffleProducts from "../helpers/shuffleProducts";

import { Product } from "../components/products/Product";
import { Outlet } from "react-router-dom";



export const Products = () => {
    const allProducts = useAtomValue(products);
    const shuffledProducts = shuffleProducts(allProducts);

    return (
        <>
            <section className="mt-32 px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear">
                <h2 className="text-center uppercase text-[2.3rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal tracking-wide dark:tracking-wider mb-11">
                    Products
                </h2>
                <div className="grid grid-cols-1 gap-[1.15rem] min-[340px]:gap-[0.8rem] min-[340px]:grid-cols-2 min-[420px]:gap-[0.935rem] min-[620px]:grid-cols-3 min-[859px]:grid-cols-4 min-[1060px]:grid-cols-5 min-[1700px]:grid-cols-6">
                    {
                        shuffledProducts.map(item => (
                            <Product
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        ))
                    }
                </div>
            </section>
            <Outlet />
        </>
    );
};
