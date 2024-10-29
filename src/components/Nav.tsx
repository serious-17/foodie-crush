import logo from "../assets/logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import style from "../styles/Nav.module.scss";
import fetchData from "./fetchData";
import { useAtom } from "jotai";
import { apiData } from "./states";
import { useState } from "react";

const Nav = () => {
  const [data, setData]: any = useAtom(apiData);
  const [query, setQuery] = useState("");

  const searchSubmit = (e: any) => {
    clearSearch();
    e.preventDefault();
    fetchData(query, data, setData);
  };

  const clearSearch = () => {
    setData({ ...data, searchData: [] });
  };

  return (
    <nav>
      <div onClick={clearSearch} className={style.logo}>
        <h1>Foodie Crush</h1>
        <img src={logo} alt="logo" />
      </div>

      <form onSubmit={searchSubmit} className={style.searchBar}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for a recipe"
          type="text"
          name="search-input"
          required
        />
        <button>
          <Icon
            icon="fluent:search-48-filled"
            width="24px"
            height="24px"
            style={{ color: "white" }}
          />
        </button>
      </form>

      <h3>Favourites</h3>
    </nav>
  );
};

export default Nav;
