import { atom } from "jotai";

export const textAtom = atom("I love Chloe Gan");
export const uppercaseTextAtom = atom((get) => get(textAtom).toUpperCase());
