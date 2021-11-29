import React from "react";
import main from "../../../utils/main";

//style
import "./style.css";

//components
import Startbutton from "../../components/atoms/Startbutton";
import Header from "../../components/atoms/Header";
import Backbutton from "../../components/atoms/Backbutton";


const Normalpage = () => {
  main();
  return (
    <div
      className="poker"
    >
      <Header />
      <div className="setting">
        <Startbutton />
        <div id="score">揃えた回数：　０</div>
      </div>
      <div id="table"></div>
      <Backbutton />
    </div>
  )
}

export default Normalpage;
