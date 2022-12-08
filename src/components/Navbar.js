const Navbar= () => {
    const imgPath = process.env.PUBLIC_URL;
    return (
        <nav className="navbar">
            <img  className="logo" src={ imgPath + '/images/logoTravel.svg'} />
            <span>my travel journal.</span> 
        </nav>
    );
}

export default Navbar;