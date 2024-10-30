import { useAtom } from "jotai";
import { currentRecipe } from "./states";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useAtom(currentRecipe);

  return <div className="recipeDetails"></div>;
};

export default RecipeDetails;
