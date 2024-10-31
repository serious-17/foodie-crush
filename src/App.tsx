import Nav from "./components/Nav";
import "./styles/globalStyles.scss";
import Home from "./pages/Home";
import FavouritePage from "./pages/FavouritePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Home} path="/recipe/:id" />
        <Route Component={FavouritePage} path="/favourites" />
      </Routes>
    </div>
  );
}

export default App;
