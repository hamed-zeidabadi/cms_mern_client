import React from "react";
export interface PopularProps {}

const Popular: React.FC<PopularProps> = () => {
  return (
    <>
      <div className="popular">
        <p>محبوبترین مطالب</p>
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

export default Popular;
