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
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur a officia neque optio praesentium voluptatibus hic facilis nulla. */}
      <Content>
        <CeoDescription>
          <Image
          src={owner}
          alt="logo"
          width={300} 
          height={400} 
        />
          <Text>
            <Titre1>Katy NDAO</Titre1>
            <Titre2>CEO</Titre2>
            <DescCeo>
              Je suis CEO et fondatrice de Gnilane Traiteur 
              Fondée avec passion par une équipe diplômée en art culinaire, notre entreprise familiale 
              se consacre à fournir une expérience culinaire exceptionnelle pour tous vos événements spéciaux. 
              Forts de notre expertise et de notre expérience, nous sommes déterminés à offrir une cuisine saine 
              et savoureuse qui ravira vos papilles..
            </DescCeo>
           
          </Text>
        </CeoDescription>
      </Content>
    </Wrapper>
  )
}

export default AboutUs;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titre1 = styled.div`
 font-size: 2.5rem;
 color: ${colors.text};
`;
const Titre2 = styled.div`
  color: ${colors.label};
  font-size: 2rem;
  margin: 40px 0;
`;
const DescCeo = styled.div`
  color: ${colors.label};
  font-size: 1.5  rem;
`;
const Titre = styled.h1`
font-size: 2.5rem;
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
  @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
     width: 100%;
    }
`;
const CeoDescription = styled.div`
  width: 70%;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  /* margin: 50px 0; */
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
     display : flex;
     align-items: center;
     justify-content: center;
     padding: 10px;
     margin: 50px 0 ;
    }
`;
const Content = styled.div`
  /* margin: 40px 70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
     display: flex;
     flex-direction: column;
    }
`;