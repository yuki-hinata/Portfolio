//エントリーポイント
import React from "react";
import {BrowserRouter as Router, 
        Route, 
        Routes 
      } from "react-router-dom";

//pages
import Home from "../views/pages/Home/Home";
import Alone from "../views/pages/Alone/Alone";
import Pair from "../views/pages/Pair/Pair";
import Normalpage from "../views/pages/Normal/Normal";
import TimeAttackPages from "../views/pages/Timeattack/TimeAttackPages";


const AppRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Alone" element={<Alone />} />
      <Route path="/Pair" element={<Pair />} />
      <Route path="/Normal" element={<Normalpage />} />
      <Route path="/TimeAttack" element={<TimeAttackPages />} />
    </Routes>
  </Router>
);

export default AppRouting;
