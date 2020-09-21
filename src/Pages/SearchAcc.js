import React, { Component } from 'react'
import {FaConsumer} from '../Context/context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'
export default class Profile extends Component {
    render() {
        return (
            <FaConsumer>
                {value =>{
                    const {
                        inputSearchAcc,
                        handelChangeSearchAcc,
                        handelSubmitSearchAcc,
                        SearchUsers,
                        addUsertoInfo
                    } = value;
                    
                    return(
                    <Search className="container">
                        <div className="row py-5">
                            <div className="col-8 mx-auto ss p-0 mb-4 rounded">
                                <form className="form-block my-2 my-lg-0 w-100 d-flex" >
                                    <input 
                                        className="form-control"  
                                        type="search" 
                                        placeholder="Search" 
                                        value={inputSearchAcc} 
                                        onChange={handelChangeSearchAcc}
                                        />
                                    <button 
                                    className="btn btn-outline-success my-sm-0" 
                                    type="submit"
                                    onClick={handelSubmitSearchAcc}
                                    >Search</button>
                                </form>
                            </div>
                            <div className="col-8 mx-auto ss bg-white p-0">
                                {SearchUsers.map(user =>{
                                    return(
                                        <div key={Math.random() * SearchUsers.length}>
                                        <div className="user d-flex justify-content-between" key={user.id}>
                                               <div className="d-flex">
                                                <Link 
                                                        to={`/${user.Userfirstname}${user.UserlastName}`}
                                                        onClick={() => addUsertoInfo(user)}
                                                    >
                                                    <img src={user.imgSrcUser} className="img-user-search" alt="img user fa-back" />
                                                </Link>
                                                    <Link 
                                                        to={`/${user.Userfirstname}${user.UserlastName}`}
                                                        className="user-name-search"
                                                        onClick={() => addUsertoInfo(user)}
                                                    >
                                                        {user.Userfirstname} {user.UserlastName}
                                                    </Link>
                                               </div>
                                                <div className="saerch-div-icon">
                                                <Link 
                                                        to={`/${user.Userfirstname}${user.UserlastName}`}
                                                        className="user-name-search"
                                                        onClick={() => addUsertoInfo(user)}
                                                    >
                                                        <BsArrowRightShort className="saerch-add-icon" />
                                                    </Link>
                                                </div>
                                        </div>
                                        <hr className='mb-0' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Search>
                    )
                }}
            </FaConsumer>
        )
    }
}

const Search = styled.section`


`