import React from 'react'
import {FaConsumer} from '../../Context/context'
import styled from 'styled-components'

export default function btn({userInfo}) {
    let {follow} = userInfo;
    return (
        <FaConsumer>
            {value =>{
                let {addUsertoFollower,removeUsertoFollower} = value;
                if(follow === true){
                    return(
                        <BtnWrapper follow={follow}>
                            <button onClick={() => removeUsertoFollower(userInfo)} id='follow-btn-id' className="follow-btn">Following</button>
                        </BtnWrapper>
                    )
                }
                return(
                    <BtnWrapper follow={follow}>
                        <button onClick={() => addUsertoFollower(userInfo)} id='follow-btn-id' className="follow-btn">Follow</button>
                    </BtnWrapper>
                )
            }}
        </FaConsumer>
    )
}

const BtnWrapper = styled.div`
    .follow-btn{
        display: ${props => props.follow ? "block" : "block" };
        border: none;
        padding: 5px 15px;
        background: ${props => props.follow ? "#385898" : "#2680c0" };
        color: #FFF;
        border-radius: 5px;
        font-weight: 600;
    }
`