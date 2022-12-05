const CarList = ({ cars, title, handleDelete}) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {cars.map(car => (
          <div className="blog-preview" key={car.id} >
            <h2>{ car.brand }</h2>
            <p>{car.speed}</p>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default CarList;