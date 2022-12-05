import { useState } from 'react'; // this should add before use useSate hook

const State = () => {

    const [name, setName] = useState('Alex')

    const changeName = () => {
        setName('Jonathan');
    }

    return(
        <div className="content">
            <h1>{name}</h1>
            <button onClick={changeName}>Click</button>
        </div>
    );
}

export default State;