import React from 'react';

const Card = (props) => {

    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.para}</p>
        </div>
    );
}

export default Card;