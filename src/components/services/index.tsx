import { MOBILE_BREAK_POINT, TABLETTE_BREAK_POINT } from '@/utils/dimensions';
import React from 'react'
import styled from 'styled-components';

const Services = () => {
  return (
    <Wrapper id='services'>
        <Title>Decouvrez nos differents services</Title>
        <Content>
          <ServicesWrapper>First</ServicesWrapper>
          <ServicesWrapper>2nd</ServicesWrapper>
          <ServicesWrapper>third</ServicesWrapper>
        </Content>
    </Wrapper>
  )
}

export default Services;
const ServicesWrapper = styled.div`
  width: 100%;
  height: 200px;
  color: skyblue;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Content = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
     display: flex;
     flex-direction: column;
    }
    @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
     display: flex;
     flex-direction: column;
    }
`;
export const Title = styled.h1`
  font-style: italic;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  /* margin: 20px 0; */
`;
const Wrapper = styled.div`
   padding: 10px 100px;
  width: 100%;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Raleway;
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
     display : flex;
     align-items: center;
     justify-content: center;
     padding: 10px;
     margin: 50px 0 ;
    }
`;