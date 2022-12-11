import React from 'react';

const Navbar= (props) => {
    const imgPath = process.env.PUBLIC_URL;
    return (
        <nav className={props.darkMode ? "darkMode" : ""}>
            <img  className="logo" src={ imgPath + '/images/logo192.png'} />
            <h3 className="navTitle">React.js</h3>
            <div className="toggle">
                <p className="toggle-light">Light</p>
                <div 
                    className="toggle-slider"
                    onClick={props.toggleDarkMode}    
                >
                    <div className="toggle-circle"></div>
                </div>
                <p className="toggle-dark">Dark</p>
            </div>
        </nav>
    );
}

export default Navbar;