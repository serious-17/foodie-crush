import { useEffect } from "react";
import { useAtom } from "jotai";
import { apiData } from "../components/states";
import fetchData from "../components/fetchData";
import style from "../styles/Home.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Recipe from "../components/Recipe";
import { LayoutGroup } from "framer-motion";

const Home = () => {
  const [data, setData]: any = useAtom(apiData);

  useEffect(() => {
    fetchData(null, data, setData);
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
          <div className={style.home}>
            {data.searchData.length ? (
              <div className={style.recipeList}>
                <h2>Searched</h2>
                <div className={style.recipes}>
                  {data.searchData.map((recipe: any) => (
                    <Recipe
                      style={style}
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
              <h2>Recipes</h2>
              <div className={style.recipes}>
                {data.recipeData.map((recipe: any) => (
                  <Recipe
                    style={style}
                    key={recipe.id}
                    image={recipe.image_url}
                    title={recipe.title}
                    publisher={recipe.publisher}
                    id={recipe.id}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </LayoutGroup>
    </>
  );
};

export default Home;
