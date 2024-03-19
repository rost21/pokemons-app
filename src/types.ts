import { TableCellProps } from "@mui/material";

export interface Page {
  title: string;
  path: string;
}

export interface HeadCell {
  id: keyof PokemonData;
  label: string;
  numeric: boolean;
  align?: TableCellProps['align'];
}

interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonData {
  id: string;
  name: string;
  avatarUrl: string;
  height: number;
  weight: number;
  experience: number;
  abilities: string[];
  stats: PokemonStat[];
}

export interface PokemonDto {
  name: string;
  url: string;
}

interface PokemonAbilityDto {
  ability: {
    name: string;
  };
}

interface PokemonStatDto {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface ExtendPokemonDto {
  abilities: PokemonAbilityDto[];
  base_experience: number;
  height: number;
  weight: number;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: PokemonStatDto[];
}
