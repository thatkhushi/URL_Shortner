import React from "react";
import "./Home.css";
import homeImage from "../../assets/homeImage.png";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {

  var User = useSelector((state) => state.currentUserReducer);
  return (
    <div className="Home">
      <div className="Home_wrapper">
        <div className="Home_conatiner">
          <p className="text1">More than just shorter links</p>

          <p className="text2">
            Build your brand's recognition get deatiled insights on how your
            links are performing
          </p>
          {User == null ? (
            <Link to="/auth" className="button_getStarted">
              Get Started
            </Link>
          ) : (
            <Link to="/feature" className="button_getStarted">
              Get Started
            </Link>
          )}
        </div>
        <div className="home_image">
          <img className="homeImage" src={homeImage} />
        </div>
      </div>
      <div>
        <h2 className="text3">Use of URL Shortner</h2>
      </div>
      <div className="card__content">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
