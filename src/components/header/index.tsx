
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../navbar';
import Image from 'next/image';
import logo from '../../../public/images/logo (2).png'
import { MOBILE_BREAK_POINT, TABLETTE_BREAK_POINT } from '@/utils/dimensions';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useScroll } from '@/utils/useScroll';
import { colors } from '@/theme/colors';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeaderProps {
  background: string;
  color: string;
  scrollY: number;
  isHome?: boolean;
}
interface StyledLinkProps {
  active?: boolean;
  color?: string;
}
interface StyleProps {
  color?: string;
}
interface MenuProps {
  isOpened: boolean
}
const Header = () => {
  const [isOpened, setisOpened] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const background = useMemo(
    () => ( scrollY > 0 ? colors.white : colors.transparent),
    [pathname, scrollY]
  );
  const color = useMemo(
    () => ( scrollY > 0 ? colors.black : colors.white),
    [pathname, scrollY]
  );
  const menu = [
    {
      label:"Accueil",
      href:"#accueil",
    },
    {
      label:"Nos Services",
      href:"#services",
    },
    {
      label:"Plat du jour",
      href:"#platDuJour",
    },
    {
      label:"A propos de nous",
      href:"#aboutus",
    },
  ];
  return (
    <Wrapper color={color} background={background} scrollY={scrollY}>
        <Image
          src={logo}
          alt="logo"
          width={100} 
          height={100} 
        />
        <Navbar color={color} menu={menu}/>
          { !isOpened &&
            <BarIcon onClick={()=> setisOpened(true)}> <FaBars size={26} /> </BarIcon>
          } 
        <Backdrop isOpened={isOpened}>
          <Menu isOpened={isOpened}>
          <CloseIcon onClick={()=> setisOpened(false)}><IoMdClose size={26} color={colors.white}/> </CloseIcon> 
            <MenuWrapper>
              {menu.map(
                (element, index) => (
                  <Item key={index}><StyledLink href={element.href} onClick={()=> setisOpened(false)}>{element.label}</StyledLink></Item>
                )
              )}
            </MenuWrapper>
          </Menu>
        </Backdrop>
    </Wrapper>
  )
}

export default Header;
const CloseIcon = styled.div`
position: fixed;
top: 10px;
right: 10px;
`;
const BarIcon = styled.span`
  display: none;
  @media (max-width: ${MOBILE_BREAK_POINT}) {
    display: block;
  }
`;
const Backdrop = styled(motion.div)<MenuProps>`
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
  backdrop-filter: blur(1px);
`;
const Menu = styled(motion.div)<MenuProps>`
   z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  /* max-width: 300px; */
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
`;
const MenuWrapper = styled.ul<StyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: sap; */
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
 margin-bottom: 20px;
 border-bottom: 1px solid white;
 
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  /* color: ${({ active, color }) => (active ? colors.yellow : color)}; */
  color: ${colors.white};
  font-weight: bold;
  font-size: 20px;
  transition: all ease-in 0.3s;
  width: 100%;
  text-decoration: none;
  &:hover {
    color: ${colors.secondary};
  }
`;
const Wrapper = styled.header<HeaderProps>`
    width: 100vw;
    height: 20%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1920px;
    margin: 0 auto;
    padding: 20px 80px 20px 80px;
    font-size: 13px;
    /* position: -webkit-sticky; */
    position: fixed;
    top: 0;
    background-color: ${({ background }) => background};
    color: ${({ color }) => color};
    box-shadow: ${({ background, scrollY }) =>
    background === colors.white && scrollY > 0 ? "0px 19px 15px -15px rgba(0,0,0,0.23)" : "none"};
    transition: all 0.2s ease-in-out;
     
 
    @media screen and (max-width: ${MOBILE_BREAK_POINT}) {
    align-items: center;
    padding: 10px 20px !important;
  }

  @media screen and (max-width: ${TABLETTE_BREAK_POINT}) {
    padding: 20px;
  }
`;
const ToggleMenu = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  display: none;
   @media (max-width: ${MOBILE_BREAK_POINT}) {
    display: block;
  }
`;