import {
  API_KEY,
  BASE_URL,
  TMDB_IMAGE,
  TMDB_IMAGE_W500,
} from "../../utils/constans";
import { Col, Row } from "antd";
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
        <Row gutter={30}>
          <div className={classes.container}>
            <Col sm={24} md={24} lg={24} xl={20}>
              <div className={classes.wrapper}>
                <div className={classes.detailMovie}>
                  <img
                    className={classes.imageMovie}
                    src={`${TMDB_IMAGE_W500}${detailMovie.poster_path}`}
                    alt={detailMovie.name || detailMovie.title}
                  />
                </div>
                <div className={classes.information}>
                  <h1>{detailMovie.name || detailMovie.title}</h1>
                  <div className={classes.buy}>
                    <button className={classes.vip}>buy vip package</button>
                    <button className={classes.phone}>
                      Buy quickly by phone
                    </button>
                  </div>
                  <div className={classes.btnUser}>
                    <button className={classes.heart}>
                      <i className="fa-solid fa-heart"></i>
                      Follow
                    </button>
                    <button className={classes.nodes}>
                      <i className="fa-solid fa-share-nodes"></i>
                      Share
                    </button>
                  </div>
                  <div className={classes.description}>
                    <h3>Overview</h3>
                    <p>{detailMovie.overview}</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className={classes.author}>
                <div className={classes.time}>
                  <h4>Time</h4>
                  <h4>Rating</h4>
                  <h4>Director</h4>
                  <h4>Actor</h4>
                  <h4>Nation</h4>
                  <h4>Type</h4>
                  <h4>Release</h4>
                </div>
                <div className={classes.timeDes}>
                  <span>
                    {detailMovie.runtime}
                    minute
                  </span>
                  <span>16+</span>
                  <span>
                    {detailMovie.production_companies.map(
                      (production) => production.name
                    )}
                  </span>
                  <span>
                    {detailMovie.production_countries.map(
                      (countrie) => countrie.name
                    )}
                  </span>
                  <span>{detailMovie.genres.map((genre) => genre.name)}</span>
                  <span>{detailMovie.release_date}</span>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default DetailMovie;
