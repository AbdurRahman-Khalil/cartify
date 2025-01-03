import { Logo } from './Logo'
import { CartBtn } from './CartBtn';
import { ThemeBtn } from './ThemeBtn';



export const Navbar = () => {
    return (
        <nav className="fixed top-0 right-0 left-0 z-20 mx-3.5 md:mx-6 xl:mx-10 2xl:mx-auto 2xl:container my-2 px-2.5 py-1 flex justify-between items-center bg-neutral-50/40 dark:bg-neutral-900/45 backdrop-blur-xl border border-neutral-900/20 dark:border-neutral-50/20 rounded-2xl duration-200 ease-linear">
            <Logo />
            <div className="flex items-center gap-4">
                <CartBtn />
                <ThemeBtn />
            </div>
        </nav>
    );
};


