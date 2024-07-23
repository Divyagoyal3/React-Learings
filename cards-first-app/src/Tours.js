import React from "react";
import Card from "./Card";

function Tours({tours,removetour}) {

  return(
   <div className="container">
      <div> <h2 className="title"> Plan With Divya</h2></div>
      <div className="cards">{
        tours.map((tour)  => {
          return <Card  key={tour.id}{...tour} removeTour={removetour}></Card>
        })
      }
      </div>
   </div>
  );

}

export default Tours