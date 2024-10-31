import { useEffect, useState } from "react";
import { recipeURL } from "../api";
import Recipe from "../components/Recipe";
import axios from "axios";
import style from "../styles/FavouritePage.module.scss";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const FavouritePage = () => {
  const [favourite, setFavourite] = useState<any>([]);

  useEffect(() => {
    favouriteRecipes();
  }, []);

  async function favouriteRecipes() {
    let favourites = JSON.parse(localStorage.getItem("recipes") ?? "[]");
    if (!favourites.length) return;

    const favData: any = [];

    for (const fav of favourites) {
      const data = await axios.get(recipeURL(fav));
      favData.push(data.data.data.recipe);
    }

    setFavourite(favData);
  }

  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className={style.favourite}
    >
      <h2>Favourite Recipes</h2>
      {favourite.length ? (
        <div className={style.recipeList}>
          {favourite.map((fav: any) => (
            <Recipe
              id={fav.id}
              image={fav.image_url}
              publisher={fav.publisher}
              title={fav.title}
              key={fav.id}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default FavouritePage;
