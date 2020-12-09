import React from "react";
import Card from "../Content/Card";
import "../../Scss/Home/Content.scss";
export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <>
      <div id="content">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Content;
