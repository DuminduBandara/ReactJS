import React from 'react';

const Navbar= ({handleDarkMode}) => {

    return(
        <nav>
            <h1 className="navTitle">Note Dis{`</>`}</h1>
            <button className="modeBtn" 
                onClick={() => 
                    handleDarkMode(
                        (prevDarkMode) =>  !prevDarkMode
                    )
                }
            >
                Toggle mode
            </button>
        </nav>
    );
    
}

export default Navbar;