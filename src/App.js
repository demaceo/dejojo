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
// import ReactDOM from "react-dom";
import Loader from "./Components/Loader.js";
import InputSearch from "./Components/InputSearch.js";
// import Body from "./Components/Body.js";
import Coin from "./Components/Coin.js";
// import Footer from "./Components/Footer.js";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       coins: [],
//       error: "",
//       loader: true,
//       selectCoin: {},
//     };
//   }

//   render() {
//     if (this.state.loader) {
//       return <Loader error={this.state.error} />;
//     }
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
    // fetch("https://api.coingecko.com/api/v3/coins/cardano")
    //   .then((res) => res.json())
    //   .then((response) => setMain({ coins: response }))
    //   .then(setMain({ loader: false }))
    //   .then((response) => {
    //     console.log("response return", { response });
    //   })
    //   .catch((err) => setMain({ error: err }));

  // console.log('main', main);
  // if (main.length) {
  //   return <Loader />;
  // } else {
    return (
      <>
        <section className="App">
          {/* <Header className="App-header"></Header> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <InputSearch />
          <Coin />
          {/* <Body /> */}
          {/* <Footer /> */}
        </section>
      </>
    );
  }
export default App;
