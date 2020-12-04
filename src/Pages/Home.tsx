import React from "react";
import Content from "../Components/Home/Content";
import SideBar from "../Components/Home/SideBar";

const Home: React.FC = () => {
  return (
    <>
      <div id="home">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
