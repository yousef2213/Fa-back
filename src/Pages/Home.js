import React, { Component } from "react";
import { FaConsumer } from "../Context/context";
import styled from "styled-components";
import Follow from "../component/Follow";

import PostsDefault from "../component/Posts";
export default class Home extends Component {
  render() {
    return (
      <FaConsumer>
        {(value) => {
          const {
            PublisherPost,
            onChangeValue,
            valuePost,
            dataFirebase,
            LikePost,
            showDisplayedit,
            UserData,
            UnLikePost,
            addComment,
            SharePost,
          } = value;
          let { Followers } = UserData;
          return (
            <Drop sh={showDisplayedit}>
              <div className="container" id="newposts">
                <div className="row pt-2">
                  <div className="col-10 col-sm-10 col-xm-10 col-md-7 col-lg-7 mx-auto pt-5">
                    <div className="mb-4">
                      <textarea
                        className="form-control"
                        id="Post"
                        onChange={onChangeValue}
                      ></textarea>
                      <button
                        className="btn w-100 bg-white"
                        id="publisher"
                        onClick={PublisherPost}
                        value={valuePost}
                        disabled={valuePost ? false : true}
                      >
                        new post
                      </button>
                    </div>
                    <div id="PostsToFireStore">
                      <PostsDefault
                        All={dataFirebase}
                        Like={LikePost}
                        Un={UnLikePost}
                        Comment={addComment}
                        Share={SharePost}
                      />
                    </div>
                  </div>
                  <div className="col-10 d-none  d-md-block col-md-5 col-lg-5 mx-auto pt-5">
                    <Follow users={Followers} />
                  </div>
                </div>
              </div>
            </Drop>
          );
        }}
      </FaConsumer>
    );
  }
}
const Drop = styled.div``;
