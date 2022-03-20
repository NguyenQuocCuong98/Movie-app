import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { API_KEY, BASE_URL, TMDB_IMAGE } from "../../utils/constans";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { StarIcon } from "@heroicons/react/solid";
import ageImage from "../../assets/ago16.png";
import classes from "../SliderMovies/SliderMovies.module.css";
import useInnerWidth from "../../useHooks/useInnerWidth";
import vipImage from "../../assets/vip.png";

const SliderMovies = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const width = useInnerWidth();

  let items;
  if (width > 1180) {
    items = 6;
  } else if (width < 1280 && width >= 1024) {
    items = 5;
  } else if (width < 1024 && width >= 740) {
    items = 4;
  } else if (width < 768 && width >= 500) {
    items = 3;
  } else {
    items = 2;
  }

  useEffect(() => {
    const loadDataMovies = async () => {
      setIsLoading(true);
      const response = await fetch(
        type === "trending"
          ? `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
          : `${BASE_URL}/movie/${type}?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      console.log(responseData.results);
      setMovies(responseData.results);
      setIsLoading(false);
    };
    loadDataMovies().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, [type]);

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

  SwiperCore.use([Navigation]);
  return (
    <section>
      <h1 className={classes.title}>{`Movie ${type}`}</h1>
      <Swiper
        navigation
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={items}
      >
        {!isLoading ? (
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className={classes["movie-item"]}>
                <Link to={`/detail/movie/${movie.id}`}>
                  <img
                    src={`${TMDB_IMAGE}/w500${movie.poster_path}`}
                    className={classes["image-slider"]}
                    alt={movie.original_title}
                  />
                </Link>
                <div className={classes.description}>
                  <div className={classes.info}>
                    <StarIcon className={classes.icon} />
                    <span>{movie.vote_average}</span>
                  </div>
                  <span
                    className={classes.seasons}
                  >{`View: ${movie.popularity.toFixed(2)}`}</span>
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/movie/${movie.id}`}
                >
                  <h4 className={classes.name}>{movie.original_title}</h4>
                </Link>
                <img src={vipImage} alt="iconVip" className={classes.vipIcon} />
                <img src={ageImage} alt="iconAge" className={classes.ageIcon} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <Skeleton count={6} duration={2} height={370} />
        )}
      </Swiper>
    </section>
  );
};

export default SliderMovies;
