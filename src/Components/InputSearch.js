import "./InputSearch.css";
import React, { useState, useRef } from "react";

function InputSearch() {
  const [coin, setCoin] = useState([]);
  const searchRef = useRef();

  const searchCoin = async (event) => {
    event.preventDefault();
    if (searchRef.current.value) {
      await fetchData(searchRef.current.value.toLowerCase());
      // let searchedCoin = React.createElement("section", {
      //   className: "main-coin",
      //   id: coin.id,
      //   // ref: mainRef,
      //   // onClick: movePhoto,
      // });
      searchRef.current.value = "";
      // return searchedCoin;
    }
  };

  const fetchData = (coinid) => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`)
      .then((res) => res.json())
      .then((response) => {
        setCoin(response);
        // console.log("coin", coin);
      })
      .catch((e) => console.log(e));
  };

  return (
    <form action="/">
      <section className="coinSearchSection">
        <input
          className="coinInput"
          ref={searchRef}
          placeholder="   Please enter the name of the coin you would like to search..."
        />
        <input
          className="coinButton"
          type="submit"
          value="$earch"
          onClick={searchCoin}
        />
      </section>
    </form>
  );
}

export default InputSearch;
