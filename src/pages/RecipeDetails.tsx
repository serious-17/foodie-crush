import { useAtom } from "jotai";
import { currentRecipe } from "../components/states";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import style from "../styles/RecipeDetails.module.scss";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { fade, pageAnim } from "../animation";

const RecipeDetails = () => {
  const [recipe]: any = useAtom(currentRecipe);
  const { recipeData } = recipe;
  const navigate = useNavigate();

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

  const closeDetails = (e: any) => {
    console.log(e.target);
    if (
      e.target.classList.contains("container") ||
      e.target.classList.contains("close")
    ) {
      navigate("/");
    }
  };

  return (
    <div onClick={closeDetails} className={`${style.container} container`}>
      <motion.div layoutId={`${recipeData.id}`} className={style.background}>
        <Icon
          className={`${style.close} close`}
          icon="line-md:close-small"
          width="3rem"
          height="3rem"
          style={{ color: "black" }}
        />
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
            <p>Cooking Time: {getTime(recipeData.cooking_time)} Hours</p>
            <p>Servings: {recipeData.servings}</p>

            <p>
              Source:{" "}
              <a href={recipeData.source_url} target="_blank">
                {recipeData.publisher}
              </a>
            </p>
            <button>Add to favourites</button>
          </div>
        </div>
        <h2>Ingredients: {recipeData.ingredients.length}</h2>
        <div className={style.ingredients}>
          <ul>
            {recipeData.ingredients.map((ing: any) => (
              <div className={style.ingredient} key={uuid()}>
                <li>
                  <p>
                    {checkInfo(ing.quantity)} {checkInfo(ing.unit)}{" "}
                    {checkInfo(ing.description)}
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default RecipeDetails;
