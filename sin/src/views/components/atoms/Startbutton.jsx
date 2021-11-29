import React from "react";

//components
import { ButtonStyle } from "./Button";

const Startbutton = ({id}) => {
  const reload = () => {
    window.location.reload();
  }

  return(
    <ButtonStyle onClick={reload}>START</ButtonStyle>
  )
};

export default Startbutton;
