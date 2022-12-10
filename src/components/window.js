import React from 'react';

const Window = () => {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
   
    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)

        }
        window.addEventListener("resize", watchWidth)
        return () => {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
   
    return(
    <h1 >Window width: {windowWidth}</h1>
   );
}

export default Window;