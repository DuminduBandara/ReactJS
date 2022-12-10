import React from 'react';

const Form = () => {

    const [dataName, setDataName] = React.useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            textArea: '',
            isTrue: true,
            vehicle: '',
            favBrand: '',
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
        console.log(dataName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="FirstName"
                name="firstName"
                onChange={handleChange}
                value={dataName.firstName}
            /><br/>
            <input 
                type="text"
                placeholder="LastName"
                name="lastName"
                onChange={handleChange}
                value={dataName.lastName}
            /><br/>
            <input 
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
            /><br/>
            <textarea 
                value={dataName.textArea}
                name="textArea"
                onChange={handleChange}
            />
            <br/>
            <input
                type="checkbox"
                id="isTrue"
                checked={dataName.isTrue}
                onChange={handleChange}
                name="isTrue"
            />
            <label htmlFor="isTrue">IS that true?</label><br/>

            <input
                type="radio"
                id="car"
                name="vehicle"
                value="car"
                checked={dataName.vehicle === "car"}
                onChange={handleChange}

            />
            <label htmlFor="car">Car</label><br/>
            <input
                type="radio"
                id="van"
                name="vehicle"
                value="van"
                checked={dataName.vehicle === "van"}
                onChange={handleChange}

            />
            <label htmlFor="van">Van</label><br/>
            <input
                type="radio"
                id="bus"
                name="vehicle"
                value="bus"
                checked={dataName.vehicle === "bus"}
                onChange={handleChange}
            />
            <label htmlFor="bus">Bus</label><br/>

            <label htmlFor="favBrand">Favorite Brand</label><br/>
            <select 
                id="favBrand"
                value={dataName.favBrand}
                onChange={handleChange}
                name="favBrand"
            >
                <option value="">-- Choose ---</option>
                <option value="BMW">BMW</option>
                <option value="Subaru">Subaru</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
            </select>
            <br/>

            <button>Submit</button>

        </form>
    );

}


export default Form;