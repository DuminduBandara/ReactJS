import React from 'react';

const Meme = () => {

    return(

        <main>
            <form  className="form">
                <input type="text" placeholder="topText"/>
                <input type="text" placeholder="bottomText"/>
                <button  onClick>Get new Meme</button>
            </form>
        </main>

    );

}

export default Form;