'use client'
import styled from 'styled-components';
import { FaWhatsapp } from "react-icons/fa";
import Header from '@/components/header';
import Description from '@/components/Description';
import Services from '@/components/services';
import { useEffect } from 'react';

export default function Home() {

  return (
   <>
      <Wrapper>
        <Header/>
        <Description/>
        <Services/>
      </Wrapper>
     {/* <WhatsAppLogo>
       <FaWhatsapp size={40} color="#25D366"/>
    </WhatsAppLogo> */}
   </>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: var(--montsserat);
`;
const WhatsAppLogo = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
`;