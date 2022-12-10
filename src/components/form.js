import React from 'react';

const Form = () => {

    const [dataName, setDataName] = React.useState(
        {
            email: '',
            isTrue: true,
            password: '',
            confirmPassword: '',
        }
    );

    // console.log(dataName.favBrand);


    const handleChange = (event) => {

        const {name, value, type, checked} = event.target

        setDataName(prevData => {
            return{
                ...prevData,
                [name]:type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(dataName.password === dataName.confirmPassword){
            console.log("Pass");
        }else{
            alert("Incorrect Password");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="formSection">
            <input 
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
            />
            <input 
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={dataName.password}
            />
            <input 
                type="password"
                placeholder="confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={dataName.confirmPassword}
            />              

            <div>

            <input
                type="checkbox"
                id="news"
                name="vehicle"
                value="car"
                checked={dataName.isTrue}
                onChange={handleChange}
            />
            <label htmlFor="news">I want to join newsletter</label><br/>
            </div>
            

            <button>Sign Up</button>

        </form>
    );

}


export default Form;