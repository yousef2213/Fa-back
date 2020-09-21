import React from "react";
import { FaConsumer } from "../Context/context";
import Goed from "../images/goed.jpeg";
export default function Follow(props) {
  let { users } = props;
  return (
    <FaConsumer>
      {(value) => {
        let { removeUsertoFollower } = value;
        if (users.length === 0) {
          return (
            <div className="user-follow">
              <h3>Following</h3>
              <div>
                <h2>Following 0</h2>
              </div>
            </div>
          );
        }
        return (
          <div className="user-follow">
            <h3>Following</h3>
            {users.map((follow) => {
              return (
                <div key={Math.random() * 100}>
                  <div className="position-relative d-flex justify-content-between bg-white px-2 mb-2 rounded">
                    <div className="d-flex">
                      <img
                        src={follow.imgSrcUser || Goed}
                        alt="imageprivate"
                        className="img-user-search"
                      />
                      <h6 className="align-self-center font-weight-bold pl-3">
                        {follow.Userfirstname || "Fa-Back"}{" "}
                        {follow.UserlastName || ""}
                      </h6>
                    </div>
                    <div>
                      <button
                        className="mt-2 following-btn"
                        onClick={() => removeUsertoFollower(follow)}
                      >
                        Following
                      </button>
                    </div>
                  </div>
                  <hr className="w-75 mx-auto" />
                </div>
              );
            })}
          </div>
        );
      }}
    </FaConsumer>
  );
}
