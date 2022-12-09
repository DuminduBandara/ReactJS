import React from 'react';

import MemeData from './memeData';

const Meme = () => {
    const imgPath = process.env.PUBLIC_URL;


    const [memeImage, setMemeImage] = React.useState("");

    let url;

    const getMeme = () => {
        const memesArray = MemeData.data.meme;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // console.log(url = memesArray[randomNumber].url);
        setMemeImage(memesArray[randomNumber].url);

        // console.log(memeImage);
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
            <img className="memeImage" src={`${imgPath}/images/${memeImage}`} /> 
        </main>

    );

}

export default Meme;