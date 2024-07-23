import React from "react";
import data from './data'
import Tours from "./Tours";
import { useState } from "react";
const App = () => {

  const [ tours , setTours] = useState(data);
  function removeTour(id){
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className="btn-white"onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return <div>
   
    <Tours tours = {tours} removetour={removeTour}></Tours>
    </div>;
   
};

export default App;
