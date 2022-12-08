import React from 'react';

const Card = (props) => {

    const imgPath = process.env.PUBLIC_URL;

    return(

        <div className="card">
            <img  className="card-image" src={` ${imgPath}/images/${props.imageUrl}`} /> 
            <div className="card-info">
                <div className="card-top">
                    <img  className="location-ico" src= {`${imgPath}/images/locationIco.svg`}/> 
                    <span>{props.location}</span>
                    <a href={props.googleMap}>View on the Google Map</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <h4>{`${props.startDate} - ${props.endDate}`}</h4>
                <p>{props.description}</p>

            </div>

        </div>
    );

}

export default Card;