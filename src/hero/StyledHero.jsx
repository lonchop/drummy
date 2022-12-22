import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 6rem;
  text-align: center;
  color: var(--white-color);
  font-family: "RocknRoll One", sans-serif;
`;

export const ContainerKey = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const KeyUno = styled.div`
  display: flex;
  gap: 40px;
`;

export const KeyDos = styled.div`
  display: flex;
  gap: 40px;
`;

export const CircleRed = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: var(--white-color);
  border: 10px solid var(--primary-color-red);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: var(--background-color);
    font-size: 2.8rem;
    font-family: "RocknRoll One", sans-serif;
  }

  & span {
    color: var(--background-color);
    font-size: 2.4rem;
    font-family: sans-serif;
  }
`;

export const CircleGreen = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: var(--white-color);
  border: 10px solid var(--primary-color-green);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: var(--background-color);
    font-size: 2.8rem;
    font-family: "RocknRoll One", sans-serif;
  }

  & span {
    color: var(--background-color);
    font-size: 2.4rem;
    font-family: sans-serif;
  }
`;

export const CircleBlue = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: var(--white-color);
  border: 10px solid var(--primary-color-blue);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: var(--background-color);
    font-size: 2.8rem;
    font-family: "RocknRoll One", sans-serif;
  }

  & span {
    color: var(--background-color);
    font-size: 2.4rem;
    font-family: sans-serif;
  }
`;
