import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="text-light slogen title">
          "Your Gateway to <span className="slogan-queto1">100,000+</span>
          Movies Worldwide, Tailored to Your
          <span className="slogan-queto1"> Watchlist</span>...!"
        </h1>
        <button className="btn text-light btn-cta fs-1">Explore Movies</button>
      </div>
    </div>
  );
}
