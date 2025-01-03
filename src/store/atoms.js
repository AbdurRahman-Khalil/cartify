import { atom } from "jotai";

import productsData from "./ProductData";


// Dark/Light Theme
export const themeAtom = atom("light");


// Products
export const products = atom(productsData);
export const cart = atom([]);
export const cartLength = atom(0);