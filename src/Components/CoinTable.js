import "./CoinTable.css";
import React, { useState, useEffect } from "react";

function CoinTable() {
  let [coins, setCoins] = useState([]);
  const [inHover, setHover] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(
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
      <table className="coinResultTable">
        <thead>
          <tr>
            <th>MCAP Rank</th>
            <th>Token Symbol</th>
            <th>Token Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>TVL / MCAP</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr className="coin-solo" key={coin.id}>
                <td className="coinRank">#{coin.market_cap_rank}</td>
                <td className="coinImgSection">
                  <img className="coinImg" src={coin.image} />
                </td>
                <td className="coinName">{coin.name}</td>
                <td className="coin-price">
                  $
                  {new Intl.NumberFormat().format(
                    coin.current_price.toFixed(2)
                  )}
                </td>
                <td className="coin-mcap">
                  {new Intl.NumberFormat().format(coin.market_cap)}
                </td>
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
