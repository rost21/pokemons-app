import { HeadCell, Page } from "./types";

export const pages: Page[] = [
  {
    title: 'Pokemons',
    path: '/',
  },
  {
    title: 'Other page',
    path: '/other',
  },
];

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    label: 'Name',
    align: 'center'
  },
  {
    id: 'weight',
    numeric: true,
    label: 'Weight',
  },
  {
    id: 'height',
    numeric: true,
    label: 'Height',
  },
  {
    id: 'experience',
    numeric: true,
    label: 'Exprerience',
  },
  {
    id: 'abilities',
    numeric: false,
    label: 'Abilities',
  }
];

export type Order = 'asc' | 'desc';