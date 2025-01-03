import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <Link to={"/"} id="logo" className="text-[2.6rem] text-neutral-800 dark:text-neutral-100 font-semibold tracking-wide mb-0.5">
            Cartify
        </Link>
    );
};
