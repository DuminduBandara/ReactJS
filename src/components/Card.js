import React from 'react';

const Card = (props) => {

    const imgPath = process.env.PUBLIC_URL;

    return(

        <div className="card">
            {props.openSpots === 0 && <div className="sold-badge">SOLD OUT</div>}
            <img  className="card-image" src={` ${imgPath}/images/${props.image}`} /> 
            {/* use js template method for add image  */}
            <div className="cardStars">
            <img  className="star" src={ imgPath + '/images/star.svg'} />
            <span>{props.rating}</span>
            <span className="grey">{` (${props.ratingCount}).${props.country}`}</span>
            </div>
            <p>{props.title}</p>
            <h2>{`From ${props.price} / Person`}</h2>

        </div>
    );

}

export default Card;