import React from 'react';


const Card = (props) => {

    return(
        <div className="card">
            <h2>{props.country}</h2>
            <p>{props.capital}</p>
        </div>
    );
}

export default Card;