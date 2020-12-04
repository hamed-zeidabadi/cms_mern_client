import React from "react";
import Category from "../SideBar/Category";
import Popular from "../SideBar/Popular";
import Search from "../SideBar/Search";
import TagName from "../SideBar/TagName";
export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <div id="sidebar">
        <Search />
        <Category />
        <Popular />
        <TagName />
      </div>
    </>
  );
};

export default SideBar;
