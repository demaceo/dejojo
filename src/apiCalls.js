// export const generateRandomGif = async () => {
//   await fetch(
//     "https://api.giphy.com/v1/gifs/random?api_key=XyR8yGvxwUSqyTwCklJivCX8VMxOaVBu&tag=&rating=r"
//   )
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };

export const pingCoinGeckoAPI = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/ping");
  return await response.json();
};

export const listCoins = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
  return response.json();
};

export async function getApiCall(id) {
  let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  let data = await response.json();
  console.log('getapicall return', data);
  return data;
}

export const getCoin = async (id) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  let data = await response.json();
  console.log("gettcoin return", data);

  return data.description.en;
};

export const getMarketCoins = async (vs_currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  return await response.json();
};



// export const getAssetPlatforms = () => {
//   return fetch(
//     `https://api.coingecko.com/api/v3/asset_platforms`
//   ).then((response) => response.json());
// };

// export const getCoinsByCategory = () => {
//   return fetch(
//     `https://api.coingecko.com/api/v3/coins/categories`
//   ).then((response) => response.json());
// };

// export const getExchanges = () => {
//   return fetch(
//     `https://api.coingecko.com/api/v3/exchanges`
//   ).then((response) => response.json());
//   };

// export const getExchangesById = (id) => {
//   return fetch(
//     `https://api.coingecko.com/api/v3/exchanges/${id}`
//   ).then((response) => response.json());
// };

// export const getListOfDerivativeExchanges = () => {
//   return fetch(
//     `https://api.coingecko.com/api/v3/derivatives/exchanges/list`
//   ).then((response) => response.json());
// };

// export const getGlobalDecentralizedFinanceDefi = () => {
//   return fetch(
//     `https://api.coingecko.com/api/v3//global/decentralized_finance_defi`
//   ).then((response) => response.json());
// };
