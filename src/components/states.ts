import { atom } from "jotai";

export const apiData: any = atom({
  recipeData: [],
  searchData: [],
  isLoading: true,
});
