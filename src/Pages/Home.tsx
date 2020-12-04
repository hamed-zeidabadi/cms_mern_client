import React from "react";
import Content from "../Components/Home/Content";
import SideBar from "../Components/Home/SideBar";
const Home: React.FC = () => {
  return (
    <>
      <div id="home" className="container-fluid ">
        <div className="row">
          <div className="home_sidebar col-md-4 ">
            <SideBar />
          </div>
          <div className="home_content col-md-8">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
