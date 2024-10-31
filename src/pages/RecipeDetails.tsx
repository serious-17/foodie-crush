import { useAtom } from "jotai";
import { currentRecipe } from "../components/states";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import style from "../styles/RecipeDetails.module.scss";

const RecipeDetails = () => {
  const [recipe]: any = useAtom(currentRecipe);

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
    <div className={style.container}>
      <motion.div layoutId={`${recipeData.id}`} className={style.background}>
        <div className={style.details}>
          <div className={style.image}>
            <motion.img
              layoutId={`image ${recipeData.id}`}
              src={recipeData.image_url}
              alt=""
            />
          </div>
          <div className={style.description}>
            <motion.h3 layoutId={`title ${recipeData.id}`}>
              {recipeData.title}
            </motion.h3>
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
        <h2>Ingredients:</h2>
        <div className={style.ingredients}>
          {recipeData.ingredients.map((ing: any) => (
            <div className={style.ingredient} key={uuid()}>
              <h3>
                {checkInfo(ing.quantity)} {checkInfo(ing.unit)}
              </h3>
              <h4>{checkInfo(ing.description)}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RecipeDetails;
