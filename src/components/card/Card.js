import React from 'react'
import {ImClock} from 'react-icons/im'
import {CardContainer} from './CardStyle'




const Card = ({type, notfound, size, img, title, time, url}) => {
    return (
        <CardContainer to={{ pathname: `${url}` }} target="_blank" type={type} size={size} notfound={notfound}>
            <img src={img} alt={title} />
            <div className="captionContainer">
                <div className="caption">
                    <p>{title}</p>
                    <div className="time">
                        <span className="time-icon"><ImClock /></span>
                        <span  className="time-text">{time}</span>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default Card
