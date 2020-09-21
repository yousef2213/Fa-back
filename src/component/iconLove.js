import React from "react";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export default function iconLove({ user, Like }) {
  return (
    <IconWrapper>
      <div className="loke-icon">
        <AiFillHeart
          id={user.id}
          onClick={() => Like(user)}
          className="icon-like-svg pointer"
        />
      </div>
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  .icon-like-svg {
    margin-top: -17px;
    color: ${(props) => (props.l ? "#dc3545" : "#747c84")};
    font-size: 25px;
  }
`;
