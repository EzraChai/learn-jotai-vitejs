import { atom } from "jotai";

export const countAtom = atom<number>(0);

export const incrementCountAtom = atom(
  (get) => get(countAtom),
  (get, set, _args) => set(countAtom, get(countAtom) + 1)
);

export const decrementCountAtom = atom(null, (get, set, _args) =>
  set(countAtom, get(countAtom) - 1)
);
