import React, { Component } from 'react'
import {FaConsumer} from '../Context/context'
import styled from 'styled-components'


export default class Profile extends Component {
    render() {
        return (
            <FaConsumer>
                {value =>{
                    const {
                        UserData,
                        DeleteAcount
                    } = value;
                    const {
                        Userfirstname,
                        UserlastName,
                        emailUser,
                        id,
                        phoneUser,
                        imgSrcUser
                    } = UserData;
                    
                    return(
                        <PersonalProfile className="container">
                            <div className="row py-5">
                                <div className="col-10 text-center mx-auto col-md-4">
                                    <img src={imgSrcUser} className="img-fluid personal-img" id="Src" alt="Personal Img" />
                                </div>
                                <div className="col-10 mx-auto col-md-8 pt-5">
                                    <ul className="list-group pt-5 ul-post">
                                        <li className="list-group-item d-flex">
                                            <p className="mb-0 text-capitalize">first name : </p>
                                            <p className="mb-0 pl-5">{Userfirstname}</p>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <p className="mb-0 text-capitalize">last name : </p>
                                            <p className="mb-0 pl-5">{UserlastName}</p>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <p className="mb-0 text-capitalize">your email : </p>
                                            <p className="mb-0 pl-5">{emailUser}</p>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <p className="mb-0 text-capitalize">your phone : </p>
                                            <p className="mb-0 pl-5">{phoneUser}</p>
                                        </li>
                                        <button type="button" className="btn btn-outline-danger" onClick={ ()=> DeleteAcount(id) }>Delete Acount</button>
                                        
                                    </ul>
                                </div>
                            </div>
                        </PersonalProfile>
                    )
                }}
            </FaConsumer>
        )
    }
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