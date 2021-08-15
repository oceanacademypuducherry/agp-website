import React from "react";
import { Button } from "react-bootstrap";
import "./home.css";
import { homeBg } from "../images/allImages";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="bg-img">
        {/* <img src={homeBg} alt="" /> */}
        <div className="overlay">
          <span className="home-text">Somthing New</span>
          <Button className="button btn-light">Know more</Button>
        </div>
      </div>
    </div>
  );
}
