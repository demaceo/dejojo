// import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router";

import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
// import Loader from "./Components/Loader.js";
import InputSearch from "./Components/InputSearch.js";
import CoinTable from "./Components/CoinTable.js";
// import Footer from "./Components/Footer.js";

function App() {
  // let [main, setMain] = useState([]);
  // const mainRef = useRef();

  // useEffect(() => {
  //   fetchMainData();
  // }, []);

  // const fetchMainData = () => {
  //   fetch("https://api.coingecko.com/api/v3/coins/cardano")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setMain(response);
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    <section className="App">
      <Header />
      <InputSearch />
      <CoinTable />
    </section>
  );
}
export default App;
