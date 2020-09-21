import React from 'react'
import {FaConsumer} from '../Context/context'
import styled from 'styled-components'
import Eror from '../Pages/Eror';
export default function AlonePone() {
          return(
              <FaConsumer>
                  {value =>{
                      let {AlonePost,DeleteAcount} = value;
                      if(AlonePost.length === 0){
                        return(
                            <Eror />
                        )
                    }
                      return(
                            <PersonalProfile className="container">
                                <div className="row py-5">
                                    <div className="col-10 text-center mx-auto col-md-4">
                                        <img src={AlonePost.imgSrcUser} className="img-fluid personal-img" id="Src" alt="Personal Img" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-8 pt-5">
                                        <ul className="list-group pt-5 ul-post">
                                            <li className="list-group-item d-flex">
                                                <p className="mb-0 text-capitalize">first name : </p>
                                                <p className="mb-0 pl-5">{AlonePost.Userfirstname}</p>
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <p className="mb-0 text-capitalize">last name : </p>
                                                <p className="mb-0 pl-5">{AlonePost.UserlastName}</p>
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <p className="mb-0 text-capitalize">your email : </p>
                                                <p className="mb-0 pl-5">{AlonePost.emailUser}</p>
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <p className="mb-0 text-capitalize">your phone : </p>
                                                <p className="mb-0 pl-5">{AlonePost.phoneUser}</p>
                                            </li>
                                            <button type="button" className="btn btn-outline-danger" onClick={ ()=> DeleteAcount(AlonePost) }>Delete Acount</button>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </PersonalProfile>
                      )
                  }}
              </FaConsumer>
        )
}

const PersonalProfile = styled.div`
    .personal-img{
        width : 400px;
        height : 400px;
        border: 3px solid #ddd;
    }
    li{
        transition : 0.3s all linear;
    }
    li:hover{
        background : #f7f7f7;
    }
    .btn-clc{
        cursor : pointer
    }
`