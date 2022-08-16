// import logo from "./logo.svg";
import "./App.css";
import React, {
  // Component,
  // useRef,
  useState,
  // useReducer,
  useEffect,
  // useContext,
} from "react";
import Header from "./Components/Header.js";
// import Loader from "./Components/Loader.js";
import InputSearch from "./Components/InputSearch.js";
// import Body from "./Components/Body.js";
import CoinTable from "./Components/CoinTable.js";
// import Footer from "./Components/Footer.js";

function App() {
  let [main, setMain] = useState([]);
  // const mainRef = useRef();

  useEffect(() => {
    fetchMainData();
    setTimeout(5000)

  }, []);

  const fetchMainData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/cardano")
      .then((res) => res.json())
      .then((response) => {
        setMain(response);
      })
      .catch((e) => console.log(e));
  }

    return (
      <>
        <section className="App">
          <Header/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <InputSearch />
          <CoinTable />
          {/* <Body /> */}
          {/* <Footer /> */}
        </section>
      </>
    );
  }
export default App;
