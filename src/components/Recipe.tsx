import { motion } from "framer-motion";
import fetchCurrentRecipe from "./fetchCurrentRecipe";
import { currentRecipe } from "./states";
import { useAtom } from "jotai";

type Props = {
  id: number;
  image: string;
  title: string;
  publisher: string;
  style: CSSModuleClasses;
};

const Recipe = ({ id, image, title, publisher, style }: Props) => {
  const [data, setData] = useAtom(currentRecipe);

  const getData = () => {
    fetchCurrentRecipe(id, data, setData);
    console.log(data);
  };

  return (
    <motion.div onClick={getData} layoutId={`${id}`} className={style.recipe}>
      <img src={image} alt="" />
      <div className={style.title}>
        <h3>{title}</h3>
        <h4>{publisher}</h4>
      </div>
    </motion.div>
  );
};

export default Recipe;
