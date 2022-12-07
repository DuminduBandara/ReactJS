import React from 'react';

// const cities = ['nyc', 'landon', 'colombo'];

// map can use as for loop
// const Card = cities.map( item => item[0].toUpperCase() + item.slice(1));

const Card = () => {
    const ci = [<h1>NYC</h1>, 'landon', 'colombo'];
    return(

        <div>{ci}</div>
    );
}


export default Card;