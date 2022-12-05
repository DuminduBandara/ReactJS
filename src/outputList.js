import { useState, useEffect } from "react";
import  CarList from './props';

const OutPut = () => {

    const [cars, setCars] = useState([
        { brand: 'Toyota', speed: '240KMPH', id: 1 },
        { brand: 'Nissan', speed: '290KMPH', id: 2 },
        { brand: 'Masaratti', speed: '300KMPH', id: 3}
    ])

    const handleDelete = (id) => {
        const delCar = cars.filter(car => car.id !== id);
        setCars(delCar);
    }

    const [name, setName] = useState("Nissan");

    useEffect(() => {
        console.log("change car");
    }, [name]);
    
    return(

        <div className="content">
            <CarList cars={cars} title="All cars" handleDelete={handleDelete}/>
            {/* <CarList cars={cars.filter(car => car.brand === 'Toyota')} title="Toyota cars"/> */}
            <button onClick={() => setName('Bugatti')}>Change Name</button>
            <p>{name}</p>
        </div>

    );
}

export default OutPut;