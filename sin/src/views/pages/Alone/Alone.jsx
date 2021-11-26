import React from "react";
import { useNavigate } from "react-router-dom";

//style
import "./style.css";

//components
import Header from "../../components/atoms/Header";
import { AloneButton } from "../../components/atoms/Button";
import Backbutton from "../../components/atoms/Backbutton";

const Alone = () => {
  const history = useNavigate();

  const Rank = () => {
    history("/Rank");
  }

  const Normal = () => {
    history("/Normal");
  }

  return (
  <div
    className="poker"
  >
    <Header />
    <div
      className="people"
    >
      <AloneButton>タイムアタックモード</AloneButton>
      <AloneButton onClick={Normal}>ノーマルモード</AloneButton>
    </div>
    <div 
     className="back"
     >
       <Backbutton />
     </div>
  </div>
  )
}

export default Alone;
