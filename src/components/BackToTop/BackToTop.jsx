import "./BackToTop.scss";

import React from "react";

export default function BackToTop() {
  return (
    <div className="back-to-top">
      <button className="btn">
        <a href="#intro">
          <img src="assets/arrow.png" alt="" />
        </a>
      </button>
    </div>
  );
}
