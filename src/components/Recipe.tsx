import { motion } from "framer-motion";
import fetchCurrentRecipe from "./fetchCurrentRecipe";
import { currentRecipe } from "./states";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { recipeAnim } from "../animation";

type Props = {
  id: number;
  image: string;
  title: string;
  publisher: string;
  style: CSSModuleClasses;
};

const Recipe = ({ id, image, title, publisher, style }: Props) => {
  const [data, setData] = useAtom(currentRecipe);
  const navigate = useNavigate();

  const getData = () => {
    fetchCurrentRecipe(id, data, setData);
    navigate(`/recipe/${id}`);
  };

  return (
    <motion.div
      variants={recipeAnim}
      initial="hidden"
      animate="show"
      onClick={getData}
      layoutId={`${id}`}
      className={style.recipe}
    >
      <motion.img layoutId={`image ${id}`} src={image} alt="" />
      <div className={style.title}>
        <motion.h3 layoutId={`title ${id}`}>{title}</motion.h3>
        <h4>{publisher}</h4>
      </div>
    </motion.div>
  );
};

export default Recipe;
