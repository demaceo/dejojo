import React from "react";
// import { Container, Row, Alert, Col } from "react-bootstrap";
import "./Loader.css";

function Loader() {
  return (
    <section>
      <h1>Please wait, the coins is loadin...</h1>
    </section>
    // <Container>
    //   <Row>
    //     <Col className="d-flex justify-content-center">
    //       <h1>Please wait, the movies are loading...</h1>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col className="d-flex justify-content-center">
    //       <img
    //         src="http://forgifs.com/gallery/d/301665-4/Girl-trips-spills-popcorn.gif"
    //         alt="gif of lady falling"
    //       />
    //     </Col>
    //   </Row>
    //   <Row className="d-flex justify-content-center">
    //     <Col md="auto">
    //       {props.error && <Alert variant="danger">{`${props.error}`}</Alert>}
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Loader;
