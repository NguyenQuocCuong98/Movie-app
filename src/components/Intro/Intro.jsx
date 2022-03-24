import {
  API_KEY,
  BASE_URL,
  TMDB_IMAGE,
  TMDB_IMAGE_W500,
} from "../../utils/constans";
import { ExclamationCircleIcon, PlayIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

import classes from "../Intro/Intro.module.css";

const Intro = () => {
  const [banner, setBanner] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadBannerData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      const random = Math.floor(Math.random() * (19 - 0 + 1) + 0);
      setBanner(responseData.results[random]);
      setIsLoading(false);
    };
    loadBannerData().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className="loading">
        <p>is Loading....</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="error">
        <p>Faild to fetch</p>
      </section>
    );
  }

  return (
    <section
      className={classes.banner}
      style={{
        backgroundImage: `url(${TMDB_IMAGE}/original${banner?.backdrop_path})`,
      }}
    >
      <div className={classes.content}>
        <div className={classes.info}>
          <h1>{banner?.title}</h1>
          <p className={classes.overview}>{banner?.overview}</p>
          <div className={classes.button}>
            <button>
              <PlayIcon className={classes.icon} />
              <p>Watch Now</p>
            </button>
            <button>
              <ExclamationCircleIcon className={classes.icon} />
              <p>View Info</p>
            </button>
          </div>
        </div>
        <div className={classes.poster}>
          <img
            src={`${TMDB_IMAGE_W500}${banner?.poster_path}`}
            alt={banner?.title}
          />
        </div>
      </div>
      <div className={classes.fadeBottom} />
    </section>
  );
};

export default Intro;
