import React, { useState } from "react";
import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";

import ReactPlayer from "react-player";
import classes from "../Intro/Intro.module.css";

const Intro = () => {
  const [isVolume, setIsVolume] = useState(false);
  return (
    <section className={classes.introContainer}>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isVolume}
        url="https://vimeo.com/657583664"
        className={classes.videoIntro}
      />
      <div className={classes.introList}>
        <h1>HBO Latinoamerica - Reel</h1>
        <p>
          In late 2012 HBO contacted us to participate in the pitch for the new
          Image of HBO Core Latin America, the best channel ever! To participate
          was already an honor and winning it was amazing!
        </p>
        <p>
          Directed by: Mariano Farías. Art Director: Pablo Alfieri & Andres
          Reisinger Animation
        </p>
        <p>Director: Mariano Farias</p>
      </div>
      {isVolume ? (
        <VolumeUpIcon
          className={classes.volume}
          onClick={() => setIsVolume((preVolume) => !preVolume)}
        />
      ) : (
        <VolumeOffIcon
          className={classes.volume}
          onClick={() => setIsVolume((preVolume) => !preVolume)}
        />
      )}
    </section>
  );
};

export default Intro;
