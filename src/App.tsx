import { useEffect } from "react";
import Nav from "./components/Nav";
import "./styles/globalStyles.scss";
import { useAtom } from "jotai";
import { apiData } from "./components/states";
import fetchData from "./components/fetchData";

function App() {
  const [data, setData] = useAtom(apiData);

  useEffect(() => {
    fetchData(null, data, setData);
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
