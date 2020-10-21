import React from "react";
import styled from "styled-components";

const CardInfoWrapper = styled.div`
  display: flex;
  margin-top: 0.75rem;
`;
const Wrapper = styled.div`
  max-width: 360px;
  padding: 0.75rem 0 0.75rem 1.25rem;
  margin: 1rem auto;
  border-radius: 5px;
  background-color: #e8fee1;
  color: #16300d;
`;

const Title = styled.h4`
  font-size: 1.125rem;
  margin: 0.25rem 0;
  font-weight: normal;
`;

const Date = styled.p`
  font-size: 12px;
  margin: 0;
  margin-right: auto;
`;

const Category = styled.p`
  font-size: 12px;
  margin: 0;
  margin-right: 1rem;
`;

const MilestoneCard = ({ title, category, date = "12/12/12" }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <CardInfoWrapper>
        <Category>{category}</Category>
        <Date>{date}</Date>
      </CardInfoWrapper>
    </Wrapper>
  );
};

export default MilestoneCard;
