import React from "react";
import { Container } from "react-bootstrap";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
  const myStyle = {
    padding: 50,
  };

  return (
      <>
    <div className="" style={myStyle}>
      <Header />  
      <Container>
        <Content title="Tempary 1" />
        <Content title="Tempary 2" />
      </Container>
      </div>
      <br/>
    </>
  );
};

export default Home;
