import React from "react";
import { FaConsumer } from "../Context/context";
import SW from "../images/error.jpeg";
import Icons from "./iconLove";
import { FaRegComments } from "react-icons/fa";
import Eror from "../Pages/Eror";
import moment from "moment";
export default function postcomponent() {
  return (
    <FaConsumer>
      {(value) => {
        let {
          AlonePost,
          LikePost,
          UnLikePost,
          inpComment,
          WriteComment,
          addCommentDiv
        } = value;
        let { comments } = AlonePost;
        const getDate = (date) => moment(date).fromNow();
        if (AlonePost.length === 0) {
          return <Eror />;
        }
        return (
          <div className="container" id="newposts">
            <div className="row pt-2">
              <div className="col-10 col-sm-10 col-xm-10 col-md-7 col-lg-7 mx-auto pt-5">
                <div
                  className="position-relative border border-light rounded py-2 rounded px-2 my-2 mb-4 div-post"
                  id="post_number"
                >
                  <div id="div-flex">
                    <div className="d-flex ">
                      <img
                        src={AlonePost.imgSrc}
                        className="img-set image-profile"
                        id="hero"
                        alt="..."
                      />
                      <h6 id="div-name">
                        {AlonePost.name}
                        <br />
                        <span className="post-time">
                          {getDate(AlonePost.created)}
                        </span>
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <p id="div-post">{AlonePost.post}</p>
                  <hr />
                  <div className="icon-like">
                    <Icons
                      user={AlonePost}
                      Like={LikePost}
                      unLike={UnLikePost}
                    />
                    <FaRegComments className="text-muted comment" />
                  </div>
                  <form onSubmit={addCommentDiv} className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Comment"
                      value={inpComment}
                      onChange={WriteComment}
                    />
                  </form>
                  <div className="comments">
                    {comments.map((comm) => {
                      return (
                        <div key={Math.random() * 1000} id="div-comments mb-2">
                          <div className="d-flex pl-2 py-2">
                            <img
                              src={comm.fromImg || SW}
                              className="postcommentimg"
                              alt="..."
                            />
                            <div>
                              <h6 className="nameuserpost d-block">
                                {comm.from}
                              </h6>
                              <h6 className="commentuser">{comm.comment}</h6>
                            </div>
                          </div>
                          <hr className="p-0 m-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </FaConsumer>
  );
}