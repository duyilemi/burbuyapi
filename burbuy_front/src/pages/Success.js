import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

import { Waver } from "../components/animate";

const Success = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <Container>
      <SuccessWrap>
        <Header>Payment Successfully Made</Header>
        <Waver />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Continue>Continue Shopping</Continue>
        </Link>
      </SuccessWrap>
    </Container>
  );
};

export default Success;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessWrap = styled.div`
  background: lightblue;
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${mobile({ width: "75%", height: "50%" })}
`;

const Header = styled.h1`
  margin: 0.4em;
`;

const Continue = styled.h1`
  text-decoration: none;
  margin: 0.4em;
  ${mobile({ fontSize: "1.2em" })}
`;
