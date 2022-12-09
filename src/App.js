import React from 'react';

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

  
  let checkIco = useData.isFavour ? "Checked!" : "Unchecked!";

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
      <button onClick={Favour} className="btn">IS Favour</button>
      <h1>{useData.firstName} {useData.lastName}</h1>
      <h2>{useData.phone}</h2>
      <h2>{useData.email}</h2> 
      <h2>{checkIco}</h2>
    </div>

  );
}

export default App;