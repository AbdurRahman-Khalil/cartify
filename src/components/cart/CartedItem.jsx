import { useAtom, useSetAtom } from "jotai";

import { cart, cartLength } from "../../store/atoms";



export const CartedItem = ({ item }) => {
    const [shoppingCart, setShoppingCart] = useAtom(cart);
    const setCartCount = useSetAtom(cartLength);

    const removeFromCart = (productId) => {
        const productToRemove = shoppingCart.find((product) => product.id === productId);
        if (productToRemove) {
            setShoppingCart(prev => prev.filter((product) => product.id !== productId));
            setCartCount((prev) => prev - productToRemove.quantity) // Decrease cart length by the quantity of that removed item)
        }
        return shoppingCart;
    }

    const bgStyle = {
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    // const customDelay = 1000 * index


    return (
        <div
            // className={`max-w-full rounded-2xl sm:rounded-xl motion-opacity-in-0 motion-translate-y-in-[-100%] motion-blur-in-md motion-delay-[${customDelay}ms]`}
            className="max-w-full rounded-2xl sm:rounded-xl motion-opacity-in-0 motion-translate-y-in-[-100%] motion-blur-in-md"
            style={bgStyle}
        >
            <div className="text-neutral-100 bg-neutral-900/20 dark:bg-neutral-900/45 backdrop-blur-[45px] p-[0.2rem] min-[360px]:p-[0.3rem] flex gap-2.5 min-[360px]:gap-3 border border-neutral-50/20 rounded-2xl sm:rounded-xl">
                <div className="max-w-[5.3rem] min-h-[5.3rem] min-[360px]:max-w-[6rem] min-[360px]:min-h-[6rem] rounded-xl sm:rounded-lg">
                    <img src={item.image} className="max-w-full h-auto aspect-square object-cover object-center rounded-xl sm:rounded-lg" alt="" />
                </div>
                <div className="flex flex-col justify-between items-start gap-2 my-0.5 min-[360px]:my-1">
                    <p className="text-[0.95rem] min-[360px]:text-[1.05rem] leading-[1.65rem] font-normal tracking-[0.06rem] min-[321px]:tracking-[0.075rem] whitespace-nowrap">
                        {item.title}
                    </p>
                    <div className="flex items-center gap-[1.35rem]">
                        <p className="current-price text-[0.8rem] min-[360px]:text-[0.85rem] font-light tracking-wider">&#x24;<span className="ml-[0.15rem]">{item.price}</span></p>
                        <p className="font-extralight text-[0.835rem] min-[360px]:text-[0.885rem] tracking-wider"> &nbsp;x{item.quantity}</p>
                        <p className="total-price text-[0.87rem] min-[360px]:text-[0.92rem] font-normal tracking-wider">&#x24;<span className="ml-[0.15rem]">{item.totalPrice}</span></p>
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[0.6rem] min-[360px]:text-[0.7rem] font-bold text-red-500 uppercase tracking-widest hover:motion-scale-loop-90 motion-ease-spring-smooth"
                    >
                        remove
                    </button>
                </div>
            </div>
        </div>
    );
};
