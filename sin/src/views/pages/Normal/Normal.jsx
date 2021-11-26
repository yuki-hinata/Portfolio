import React from "react";
import main from "../../../utils/main";

//style
import "./style.css";

const Normalpage = () => {
  window.onload = main();
  return (
    <div>
      <div id="table"></div>
      <div id="score">揃えた回数：　０</div>
    </div>
  )
}

export default Normalpage;
