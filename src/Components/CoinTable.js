import "./CoinTable.css";
import React, { useState, useEffect } from "react";

function CoinTable() {
  let [coins, setCoins] = useState([]);
    const [inHover, setHover] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((response) => {
        setCoins(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {/* <section className=""> */}
      <table className="coinResultTable">
        <thead>
          <tr>
            <th>MCAP Rank</th>
            <th>Token Symbol</th>
            <th>Token Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>TVL / MCAP</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr id={coin.id}>
                <td className="coinRank">#{coin.market_cap_rank}</td>
                <td>
                  <img
                    className="coinImg"
                    id={inHover}
                    onMouseEnter={() => setHover("coinImgSpin")}
                    onMouseLeave={() => setHover(false)}
                    src={coin.image}
                  />
                </td>
                <td className="coinName">{coin.name}</td>
                <td>${coin.current_price}</td>
                <td>{coin.market_cap}</td>
                <td>{(coin.market_cap / coin.total_volume).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default CoinTable;
