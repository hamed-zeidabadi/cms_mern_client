import React from "react";
import image from "../../images/test.jpg";
export interface PopularProps {}

const Popular: React.FC<PopularProps> = () => {
  return (
    <>
      <div className="popular">
        <p>جدیدترین مطالب</p>
        <ul>
          <li>
            <div className="popular_block">
              <img src={image} alt="" />
              <a href="#">عنوان مطلب تستی ....</a>
            </div>
          </li>

          <li>
            <div className="popular_block">
              <img src={image} alt="" />
              <a href="#">عنوان مطلب تستی ....</a>
            </div>
          </li>

          <li>
            <div className="popular_block">
              <img src={image} alt="" />
              <a href="#">عنوان مطلب تستی ....</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popular;
