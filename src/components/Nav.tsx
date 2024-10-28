import logo from "../assets/logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Foodie Crush</h1>
        <img src={logo} alt="logo" />
      </div>

      <form className="search">
        <input type="text" name="search-input" />
        <button>
          <Icon
            icon="fluent:search-48-filled"
            width="16px"
            height="16px"
            style={{ color: "white" }}
          />
        </button>
      </form>

      <h3>Favourites</h3>
    </nav>
  );
};

export default Nav;
