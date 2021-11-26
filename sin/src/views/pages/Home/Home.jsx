import React from "react";
import { useNavigate } from "react-router-dom";

//style
import "./style.css";

//components
import Header from "../../components/atoms/Header";
import Button from "../../components/atoms/Button";
import Backbutton from "../../components/atoms/Backbutton";

const Home = () => {
  const history = useNavigate();

  const One = () => {
    history("/Alone");
  }

  const Two = () => {
    history("/Pair");
  }

  return (
  <div
    className="poker"
  >
    <Header />
    <div
      className="people"
    >
      <Button onClick={One}>1人</Button>
      <Button onClick={Two}>2人</Button>
    </div>
    <div
      className="back"
    >
      <Backbutton />
    </div>
  </div>
  )
}

export default Home;
