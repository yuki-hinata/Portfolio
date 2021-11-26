import React from "react";
import { useNavigate } from "react-router-dom";

//components
import { ButtonStyle } from "./Button";

const Backbutton = () => {
  const history = useNavigate();

  const Back = () => {
    history("/");
  }

  return(
    <ButtonStyle onClick={Back}>戻る</ButtonStyle>
  )
};

export default Backbutton;
