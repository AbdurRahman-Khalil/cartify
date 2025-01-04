import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";

import { cartLength } from "../../atoms/atoms";

import cart_img from "../../assets/cart.png"



export const CartBtn = ({ addStyles }) => {

    const cartCount = useAtomValue(cartLength);


    return (
        <Link to={"/cart"} className={`relative ${addStyles}`}>
            <img src={cart_img} width={35} />
            <p className={`absolute -top-1.5 left-0 z-10 text-[0.75rem] text-neutral-800 dark:text-neutral-100 font-semibold tracking-wide 
                ${cartLength >= 10 ? "w-[1.6rem] h-[1.6rem]" : "w-[1.48rem] h-[1.48rem]"} 
                flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur ring-1 ring-neutral-900/30 dark:ring-neutral-50/45 rounded-full`}
            >
                {cartCount}
            </p>
        </Link>
    );
};
