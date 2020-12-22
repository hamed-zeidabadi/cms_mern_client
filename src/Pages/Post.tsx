import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../Components/Home/SideBar";
import SinglePost from "../Components/Post/SinglePost";
import "./../Scss/Post/Post.scss";
export interface PostProps {}

const Post: React.FC<PostProps> = () => {
  const { id }: any = useParams();

  return (
    <>
      <div id="post" className="container-fluid ">
        <div className="row">
          <div className="post_sidebar col-md-3 ">
            <SideBar isHome={false} />
          </div>
          <div className="post_content col-md-9">
            <SinglePost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
