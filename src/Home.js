const Home = () =>{

    const clickButton = () =>{
        alert("Hello React Js");
    }

    const clickAgain = (name) => {
        alert("Hello " + name);
    }

    const clickEvent = (name,e) => {
        alert("Event: " + e.target, "Object: " + name);
    }

    return(
        <div className="home">
            <h1 style={{
                color: "red",
                fontSize: "3rem",
                textAlign: "center"
            }}>Home Page</h1>
            <button onClick={clickButton}>Click Alert #01</button>
            <button onClick={() => clickAgain("React")}>Click Alert #02</button>
            <button onClick={(e) => clickEvent("Python",e)}>Click Alert #03</button>
        </div>
    );
}

export default Home;