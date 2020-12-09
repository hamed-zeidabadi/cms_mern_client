import React from "react";
import Card from "../Content/Card";
import "../../Scss/Home/Content.scss";
import Paginate from "../Content/Paginate";
export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <>
      <div id="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Paginate />
      </div>
    </>
  );
};

export default Content;
