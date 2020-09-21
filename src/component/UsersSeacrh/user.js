import React, { Component } from 'react';
import {FaConsumer} from '../../Context/context';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Goed from '../../images/goed.jpeg';
import Eror from '../../Pages/Eror';
import Follow from '../../component/Follow';
import Btn from './btn';
import PostsDefault from '../Posts'
import {FiMoreHorizontal} from 'react-icons/fi'
export default class Profile extends Component {
    render() {
        return (
            <FaConsumer>
                {value =>{
                    const {UserInfo,LikePost,UnLikePost,SeeMore, addComment} = value;
                    const {Userfirstname,UserlastName,imgSrcUser,Followers = [],Posts = [],follow} = UserInfo;

                    if(UserInfo.length === 0){
                        return(
                            <Eror />
                        )
                    }
                    if(UserInfo){
                    return(
                            <PersonalProfile className="container" follow={follow}>
                                <div className="row mb-5">
                                    <div className="col-12 mx-auto ss">
                                        <img 
                                            src={imgSrcUser || Goed} 
                                            alt="imageprivate" 
                                            className="personal-img" 
                                        />
                                    </div>
                                    <div className="col-12 mx-auto py-5 d-flex justify-content-between">
                                       <div>
                                            <h3 className="pt-2 pb-2 font-weight-bold">{Userfirstname || "Fa-Back"}  {UserlastName || ''}</h3>
                                            <Link to={`/Info`} className=" pb-2" onClick={ () => SeeMore(UserInfo) }>
                                                See More <FiMoreHorizontal />
                                            </Link>
                                       </div>
                                       <div>
                                           <Btn userInfo={UserInfo} />
                                       </div>
                                    </div>
                                </div>
                                <div className="row py-5">
                                    <div className="col-10 col-sm-10 col-xm-10 col-md-7 col-lg-7 mx-auto">
                                        <PostsDefault All={Posts} Like={LikePost} Un={UnLikePost} Comment={addComment} />
                                    </div>
                                    <div className="col-10 d-none  d-md-block col-md-5 col-lg-5 mx-auto">
                                        <Follow users={Followers} />
                                    </div>
                                </div>
                            </PersonalProfile>
                    )
                }
                }}
            </FaConsumer>
        )
    }
}

const PersonalProfile = styled.section`
    .ss{
        background : linear-gradient( rgba(0, 0, 0,0.8),rgba(0, 0, 0 , 0.9) ), center/cover url(${Goed}) no-repeat ;
        height : 300px;
        position: relative;
    }
    .bord{
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
        -webkit-box-shadow: 3px 2px 15px 1px rgba(224,224,224,1);
        -moz-box-shadow: 3px 2px 15px 1px rgba(224,224,224,1);
        box-shadow: 3px 2px 15px 1px rgba(224,224,224,1);
    }
    .personal-img{
        width : 200px;
        height : 210px;
        border : 2px solid #fff;
        border-radius : 50%;
        position: absolute;
        bottom: -3rem;
        z-index :2;
    }
`
