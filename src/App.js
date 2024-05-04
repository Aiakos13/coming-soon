import React from "react";

//import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
//clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

//import video
import VideoBg from "../src/assets/video.mp4";

//import css
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      {/* overlay  */}
      <div className="overlay"></div>
      {/* video */}
      <video src={VideoBg} autoPlay loop muted></video>
      {/* content */}
      <div className="page_content">
        <h1>Lunching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live</h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 169 * 3600 * 1000 + 5000}
          className="flip-clock"
        />
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N2xrbGZyZHZzYTRxcWdvaDliaXVma2M5Z3Agc2luYWhvb3JhZm9yc3RlYW1AbQ&amp;tmsrc=sinahooraforsteam%40gmail.com"
        >
          <button className="btn ">Notify Me</button>
        </a>
      </div>
    </section>
  );
};

export default App;
