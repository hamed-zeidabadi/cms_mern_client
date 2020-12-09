import React from "react";
import "./Card.scss";
export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <>
      <div classNameName="card">
        <main className="page-content">
          <div className="card">
            <div className="content">
              <h2 className="title">Mountain View</h2>
              <p className="copy">
                Check out all of these gorgeous mountain trips with beautiful
                views of, you guessed it, the mountains
              </p>
              <button className="btn">View Trips</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Card;
