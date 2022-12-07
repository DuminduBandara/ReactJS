import React from 'react';

const Card = ({image, name, phone, email}) => {

    const imgPath = process.env.PUBLIC_URL;
    return(
        <div className="cardContent">
            <div className="card02">
                <img  className="" src={ imgPath + image} /> 
                <h3>{name}</h3>
                <div className="info-group">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <p>{email}</p>
                </div>                
         </div>
        </div>
    );
}

export default Card;