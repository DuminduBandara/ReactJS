import React from 'react';

const Hero = () => {

    const imgPath = process.env.PUBLIC_URL;

    return(

        <div className="hero">
             <img  className="hero-img" src={ imgPath + '/images/i1.svg'} /> 
             <h1>React Experience</h1>
             <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

    );

}

export default Hero;