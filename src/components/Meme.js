import React from 'react';

import MemeData from './memeData';

const Meme = () => {
    const imgPath = process.env.PUBLIC_URL;


    const [memeImage, setMemeImage] = React.useState(
        {
            topText: "",
            bottomText: "",
            ranImage: "m1.jpg" 
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState(MemeData);


    const getMeme = () => {
        const memesArray = allMemeImages.data.meme
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            ranImage:url
        }))

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
            <img className="memeImage" src={`${imgPath}/images/${memeImage.ranImage}`} /> 
            {/* <img className="memeImage" src=""/>  */}
        </main>

    );

}

export default Meme;