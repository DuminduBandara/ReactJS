import React from 'react';

import MemeData from './memeData';

const Meme = () => {

    let url;

    const getMeme = () => {
        const memesArray = MemeData.data.meme;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // alert(randomNumber);
        url = memesArray[randomNumber].url;
        alert(url); 
    }

    return(

        <main>
            <div className="meme">
                <input type="text" placeholder="topText"/>
                <input type="text" placeholder="bottomText"/>
                <button
                    onClick={getMeme}
                >Get new Meme</button>
            </div>
        </main>

    );

}

export default Meme;