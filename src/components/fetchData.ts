import axios from "axios";
import { initialURL } from "../api";

const fetchData = async (query: any, data: Object, setData: Function) => {
  let searched: string;
  setData({ ...data, isLoading: true });

  if (query) {
    searched = query;
    const apiData = await axios.get(initialURL(searched));
    setData({
      ...data,
      searchData: apiData.data.data.recipes,
      isLoading: false,
    });
  } else {
    searched = "steak";
    const apiData = await axios.get(initialURL(searched));
    setData({
      ...data,
      recipeData: apiData.data.data.recipes,
      isLoading: false,
    });
  }
};

export default fetchData;
