import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/apiCalls";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout(dispatch);
    navigate("/");
  };

  return (
    <Container>
      <ButtonWrap>
        <Title>SIGN OUT</Title>
        <Button onClick={handleSignOut}>SIGN OUT</Button>
      </ButtonWrap>
    </Container>
  );
};

export default SignOut;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  background: wheat;
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 1em;
`;
