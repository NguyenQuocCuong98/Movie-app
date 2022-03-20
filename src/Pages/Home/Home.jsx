import Header from "../../components/Layout/Header/Header";
import Intro from "../../components/Intro/Intro";
import React from "react";
import SliderMovies from "../../components/SliderMovies/SliderMovies";

const Home = () => {
  return (
    <section>
      <Header />
      <Intro />
      <div className="content-container">
        <SliderMovies type="trending" />
      </div>
    </section>
  );
};

export default Home;
