import React from 'react';

const BoxM = (props) => {


   
    const styles = {
        backgroundColor: props.on ? "#000" : "#fff"
    }




    return (
        
        <div>
            <div style={styles} className="box" onClick={() => props.toggle(props.id)}></div>
        </div>
    )

}


export default BoxM;