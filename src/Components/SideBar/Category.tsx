import React from "react";

export interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <>
      <div className="category">
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
