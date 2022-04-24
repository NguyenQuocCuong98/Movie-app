import { API_KEY, BASE_URL, TMDB_IMAGE_W500 } from "../../utils/constans";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, useParams } from "react-router";

import classes from "../Cast/Cast.module.css";
import useInnerWidth from "../../useHooks/useInnerWidth";

const Cast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [casts, setCast] = useState([]);
  const { media_type, id } = useParams();
  const navigate = useNavigate();
  const width = useInnerWidth();
  let items;
  if (width > 1180) {
    items = 7;
  } else if (width < 1280 && width >= 1024) {
    items = 6;
  } else if (width < 1024 && width >= 740) {
    items = 5;
  } else if (width < 768 && width >= 500) {
    items = 4;
  } else {
    items = 2;
  }
  useEffect(() => {
    const loadDataCast = async (media_type, id) => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${media_type}/${id}/credits?api_key=${API_KEY}`
      );
      const responseData = await response.json();
      console.log(responseData.cast);
      setCast(responseData.cast.slice(0, 10));
      setIsLoading(false);
    };
    loadDataCast(media_type, id).catch((error) => {
      setIsLoading(false);
      setError(error.message);
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
      <h1>Cast</h1>
      <Swiper
        navigation
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={items}
      >
        {!isLoading ? (
          casts.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div className={classes["cast-list"]}>
                <div className={classes["cast-image"]}>
                  <img
                    src={
                      cast.profile_path
                        ? `${TMDB_IMAGE_W500}${cast.profile_path}`
                        : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                    }
                    alt={cast.name}
                  />
                </div>
                <div className={classes["cast-name"]}>
                  <h2>{cast.name}</h2>
                </div>
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

export default Cast;
