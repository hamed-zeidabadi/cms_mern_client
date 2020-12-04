import React from "react";
export interface TagNameProps {}

const TagName: React.FC<TagNameProps> = () => {
  return (
    <>
      <div className="tagname">
        <p>تگ ها</p>
        <a href="#">تگ</a>
        <a href="#">تگ</a>
        <a href="#">تگ</a>
        <a href="#">تگ</a>
        <a href="#">تگ</a>
      </div>
    </>
  );
};

export default TagName;
