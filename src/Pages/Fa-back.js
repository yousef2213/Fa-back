import React, { Component } from 'react'
import {FaConsumer} from '../Context/context'
import { GiPikeman } from 'react-icons/gi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import styled from 'styled-components'

export default class FaBack extends Component {
    render() {
        return (
            <FaConsumer>
                {value =>{
                    return(
                    <Statrted className="d-none d-md-block col-12 col-sm-10 col-md-6 col-lg-6 mx-auto section-signIn ml-0">
                        <div className="get">
                            <div className="align-items-center">
                                <div className="d-flex py-3">
                                    <GiPikeman className="icon-start mr-1" />
                                    <h1 className="text-white">Fa-back</h1>
                                </div>
                                <h6 className="ml-3 btn btn-outline-primary text-white text-capitalize">get started <AiOutlineArrowRight /> 
                                </h6>
                            </div>
                        </div>
                    </Statrted>
                    )
                }}
            </FaConsumer>
        )
    }
}

const Statrted =styled.section`
    .personal-img{
        width : 300px;
        height : 400px;
        border : 2px solid #fff;
    }
    height: 100vh;
    position: relative;
    .get{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        h1{
            font-weight: bold;
        }
        .icon-start{
            font-size: 40px;
            color: #f1f1f1;
          }
          .btn-outline-primary{
            border-color: #ffffff!important;
          }
          .btn-outline-primary:hover{
            background: #fff!important;
            color: #000!important;
            font-weight: bold;
          }
      }
`