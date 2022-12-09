import React from 'react';
// import React from '';
import Check from './components/check';

const App = () => {

  const [useData, setUseData] = React.useState(
    {
      firstName: "Alex",
      lastName: "Martin",
      phone: "+94 212122121",
      email: "alexMar123@gmail.com",
      isFavour: false
    }
  )

  

  const Favour = () => {
      setUseData(prevData =>{
       return{
          ...prevData, 
          isFavour: !prevData.isFavour
      }    
    })    
  }

  return(

    <div className="app">
      <h1>{useData.firstName} {useData.lastName}</h1>
      <h2>{useData.phone}</h2>
      <h2>{useData.email}</h2> 
      <Check isChecked={useData.isFavour} handleClick={Favour}/>
    </div>

  );
}

export default App;