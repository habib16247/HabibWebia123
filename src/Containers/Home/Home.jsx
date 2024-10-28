import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const hireMeInfo = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Habibullah
          <br />
          Frontend Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <button onClick={hireMeInfo}>Hire me</button>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
