import axios from "axios";
import { recipeURL } from "../api";

const fetchCurrentRecipe = async (id: any, data: Object, setData: Function) => {
  setData({ ...data, isLoading: true });

  const apiData = await axios.get(recipeURL(id));
  setData({
    ...data,
    recipeData: apiData.data.data.recipe,
    isLoading: false,
  });
};

export default fetchCurrentRecipe;
