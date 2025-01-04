import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai'

import { cart } from '../atoms/atoms'

import { CartedItem } from '../components/cart/CartedItem';
import { CartBtn } from "../components/navbar/CartBtn";

import { CloseIcon } from '../svgs/CloseIcon';

import emptyCartIcon from "../assets/empty_cart_icon.png";



export const Cart = () => {
    const shoppingCart = useAtomValue(cart);

    const navigate = useNavigate();
    const location = useLocation();

    const isCart = location.pathname === "/cart";

    const [isVisible, setIsVisible] = useState(isCart);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 400px)");

        const toggleOverflow = () => {
            if (isVisible && mediaQuery.matches) {
                document.body.style.overflow = "hidden"; // Disable scrolling
            } else {
                document.body.style.overflow = ""; // Enable scrolling
            }
        };

        toggleOverflow();

        mediaQuery.addEventListener("change", toggleOverflow);
        return () => {
            mediaQuery.removeEventListener("change", toggleOverflow);
            document.body.style.overflow = ""; // Cleanup on unmount
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => navigate(-1), 300); // Delay navigation to allow the animation to complete
    };

    const totalCartPrice = () => {
        return shoppingCart.reduce(
            (total, item) => total + item.totalPrice, 0
        );
    }


    return (
        <div className={`fixed top-0 right-0 z-20 px-3.5 min-[501px]:px-5 w-full min-[501px]:w-[25rem] min-h-svh flex flex-col justify-between text-neutral-800 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 border-s-0 min-[501px]:border-s-2 border-neutral-900/30 dark:border-neutral-50/30 duration-200 ease-linear
            ${isVisible ? "motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md" : "motion-opacity-out-0 motion-translate-x-out-100 motion-blur-out-md"}`}
        >
            <div className="flex items-center justify-between mt-[1.37rem] mb-[1rem]">
                <div className="flex items-center gap-2">
                    <CartBtn addStyles={"pointer-events-none mb-0.5"} />
                    <h2 className="text-[2rem] font-medium dark:font-normal">Your Cart</h2>
                </div>
                <button onClick={handleClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="relative flex-1  
                before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-7 before:bg-gradient-to-t before:from-transparent before:to-neutral-50 dark:before:to-neutral-900
                after:absolute after:bottom-0 after:left-0 after:z-10 after:w-full after:h-7 after:bg-gradient-to-b after:from-transparent after:to-neutral-50 dark:after:to-neutral-900"
            >
                <div
                    id="cartItemsContainer"
                    className="relative space-y-2.5 py-5 max-h-[calc(100svh-140px)] overflow-y-auto"
                >
                    {
                        shoppingCart.length === 0
                            ? <div className="fixed inset-0 -z-10 w-full h-full flex justify-center items-center motion-opacity-in-0 motion-scale-in-50 motion-blur-in-md">
                                <div className="flex flex-col items-center gap-3">
                                    <img src={emptyCartIcon} className="" width={70} alt="empty cart" />
                                    <p className="text-xl text-neutral-600 dark:text-neutral-300 font-medium dark:font-normal tracking-wide dark:tracking-wider">Your cart is emtpy</p>
                                </div>
                            </div>
                            : shoppingCart.map(item => (
                                <CartedItem key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-3 mb-2.5">
                <p className="text-xl font-medium dark:font-normal tracking-wide dark:tracking-wider">Total:</p>
                <p className="current-price text-[1.2rem] font-medium dark:font-normal tracking-wide dark:tracking-wider mt-[0.1rem]">
                    &#x24;<span className="ml-[0.08rem]">{totalCartPrice()}</span>
                </p>
            </div>
        </div>
    );
};
