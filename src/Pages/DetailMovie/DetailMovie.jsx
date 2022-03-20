import { API_KEY, BASE_URL } from "../../utils/constans";
import React, { useEffect, useState } from "react";

import Header from "../../components/Layout/Header/Header";
import { useParams } from "react-router";

const DetailMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailMovie, setDetaiMovie] = useState({});
  const { media_type, id } = useParams();
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
      setIsLoading(false);
    };
    loadDetailMovie(media_type, id).catch((err) => {
      setIsLoading(false);
      setError(err.message);
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
    <div>
      <Header />
    </div>
  );
};

export default DetailMovie;
