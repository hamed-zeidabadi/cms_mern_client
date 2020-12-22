import React from "react";
import "./Card.scss";
import bg from "../../images/test.jpg";
import { Link } from "react-router-dom";
export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <>
      <div className="card_main">
        <main className="page-content">
          <div className="card" style={{ backgroundImage: `url(${bg})` }}>
            <div className="content">
              <h2 className="title">آموزش جاوا اسکریپت</h2>
              <p className="copy">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که ...
              </p>
              <Link to="/post/5" className="btn">
                خواندن مقاله
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Card;
