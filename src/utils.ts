import { Order } from "./constants";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const getComparator = (order: Order, orderBy): (a, b) => number => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const uniqBy = <T>(arr: T[], predicate: (a) => keyof T | keyof T): T[] => {
  const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate];

  return [...arr.reduce((map, item) => {
    const key = (item === null || item === undefined) ?
      item : cb(item);

    map.has(key) || map.set(key, item);

    return map;
  }, new Map()).values()];
};

export const getApiLink = (offset: number, rowsPerPage: number) => {
  return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${rowsPerPage}`;
}