import { atom } from "jotai";

export const apiData = atom({
  recipeData: [],
  searchData: [],
  isLoading: true,
});

export const currentRecipe = atom({
  recipeData: [],
  isLoading: true,
});
