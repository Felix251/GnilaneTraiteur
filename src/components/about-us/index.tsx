import { colors } from '@/theme/colors';
import { MOBILE_BREAK_POINT, TABLETTE_BREAK_POINT } from '@/utils/dimensions';
import React from 'react'
import styled from 'styled-components';
import { Title } from '../services';
import owner from "../../../public/images/Owner.jpeg"
import Image from 'next/image';
const AboutUs = () => {
  return (
    <Wrapper id="aboutus">
      <Title>About Us</Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur a officia neque optio praesentium voluptatibus hic facilis nulla.
      <Content>
        <CeoDescription>
          <Image
          src={owner}
          alt="logo"
          width={300} 
          height={400} 
        />
          <Text>
            <Titre>Katy NDAO</Titre>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius iusto voluptatem fuga, error vero est enim quis magni voluptatibus quod animi ea repellendus dolores, repudiandae quidem aperiam, nihil architecto.
          </Text>
        </CeoDescription>
      </Content>
    </Wrapper>
  )
}

export default AboutUs;
const Titre = styled.h1`
font-size: 3rem;
width: 50%;
  background-color: #2152A1;
  background-image: linear-gradient(45deg, #2152A1, #DFE14A);
  background-size: 100%;
  background-repeat: repeat;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  /* font-size: 50px; */
  margin: 15px 0px;
`;
const Text = styled.div``;
const CeoDescription = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
     display: flex;
     flex-direction: column;
    }
`;
const Wrapper = styled.div`
 padding: 10px 100px;
  width: 100%;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
     display : flex;
     align-items: center;
     justify-content: center;
     padding: 10px;
     margin: 50px 0 ;
    }
`;
const Content = styled.div`
  margin: 40px 70px;
  @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
     display: flex;
     flex-direction: column;
    }
`;