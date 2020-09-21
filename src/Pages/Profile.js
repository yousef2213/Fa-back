import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaConsumer } from "../Context/context";
import styled from "styled-components";
import Goed from "../images/goed.jpeg";
import Follow from "../component/Follow";
import { FiMoreHorizontal } from "react-icons/fi";

import AllPosts from "../test/post";

export default class Profile extends Component {
  render() {
    return (
      <FaConsumer>
        {(value) => {
          const {
            UserData,
            LikePost,
            DeletePost,
            UnLikePost,
            addComment,
            SeeMore,
          } = value;
          const {
            Userfirstname,
            UserlastName,
            imgSrcUser,
            Posts,
            Followers,
            bio,
          } = UserData;

          return (
            <PersonalProfile className="container">
              <div className="row mb-5 text-center">
                <div className="col-12 pt-5 ss bg-danger">
                  <img
                    src={imgSrcUser}
                    alt="imageprivate"
                    className="personal-img"
                  />
                </div>
                <div className="col-12 mx-auto py-5 bord">
                  <h3 className="pt-2  pb-2 font-weight-bold">
                    {Userfirstname} {UserlastName}
                  </h3>
                  <h5 className="lead pb-2">{bio}</h5>
                  <Link
                    to={`/Info`}
                    className=" pb-2"
                    onClick={() => SeeMore(UserData)}
                  >
                    See More <FiMoreHorizontal />
                  </Link>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-10 col-sm-10 col-xm-10 col-md-7 col-lg-7 mx-auto pt-5">
                  <div>
                    <AllPosts
                      All={Posts}
                      Like={LikePost}
                      Un={UnLikePost}
                      Comment={addComment}
                      Del={DeletePost}
                    />
                  </div>
                </div>
                <div className="col-10 d-none  d-md-block col-md-5 col-lg-5 mx-auto pt-5 mt-2">
                  <Follow users={Followers} />
                </div>
              </div>
            </PersonalProfile>
          );
        }}
      </FaConsumer>
    );
  }
}

const PersonalProfile = styled.section`
  .ss {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
      center/cover url(${Goed}) no-repeat;
    height: 300px;
    position: relative;
    img {
      margin-left: -95px;
    }
  }
  .bord {
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    -webkit-box-shadow: 3px 2px 15px 1px rgba(224, 224, 224, 1);
    -moz-box-shadow: 3px 2px 15px 1px rgba(224, 224, 224, 1);
    box-shadow: 3px 2px 15px 1px rgba(224, 224, 224, 1);
  }
  .personal-img {
    width: 200px;
    height: 210px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -3rem;
    z-index: 2;
  }
`;
