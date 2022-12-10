import React from 'react';

// import MemeData from './memeData';

const Meme = () => {
    const imgPath = process.env.PUBLIC_URL;


    const [memeImage, setMemeImage] = React.useState(
        {
            topText: "",
            bottomText: "",
            ranImage: "https://i.imgflip.com/26am.jpg" 
            // ranImage: "" 
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const getMeme = () => {
        // const memesArray = allMemeImages.data.meme
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            ranImage:url
        }))
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(

        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="topText"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="bottomText"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button
                    onClick={getMeme}
                >Get new Meme</button>
            </div>
            <div className="meme">
                <img className="memeImage" src={memeImage.ranImage}/> 
                <h2 className="top-text">{memeImage.topText}</h2>
                <h2 className="bottom-text">{memeImage.bottomText}</h2>
            </div>
        </main>

    );

}

export default Meme;