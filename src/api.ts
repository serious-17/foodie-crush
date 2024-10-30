export const initialURL = (query: string) =>
  `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`;

export const recipeURL = (id: any) =>
  `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
