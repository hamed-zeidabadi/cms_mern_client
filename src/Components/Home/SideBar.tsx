import React from "react";
import Category from "../SideBar/Category";
import Popular from "../SideBar/Popular";
import Search from "../SideBar/Search";
import TagName from "../SideBar/TagName";
export interface SideBarProps {
  isHome: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isHome }) => {
  return (
    <>
      <div id="sidebar">
        {isHome ? <Search /> : null}
        <Category 
        isHome={isHome}
        />
        <Popular />
        <TagName />
      </div>
    </>
  );
};

export default SideBar;
