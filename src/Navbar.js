const Navbar= () => {
    const imgPath = process.env.PUBLIC_URL;
    return (
        <nav className="navbar">
            <img  className="logo" src={ imgPath + '/images/logo192.png'} /> 
            <h3>ReactJS</h3>
            <h4>React Project 2022</h4>
        </nav>
    );
}

export default Navbar;