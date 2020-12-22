import React from "react";

export interface CategoryProps {
  isHome: boolean;
}

const Category: React.FC<CategoryProps> = ({ isHome }) => {
  return (
    <>
      <div className={isHome ? "category" : "category category_mt  "}>
        <p>دسته بندی مطالب</p>
        <ul>
          <li>
            <a href="#" className="hvr-center">
              جاوا اسکریپت
            </a>
          </li>
          <li>
            <a href="#" className="hvr-center">
              جاوا اسکریپت
            </a>
          </li>
          <li>
            <a href="#" className="hvr-center">
              جاوا اسکریپت
            </a>
          </li>
          <li>
            <a href="#" className="hvr-center">
              جاوا اسکریپت
            </a>
          </li>
          <li>
            <a href="#" className="hvr-center">
              جاوا اسکریپت
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Category;
