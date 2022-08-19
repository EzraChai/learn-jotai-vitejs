import { atom } from "jotai";

const getInitialValue = (item: string, initialValue: number) => {
  const getItem = localStorage.getItem(item);
  if (getItem !== null) {
    return parseInt(getItem);
  }
  return initialValue;
};

const setNumberToLocalStorage = (
  set: Function,
  item: string,
  nextValue: number
) => {
  set(countAtom, nextValue);
  localStorage.setItem(item, nextValue.toString());
};

export const countAtom = atom<number>(getInitialValue("count", 0));

export const incrementCountAtom = atom(
  (get) => get(countAtom),
  (get, set, _args) => {
    const nextValue = get(countAtom) + 1;
    setNumberToLocalStorage(set, "count", nextValue);
  }
);

export const decrementCountAtom = atom(null, (get, set, _args) => {
  const nextValue = get(countAtom) - 1;
  setNumberToLocalStorage(set, "count", nextValue);
});
