const Navbar= () => {
    const imgPath = process.env.PUBLIC_URL;
    return (
        <nav className="navbar">
            <img  className="logo" src={ imgPath + '/images/logo.svg'} /> 
        </nav>
    );
}

export default Navbar;