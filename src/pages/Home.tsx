import { useEffect } from "react";
import { useAtom } from "jotai";
import { apiData } from "../components/states";
import fetchData from "../components/fetchData";
import style from "../styles/Home.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Recipe from "../components/Recipe";

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
          width="28"
          height="28"
          style={{ color: "black" }}
        />
      )}
      {data.recipeData.length ? (
        <div className={style.home}>
          <div className={style.recipes}>
            {data.recipeData.map((recipe: any) => (
              <Recipe
                style={style}
                recipe={recipe}
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
    </>
  );
};

export default Home;
