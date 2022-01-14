import React from "react";
import styled from "styled-components";
import FetchedData from "../fetchData/index";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 280px;
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 370px;
  height: 260px;
`;

const Title = styled.h2`
  font-family: roboto, sans-serif;
  font-size: 1.5rem;
  margin: 0;
`;

const Image = styled.a`
  width: 100%;
  height: 100%;
`;

const Description = styled.div``;

const Card = ({ props }) => {
  return (
    <CardContainer>
      <Image>
        <a src={props.image} />{" "}
      </Image>
      <ContentContainer>
        <Title></Title>
        <Description></Description>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
