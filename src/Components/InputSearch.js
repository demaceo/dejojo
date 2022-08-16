import "./InputSearch.css";
import React from "react";
// import { Container, Row, Alert, Col } from "react-bootstrap";


function InputSearch() {
  // const getNewImage = () => {
  //   let img = React.createElement("img", {
  //     className: "main-photo",
  //     src: "https://picsum.photos/1000?" + Math.random(),
  //     ref: mainRef,
  //       onClick: movePhoto,
  //   });
  //   setMain(img);
  //   console.log("main", main);
  //   return img;
  // };
  return (
    <form action="/cointable">
      <section className="coinSearchSection">
        <input
          className="coinInput"
          placeholder="Please enter the name of the coin you would like to search..."
        />
        <input className="coinButton" type="submit" value="$earch" />
      </section>
    </form>
  );
}

export default InputSearch;
