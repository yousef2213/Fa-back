import React from 'react'
import {FaConsumer} from '../Context/context'
import { GiPikeman } from 'react-icons/gi'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Eror() {
    return (
        <FaConsumer>
            {value =>{
                return(
                    <section className="container-fluid section-error">
                        <div className="row">
                            <Statrted className="col-10 mx-auto">
                                <div className="get-error">
                                    <div className="align-items-center">
                                        <div className="d-flex py-3">
                                            <GiPikeman className="icon-start" />
                                            <h1 className="text-white">Page not found</h1>
                                        </div>
                                        <Link to="/" className="ml-3 btn btn-outline-primary text-white text-capitalize">Return Home <AiOutlineArrowRight /> 
                                        </Link>
                                    </div>
                                </div>
                            </Statrted>
                        </div>
                    </section>
                )
            }}
        </FaConsumer>
    )
}



const Statrted =styled.section`
    height: calc(100vh - 50px);
    position: relative;
    .personal-img{
        width : 300px;
        height : 400px;
        border : 2px solid #fff;
    }
    .get-error{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        h1{
            font-weight: bold;
        }
        .icon-start{
            width: 4rem;
            margin-top: -1rem;
            font-size: 70px;
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