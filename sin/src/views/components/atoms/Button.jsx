import React from "react";
import styled from "styled-components";
import 'sanitize.css';

export const ButtonStyle = styled.button`
text-align: center;
background-color: #eb6100;
font-size: 15px;
color: white;
width: 110px;
height: 30px;
min-width: 110px;
border: 1px solid red;
`;

export const AloneButton = styled(ButtonStyle)`
width: 180px;
min-width: 180px;
`;

const Button = ({ children, onClick }) => {
  return(
  <ButtonStyle onClick={onClick} >
		{children}
	</ButtonStyle>
  )
};

export default Button;
