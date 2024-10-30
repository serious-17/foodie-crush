import { useAtom } from "jotai";
import { currentRecipe } from "./states";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

const RecipeDetails = () => {
  const [recipe, setRecipe]: any = useAtom(currentRecipe);

  const { recipeData } = recipe;

  const getTime = (time: number) => {
    let formatTime;
    let formatHour: any = Math.floor(time / 60);
    let formatMinutes: any = time % 60;

    if (formatHour < 10) {
      formatHour = `0${formatHour}`;
    }

    if (formatMinutes < 10) {
      formatMinutes = `${formatMinutes}0`;
    }

    if (time >= 60) {
      formatTime = `${formatHour}:${formatMinutes}`;
    } else {
      formatTime = `00:${time}`;
    }

    return formatTime;
  };

  const checkInfo = (info: any) => {
    if (!info) return;
    return info;
  };

  return (
    <motion.div layoutId={`${recipeData.id}`} className="container">
      <div className="background">
        <div className="details">
          <div className="recipe">
            <div className="image">
              <img src={recipeData.image_url} alt="" />
            </div>
            <div className="description">
              <h2>{recipeData.title}</h2>
              <p>Cooking Time: {getTime(recipeData.cooking_time)}</p>
              <p>Servings: {recipeData.servings}</p>

              <p>
                Source:{" "}
                <a href={recipeData.source_url} target="_blank">
                  {recipeData.publisher}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="ingredients">
          {recipeData.ingredients.map((ing: any) => (
            <div className="ingredient" key={uuid()}>
              <h3>
                {checkInfo(ing.quantity)} {checkInfo(ing.unit)}
              </h3>
              <h4>{checkInfo(ing.description)}</h4>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDetails;
