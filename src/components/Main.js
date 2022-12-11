import React from 'react';

const Main = (props) => {
    return(

        <main className={props.darkMode ? "darkMode" : ""}>
            <h1 className="main-title">Fun fact React JS</h1>
            <ul className="facts">
                <li>Fact 01</li>
                <li>Fact 02</li>
                <li>Fact 03</li>
                <li>Fact 04</li>
                <li>Fact 05</li>
            </ul>
        </main>

    );
}


export default Main;