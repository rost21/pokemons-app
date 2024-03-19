import { ExtendPokemonDto, PokemonData, PokemonDto } from "../src/types";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchPokemonData = (url: string): Promise<{ count: number; data: PokemonData[] }> => {
  return fetch(url)
    .then((response) => response.json())
    .then(async (data) => {
      const { count, results } = data;
      const mappedData = await Promise.all<PokemonData>(
        results.map(async (d: PokemonDto) => {
          const { name, url } = d;

          // imitate long fetching
          await sleep(5000);

          const otherData = await fetch(url)
            .then(async (response) => {
              const pokemonDto = (await response.json()) as ExtendPokemonDto;
              const {
                abilities,
                base_experience,
                height,
                weight,
                id,
                sprites: {
                  other: {
                    dream_world: { front_default },
                  },
                },
                stats,
              } = pokemonDto;
              return {
                abilities: abilities.map((a) => a.ability.name),
                experience: base_experience,
                height,
                weight,
                id,
                avatarUrl: front_default,
                stats: stats.map((s) => ({ name: s.stat.name, value: s.base_stat }))
              };
            })
            .catch(e => console.log('Something went wrong', e))
            return {
            name,
            ...otherData,
          } as PokemonData;
        })
      );

      return { count, data: mappedData };
    });
};
