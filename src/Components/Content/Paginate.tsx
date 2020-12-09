import React from "react";
import "./Paginate.scss";
export interface PaginateProps {}

const Paginate: React.FC<PaginateProps> = () => {
  return (
    <>
      <div className="content_detail__pagination cdp">
        <a href="#!-1" className="cdp_i">
          قبلی
        </a>
        <a href="#!1" className="cdp_i">
          1
        </a>
        <a href="#!2" className="cdp_i">
          2
        </a>
        <a href="#!3" className="cdp_i">
          3
        </a>
        <a href="#!+1" className="cdp_i">
          بعدی
        </a>
      </div>
    </>
  );
};

export default Paginate;
