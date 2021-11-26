import React from "react";

//style
import "./style.css";

//components
import Header from "../../components/atoms/Header";
import { AloneButton } from "../../components/atoms/Button";
import Backbutton from "../../components/atoms/Backbutton";

const Pair = () => {

  return (
  <div
    className="poker"
  >
    <Header>神経衰弱ゲーム</Header>
    <div
      className="people"
    >
      <AloneButton>対戦モード</AloneButton>
      <AloneButton>スペシャルモード</AloneButton>
    </div>
    <div
      className="back"
    >
      <Backbutton />
    </div>
  </div>
  )
}

export default Pair;
