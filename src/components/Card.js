import React from 'react';

const Card = () => {

    const imgPath = process.env.PUBLIC_URL;

    return(

        <div className="card">
             <img  className="card-image" src={ imgPath + '/images/i3.svg'} /> 
             <div className="cardStars">
                <img  className="star" src={ imgPath + '/images/star.svg'} />
                <span>5.0 </span>
                <span className="grey"> (6). USA</span>
             </div>
             <p>Life lessons with Katie Zaferes</p>
             <h2>From $36 / Person</h2>

        </div>
    );

}

export default Card;