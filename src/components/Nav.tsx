import logo from "../assets/logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import style from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <div className={style.logo}>
        <h1>Foodie Crush</h1>
        <img src={logo} alt="logo" />
      </div>

      <form className={style.searchBar}>
        <input
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
