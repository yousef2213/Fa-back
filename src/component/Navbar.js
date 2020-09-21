import React from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {FaConsumer} from '../Context/context'
import Imgs_default from '../images/imgs-default.png'

const Navbar = () => {
  return (
    <FaConsumer>
      {value =>{
        const {
          showDropDown,
          showDisplay,
          UserData,
          LoginOut
        } = value;
        const {
          load,
          Userfirstname,
          UserlastName,
          imgSrcUser
      } = UserData
        return(
          <>
          <NavWrapper show={showDisplay} drop={load} dis={load} className="p-0">
            <div className="nav-center">
              <div className="nav-1">
                <h3 className="text-logo">
                  <Link to="/" className="logo-name">Fa-back</Link>
                </h3>
                <ul className="navbar-nav">
                    <li className="nav-item home-icon down-home">
                      <Link to="/" className="link-home">
                        <span className="align-self-center">Home</span>
                      </Link>
                    </li>
                    <li className="nav-item home-icon down-home">
                      <Link to="/Search" className="link-home">
                       <span className="align-self-center">Find Friend</span>
                      </Link>
                    </li>
                </ul>
              </div>
              <div className="nav-container">
                <ul className="nav-2">
                  <li className="nav-item acc align-self-center">
                    <img src={imgSrcUser || Imgs_default} className="img-fluid img-nav image-profile" id="nav-img-personal" alt="..." />
                  </li>
                  <li className="nav-item down" id="down-drop" onClick={showDropDown}><IoMdArrowDropdown /></li>
                </ul>
              </div>

              <div id="drop" className="hero">
                <ul className="nav-3">
                  <li className="profile text-center align-self-center">
                    <img src={imgSrcUser || Imgs_default} id="img-set" className="img-set" alt="..." />
                  </li>
                  <li className="profile-name">
                    {Userfirstname} {UserlastName}
                  </li>
                  <Link to="/Profile" className="item-nav">
                    <li className="nav-item profile" onClick= {showDropDown}>
                        View profile
                    </li>
                  </Link>
                  <hr />
                  <Link to="/Search" className="item-nav">
                    <li className="nav-item profile" onClick={showDropDown}>
                        Search Account
                    </li>
                  </Link>
                  <Link to="/information" className="item-nav">
                    <li className="nav-item" onClick={showDropDown}>
                        Your Information
                    </li>
                  </Link>
                  <Link to="/" className="item-nav" id="Sin-in-Out" onClick={LoginOut}>
                    <li className="nav-item" onClick={showDropDown}>
                        Log Out
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </NavWrapper>
          </>
        )
      }}
    </FaConsumer>
  );
};
export default Navbar;

const NavWrapper =styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height:50px;
  z-index:999;
  .nav-1{
    display: flex;
    h3{
      letter-spacing: 0.25rem;
      text-transform: capitalize;
      line-height: 1.25;
      font-size: 1.5rem;
      align-self: center;
    }
    ul{
      list-style: none;
    }
    .home-icon{
      a{
        color: #fff;
        display: inline-block;
        padding: .5rem;
        font-size: 19px;
      font-weight: 500;
      }
      a:hover{
        text-decoration : none;
        background: #2e88c7
      }
    }
  }
  .logo-name{
    color:#f1f1f1;
  }
  .logo-name:hover{
    text-decoration : none;
    color : #f1f1f1;
  }
  .nav-2{
    display: flex;
    list-style: none;
    .img-nav{
      width: 40px;
      margin-right : 10px;
      border-radius: 50%;
    }
    .Sign{
      color: #fff;
      padding: 0.3rem 1rem;
      display: inline-block;
    }
    .Sign:hover{
      text-decoration : none;
    }
  }
  .home-icon{
    cursor : pointer
  }
  #drop{
    display : ${props => props.show ? "block" :"none" };
    position: absolute;
    top: 50px;
    right: 4%;
    background-color: #fff;
    z-index : 1;
  }
  .nav-3{
    padding: 1rem;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
    text-align: left;
    .profile-name{
      text-align: center;
      padding: 1rem 1rem;
    }
    .nav-item{
      display: block;
      padding: 0.4rem 0.8rem 0.4rem 0.8rem;
    }
    .img-set{
      width : 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .down{
    padding-top : 0.4rem;
    font-size : 1.2rem;
    display : ${props => props.drop ? "block" :"none" };
  }
  .down-home{
    display : inline-block!important;
  }
  }
  @media (max-width: 500px) {
    .logo-name{
      font-size : 16px;
    }
    .link-home{
      font-size : 14px!important;
    }
  }
`