import React from "react";
import main from "../../../utils/main";


//componentsだよ
import Startbutton from "../../components/atoms/Startbutton";
import StopWatch from "../../../utils/Time";


const TimeAttackPages = () => {
  main();
  return(
  <div>
    <StopWatch />
    <Startbutton />
    <div id="table"></div>
  </div>
  )
} 

export default TimeAttackPages;
