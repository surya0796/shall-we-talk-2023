import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "@chakra-ui/react";
import Reveal from "./RevealAnimate";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px 0 10px;
  }
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  margin-left: auto;
  flex: 1 1 60%;
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    top: 0px;
    right: 0;
    background: white;
    z-index: 1;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 70px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 25px;
    gap: 25px;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 90px;
  @media (max-width: 768px) {
    height: 45px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: -1;
`;

const LogoImg = styled.img`
  height: 110px;
  margin-left: -55px;
  margin-top: -20px;
  @media (max-width: 768px) {
    height: 55px;
    margin-left: -28px;
    margin-top: -9px;
  }
`;

const List = styled.div`
  display: flex;
  gap: 3em;
  cursor: pointer;
  font-size: var(--font-size-m);
  @media (max-width: 1360px) {
    gap: 1em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ListExtended = styled(List)`
  width: 100%;
  max-width: 670px;
  @media (max-width: 1360px) {
    max-width: 50%;
  }
  @media (max-width: 425px) {
    max-width: unset;
  }
`;
const LinkTags = styled.a``;

const Icon = styled.div`
  color: white;
  font-weight: 600;
  font-size: var(--font-size-m);
  background-color: var(--cl-red);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.65em;
  @media (max-width: 425px) {
    padding: 1em;
  }
`;
const LinkWrapper = () => {
  const handleLogin = () => {};
  const handleRegister = () => {};
  return (
    <Links>
      <List>
        <LinkTags href="#about">SWTについて</LinkTags>
        <LinkTags href="#flow">導入フロー</LinkTags>
        <LinkTags href="#plan">Plan</LinkTags>
      </List>
      <ListExtended>
        <Icon onClick={handleLogin}>
          <span>ログイン</span>
        </Icon>
        <Icon onClick={handleRegister}>
          <span>登録</span>
        </Icon>
      </ListExtended>
    </Links>
  );
};
const Navbar: React.FC = () => {
  const [isLessThan768] = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <a href="#hero" style={{ display: "flex" }}>
        <Logo src="./img/parrot.png" />
        <LogoImg src="./img/ld/swt.png" />
      </a>
      {isLessThan768 ? (
        <LinksContainer>
          <LinkWrapper />
        </LinksContainer>
      ) : (
        <>
          {isOpen && (
            <Reveal
              variant={{ x: 200 }}
              variantEnd={{ x: 0 }}
              htmlcomponent={LinksContainer}
            >
              <Background onClick={handleClose}></Background>
              <LinkWrapper />
            </Reveal>
          )}
          <div onClick={() => setIsOpen(true)}>ログイン&登録</div>
        </>
      )}
    </Container>
  );
};

export default Navbar;
