import { useEffect } from "react";
import { useAtom } from "jotai";
import { apiData, currentRecipe } from "../components/states";
import fetchData from "../components/fetchData";
import style from "../styles/Home.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Recipe from "../components/Recipe";
import { LayoutGroup } from "framer-motion";
import RecipeDetails from "./RecipeDetails";
import { useLocation } from "react-router-dom";
import fetchCurrentRecipe from "../components/fetchCurrentRecipe";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const Home = () => {
  const [data, setData] = useAtom(apiData);
  const [recipe] = useAtom(currentRecipe);
  const [current, setCurrent]: any = useAtom(currentRecipe);
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  if (id) {
    document.body.style.overflow = `hidden`;
  } else {
    document.body.style.overflow = `auto`;
  }

  useEffect(() => {
    fetchData(null, data, setData);
    if (!current.recipeData.servings) {
      if (!id) return;
      fetchCurrentRecipe(id, current, setCurrent);
    }
  }, []);

  return (
    <>
      {data.isLoading && (
        <Icon
          icon="svg-spinners:gooey-balls-2"
          width="2.8rem"
          height="2.8rem"
          style={{ color: "black" }}
          className={style.loading}
        />
      )}
      <LayoutGroup>
        {data.recipeData.length ? (
          <motion.div
            variants={pageAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className={style.home}
          >
            {!recipe.isLoading && id && <RecipeDetails />}
            {data.searchData.length ? (
              <div className={style.recipeList}>
                <h2>Searched</h2>
                <div className={style.recipes}>
                  {data.searchData.map((recipe: any) => (
                    <Recipe
                      key={recipe.id}
                      image={recipe.image_url}
                      title={recipe.title}
                      publisher={recipe.publisher}
                      id={recipe.id}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={style.recipeList}>
              <motion.h2 layout>Recipes</motion.h2>
              <div className={style.recipes}>
                {data.recipeData.map((recipe: any) => (
                  <Recipe
                    key={recipe.id}
                    image={recipe.image_url}
                    title={recipe.title}
                    publisher={recipe.publisher}
                    id={recipe.id}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </LayoutGroup>
    </>
  );
};

export default Home;
