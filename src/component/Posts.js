import React from "react";
import Icons from "./iconLove";
import { FaRegComments } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import moment from "moment";
import { sortByDate } from "../util/sort.js";

export default function PostsDefault({ All, Like, Comment, Share }) {
  const getDate = (date) => moment(date).fromNow();
  if (All.length === 0) {
    return <h3 className="text-center pt-4">No Posts</h3>;
  }
  return sortByDate(
    All.map((post) => (
      <div
        key={Math.random() * All.length}
        className="position-relative border border-light rounded py-2 rounded px-2 my-2 mb-4 div-post"
        id="post_number"
      >
        <div id="div-flex">
          <div className="d-flex ">
            <img
              src={post.imgSrc}
              className="img-set image-profile"
              id="hero"
              alt="..."
            />
            <h6 id="div-name">
              {post.name}
              <br />
              <span className="post-time">{getDate(post.created)}</span>
            </h6>
          </div>
        </div>
        <hr />
        <p id="div-post">{post.post}</p>
        <hr />
        <div className="icon-like">
          <Icons user={post} Like={Like} />
          <Link to="/2842001" onClick={() => Comment(post)}>
            <FaRegComments className="text-muted comment" />
          </Link>
          <FiShare onClick={() => Share(post)} className="text-muted pointer" />
        </div>
      </div>
    ))
  )("created", true);
}
