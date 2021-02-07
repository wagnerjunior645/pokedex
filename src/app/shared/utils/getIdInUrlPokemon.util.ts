export const getIdInUrlPokemon = (url: string): number => {
  const [, id] = url.split('/').reverse();
  return Number(id);
};
