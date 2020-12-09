import React from "react";
export interface TagNameProps {}

const TagName: React.FC<TagNameProps> = () => {
  return (
    <>
      <div className="tagname">
        <p>تگ ها</p>
        <a className="hvr-center" href="#">
          آموزش
        </a>
        <a className="hvr-center" href="#">
          جاوا اسکریپت
        </a>
        <a className="hvr-center" href="#">
          پایتون
        </a>
        <a className="hvr-center" href="#">
          لاراول
        </a>
        <a className="hvr-center" href="#">
          مقاله
        </a>
        <a className="hvr-center" href="#">
          سی شارپ
        </a>
        <a className="hvr-center" href="#">
          سی پلاس پلاس
        </a>
      </div>
    </>
  );
};

export default TagName;
