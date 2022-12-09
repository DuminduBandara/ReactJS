import React from 'react';

const BoxM = (props) => {

    const [on,setOn] = React.useState(props.on)
   
    const styles = {
        backgroundColor: on ? "#000" : "#fff"
    }


    const toggle = () => {
        setOn(pervOn=> !pervOn)
    }

    return (
        
        <div>
            <div style={styles} className="box" onClick={toggle}></div>
        </div>
    )

}


export default BoxM;