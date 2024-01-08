import { colors } from '@/theme/colors';
import { MOBILE_BREAK_POINT } from '@/utils/dimensions';
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

interface StyledLinkProps {
  active?: boolean;
  color?: string;
}

interface StyleProps {
  color?: string;
}

const Navbar = () => {
  
  return (
    <Wrapper>
     <MenuWrapper>
        <Item><StyledLink href="#accueil">Accueil</StyledLink></Item>
        <Item><StyledLink href="#services">Nos Services</StyledLink></Item>
        <Item><StyledLink href="/">Plat du jour</StyledLink></Item>
        <Item><StyledLink href="/">A propos de nous</StyledLink></Item>
      <CustomButton onClick={() => window.location.href="https://web.whatsapp.com/send?phone=+221767205782&text=%22Message%22&app_absent=0"}>
        <span>Nous contacter</span>
        <FaWhatsapp size={20} color="#25D366"/>
       </CustomButton>
     </MenuWrapper>
    </Wrapper>
  )
}

export default Navbar;
const MenuWrapper = styled.ul<StyleProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  font-family: Raleway;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 18px;
`;

const Item = styled.li`
 list-style-type: none;
 display: flex;
 align-items: center;
 margin-right: 20px;
 
 /* &:hover {
    color: ${colors.secondary};
    border-bottom: 2px solid ${colors.primary};
  } */
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  /* color: ${({ active, color }) => (active ? colors.yellow : color)}; */
  color: ${colors.black};
  transition: all ease-in 0.3s;
  width: 100%;
  text-decoration: none;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
}
`;

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: ${MOBILE_BREAK_POINT}) {
    display: none;
  }
`;

const CustomButton = styled.button`
  padding: 10px;
  width: 150px;
  border-radius: 15px;
  border: none;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;