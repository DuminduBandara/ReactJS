import React from 'react';

const Card = (props) => {

    console.log(props);

    const imgPath = process.env.PUBLIC_URL;
    return(
        <div className="cardContent">
            <div className="card02">
                <img  className="" src={ imgPath + props.image} /> 
                <h3>{props.name}</h3>
                <div className="info-group">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <p>{props.email}</p>
                </div>                
         </div>
        </div>
    );
}

export default Card;