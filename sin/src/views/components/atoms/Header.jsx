import React from "react";
import styled from "styled-components";
import 'sanitize.css';

const HeaderStyle = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

const Header = () => {
  return( 
    <HeaderStyle>神経衰弱ゲーム</HeaderStyle>
  )
};

export default Header;
