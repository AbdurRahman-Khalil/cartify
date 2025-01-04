import { useAtom } from "jotai";

import { cart, cartLength } from "../../atoms/atoms";

import cartIcon from "../../assets/add_to_cart.png";



export const Product = ({ id, image, title, price }) => {
    const [shoppingCart, setShoppingCart] = useAtom(cart);
    const [cartCount, setCartCount] = useAtom(cartLength);

    const handleAddToCart = () => {
        setShoppingCart((prev) => {
            const itemIndex = prev.findIndex((item) => item.id === id);

            if (itemIndex > -1) {
                // Update the quantity of the existing item
                const updatedCart = [...prev];
                updatedCart[itemIndex].quantity += 1;
                updatedCart[itemIndex].totalPrice += price;
                return updatedCart;
            } else {
                // Add a new item to the cart
                const newItem = {
                    id,
                    image,
                    title,
                    price,
                    totalPrice: price,
                    quantity: 1,
                };
                return [newItem, ...prev];
            }
        });

        // Increment the cart count
        setCartCount((prev) => prev + 1);
    };

    // Find the product in the cart to display its quantity
    const isProduct = shoppingCart.find((item) => item.id === id);


    return (
        <div className="relative min-h-full rounded-2xl sm:rounded-xl motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
            {isProduct
                ? <div className="absolute -top-1.5 -right-1.5 z-10 space-x-1 bg-emerald-400/90 dark:bg-emerald-500/90 flex items-center justify-center p-1.5 rounded-full motion-translate-y-in-100 motion-rotate-in-45 motion-blur-in-sm motion-duration-500">
                    <img src={cartIcon} className=" bri" width={14} alt="" />
                    <p className="text-[0.8rem] text-neutral-50 tracking-widest">
                        x{isProduct.quantity}
                    </p>
                </div>
                : null
            }
            <img src={image} className="max-w-full h-auto aspect-square object-cover object-center border border-neutral-900/20 dark:border-neutral-50/15 rounded-2xl sm:rounded-xl hover:scale-105 duration-[250ms] ease-in cursor-pointer" alt={`${title}'s image`} />
            <div className="relative text-center px-3 pt-2 min-[420px]:pt-2.5 pb-3.5">
                <h3 className="flex-1 min-[340px]:max-[419px]:text-[1.1rem] text-[1.25rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal tracking-wide dark:tracking-wider min-[340px]:max-[419px]:leading-[1.5rem] leading-[1.65rem] line-clamp-2">{title}</h3>
                <div className="absolute min-[340px]:max-[419px]:-top-[2.95rem] -top-[3.15rem] flex space-x-2 min-[340px]:max-[419px]:right-2.5 right-3">
                    <p className="flex items-center justify-center gap-[0.15rem] text-neutral-100 min-[340px]:max-[419px]:text-[0.93rem] text-[1.05rem] tracking-wide
                            max-w-fit bg-neutral-900/25 backdrop-blur-[6px] px-3 py-1.5 mx-auto ring-1 ring-neutral-50/20 rounded-2xl"
                    >
                        &#x24; <span>{price}</span>
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-emerald-500 flex items-center justify-center p-2 rounded-2xl"
                    >
                        <img src={cartIcon} className=" bri" width={22} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
