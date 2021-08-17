import React from "react";

import Home from "../home/Home";
import AboutUs from "../about/AboutUs";
import Books from "../books/Books";
import Videos from "../videos/Videos";
import Articles from "../article/Articles";
import Querys from "../querys/Querys";

export default function Main() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Books />
      <Videos />
      <Articles />
      <Querys />
    </div>
  );
}
