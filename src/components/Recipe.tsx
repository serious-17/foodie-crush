import { motion } from "framer-motion";

const Recipe = ({ recipe, id, image, title, publisher, style }: any) => {
  return (
    <motion.div layoutId={`${id}`} className={style.recipe}>
      <img src={image} alt="" />
      <div className={style.title}>
        <h3>{title}</h3>
        <h4>{publisher}</h4>
      </div>
    </motion.div>
  );
};

export default Recipe;
