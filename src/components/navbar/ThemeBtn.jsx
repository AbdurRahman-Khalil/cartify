import { useEffect } from "react";

import { useAtom } from "jotai";

import { themeAtom } from "../../store/atoms";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";



export const ThemeBtn = () => {

    const [theme, setTheme] = useAtom(themeAtom);

    useEffect(() => {
        const htmlTree = document.querySelector("html");

        htmlTree.classList.remove("dark", "light");
        htmlTree.classList.add(theme);
    }, [theme]);

    const handleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }


    return (
        <button onClick={handleTheme}>
            {
                theme === "light"
                    ? <img src={sun} width={31} alt="sun_img" />
                    : <img src={moon} width={31} alt="moon_img" />
            }
        </button>
    );
};
