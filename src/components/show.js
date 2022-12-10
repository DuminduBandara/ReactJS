import React from 'react';


const Show = (props) => {

    const [isShow, setISShow] = React.useState(false);

    const toggleShow = () => {
      setISShow(prevShow => !prevShow)
    }


    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShow && <p>{props.punchLine}</p>}
            <button onClick={toggleShow}>{isShow ? "Hide": "Show"} PunchLine</button>
            <hr/><br/>
        </div>
    );

}


export default Show;

