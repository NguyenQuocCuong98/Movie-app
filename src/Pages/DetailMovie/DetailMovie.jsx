import {
  API_KEY,
  BASE_URL,
  TMDB_IMAGE,
  TMDB_IMAGE_W500,
} from "../../utils/constans";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import classes from "../DetailMovie/Detail.module.css";

const DetailMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailMovie, setDetaiMovie] = useState({});
  const { media_type, id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadDetailMovie = async (media_type, id) => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${media_type}/${id}?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      setDetaiMovie(responseData);
      console.log(responseData);
      setIsLoading(false);
    };
    loadDetailMovie(media_type, id).catch((err) => {
      setIsLoading(false);
      setError(err.message);
      navigate("/error-page");
    });
  }, [id, media_type]);

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
    <section>
      <h1>{detailMovie.name || detailMovie.title}</h1>
      <div
        className={classes.detail}
        style={{
          backgroundImage: `url(${TMDB_IMAGE}/original${detailMovie?.backdrop_path})`,
        }}
      >
        <div className={classes.fade} />
        <div className={classes.play}>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className={classes.listMovie}>
        <div className={classes.inforMation}>
          <div className={classes.detailMovie}>
            <img
              className={classes.imageMovie}
              src={`${TMDB_IMAGE_W500}${detailMovie.poster_path}`}
              alt={detailMovie.name || detailMovie.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
