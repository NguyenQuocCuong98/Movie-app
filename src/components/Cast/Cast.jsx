import { API_KEY, BASE_URL, TMDB_IMAGE_W500 } from "../../utils/constans";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import classes from "../Cast/Cast.module.css";

const Cast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [casts, setCast] = useState({});
  const { media_type, id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadDataCast = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${media_type}/${id}/credits?api_key=${API_KEY}`
      );
      const responseData = await response.json();
      console.log(responseData);
      setCast(responseData.cast.slice(0, 10));
    };
    loadDataCast().catch((error) => {
      setIsLoading(false);
      setError(error.message);
      navigate("/error-page");
    });
  }, [id, media_type]);
  return (
    <section>
      <h1>Cast</h1>
      {!isLoading ? (
        <div className={classes["cast-list"]}>
          <img
            src={
              casts.profile_path
                ? `${TMDB_IMAGE_W500} ${casts.profile_path}`
                : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
            }
            alt=""
          />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Cast;
