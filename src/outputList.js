import { useState, useEffect } from "react";
import  CarList from './props';

const OutPut = () => {

    const [cars, setCars] = useState(null);
    const [isPending, setPending] = useState(true);
    const [isError, setError] = useState(null);

    const handleDelete = (id) => {
        const delCar = cars.filter(car => car.id !== id);
        setCars(delCar);
    }

    const [name, setName] = useState("Nissan");

    useEffect(() => {
        //normally not use setTimeout method
        setTimeout(() =>{
        fetch('http://localhost:8080/cars')
        .then(res => {
            console.log(res)
            if(!res.ok){
                throw Error("something went wrong!");
            }
            return res.json();
        })
        .then(data =>{
            setCars(data);
            setPending(false);
            setError(null);
        }).catch(error => {
            setPending(false);
            setError(error.message);
        });
        }, 1000)

    }, []);
    
    return(

        <div className="content">
            {isError && <div>{isError}</div>}
            {isPending && <div>Loading...</div>}
            {cars &&<CarList cars={cars} title="All cars" handleDelete={handleDelete}/>}
            {/* <CarList cars={cars.filter(car => car.brand === 'Toyota')} title="Toyota cars"/> */}
        </div>

    );
}

export default OutPut;