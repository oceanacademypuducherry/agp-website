import React from "react";
import "./footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy-right-content">
        <div className="crc-text">
          © 2021 Makarajothi, Inc. All rights reserved.
        </div>
        <div className="crc-icons">
          <Link>
            <YouTubeIcon fontSize="large" style={{ margin: 5, color: "red" }} />
          </Link>
          <Link>
            <FacebookIcon
              fontSize="large"
              style={{ margin: 5, color: "#4867AA" }}
            />
          </Link>
          <Link>
            <InstagramIcon
              fontSize="large"
              style={{ margin: 5, color: "#F76342" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
