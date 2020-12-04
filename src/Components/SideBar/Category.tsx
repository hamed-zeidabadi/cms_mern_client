import React from "react";

export interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <>
      <div className="category">
        <p>دسته بندی</p>
        <ul>
          <li>دسته بندی</li>
          <li>دسته بندی</li>
          <li>دسته بندی</li>
          <li>دسته بندی</li>
          <li>دسته بندی</li>
        </ul>
      </div>
    </>
  );
};

export default Category;
