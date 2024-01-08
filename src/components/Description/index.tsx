import { FcServices } from "react-icons/fc";
import Image from 'next/image';
import React, { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import plat from '../../../public/images/plat2.jpg'
import { MOBILE_BREAK_POINT } from '@/utils/dimensions';
import { colors } from '@/theme/colors';

interface StyleProps {
  width?: any
}
const Description = () => {
  return (
    <Wrapper id="accueil">
      <TextAndButton >
        <div>
          <h3>Pour tout vos evenement choisissez</h3>
          <Titre>Gnilane Traiteur </Titre>
          <Text>Que ce soit pour un événement intime, une réunion familiale, une occasion d'affaires ou une 
            célébration spéciale( Communion, Confirmation, Mariage, ect...), Gnilane Traiteur s'engage à dépasser vos attentes culinaires. Nous mettons 
            l'accent sur une cuisine savoureuse et un service attentionné pour rendre chaque moment mémorable.</Text>
        </div>
        <ButtonWrapper>
          <CustomButton width="190px" onClick={() => window.location.href="https://web.whatsapp.com/send?phone=+221767205782&text=%22Message%22&app_absent=0"}>
            <span>Nous contacter</span>
            <FaWhatsapp size={22} color="#25D366"/>
          </CustomButton>
          <CustomButton width="170px">
            Nos services <FcServices size={25}/>
          </CustomButton>
        </ButtonWrapper>
      </TextAndButton>
      <ImageWrapper > 
        <Image
          src={plat}
          alt="logo"
          width={500} 
          height={500} 
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Description;
const Titre = styled.h1`
font-size: 4rem;
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
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -20px;
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
      display: none;
    }
`;
const CustomButton = styled.button<StyleProps>`
  padding: 10px 5px;
  width: ${({ width }) => (width ? width : "200px")};
  margin-right: 20px;
  border-radius: 15px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding: 25% 100px 30px;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: -20%;
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: Raleway;
  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
     display : flex;
     align-items: center;
     justify-content: center;
     padding: 500px 10px 30px;
    }
`;
const TextAndButton = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
    padding: 20px 10px;
    font-size: 1.5rem;
    @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
      
  }
`;
const Text = styled.h3`
  font-family: Museo;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: .05em;
  /* line-height: 1.2; */
  margin-bottom: 30px;

  @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;