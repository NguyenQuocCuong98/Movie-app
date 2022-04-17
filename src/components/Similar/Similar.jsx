import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { API_KEY, BASE_URL, TMDB_IMAGE_W500 } from "../../utils/constans";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useNavigate, useParams } from "react-router";

import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";
import ageImage from "../../assets/ago16.png";
import classes from "../Similar/Similar.module.css";
import useInnerWidth from "../../useHooks/useInnerWidth";
import vipImage from "../../assets/vip.png";

const Similar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similars, setSimilars] = useState([]);
  const { media_type, id } = useParams();
  const navigate = useNavigate();
  const width = useInnerWidth();
  SwiperCore.use([Navigation]);
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
    const loadSimilarMovie = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${media_type || "tv"}/${id}/similar?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      setSimilars(responseData.results);
      console.log(responseData);
      setIsLoading(false);
    };
    loadSimilarMovie().catch((err) => {
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
      <div>
        <h1>Similar</h1>
      </div>
      <Swiper
        navigation
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={items}
      >
        {!isLoading ? (
          similars.map((similar) => (
            <SwiperSlide key={similar.id}>
              <div className={classes["similar-item"]}>
                <Link to={`/detail/movie/${similar.id}`}>
                  <img
                    src={
                      similar.poster_path
                        ? `${TMDB_IMAGE_W500}${similar.poster_path}`
                        : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                    }
                    className={classes["image-slider"]}
                    alt={similar.original_title}
                  />
                </Link>
                <div className={classes.description}>
                  <div className={classes.info}>
                    <StarIcon className={classes.icon} />
                    <span>{similar.vote_average}</span>
                  </div>
                  <span
                    className={classes.seasons}
                  >{`View: ${similar.popularity.toFixed(3)}`}</span>
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/movie/${similar.id}`}
                >
                  <h4 className={classes.name}>{similar.original_title}</h4>
                </Link>
                <img src={vipImage} alt="iconVip" className={classes.vipIcon} />
                <img src={ageImage} alt="iconAge" className={classes.ageIcon} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div></div>
        )}
      </Swiper>
    </section>
  );
};

export default Similar;
