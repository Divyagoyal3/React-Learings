import { useState } from "react";
import "./App"

function Card({id, name, info, image, price,removeTour}) {
  const [readmore, setreadmode] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`

  function readmodeHandler() {
    setreadmode(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="card-image" alt=""></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">${price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="descriptions">{description}
        <span className="read-more" onClick={readmodeHandler}>
          {readmore ? `Show Less` : `Read More`}
        </span>
        </div>
      </div>

      <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
    </div>
  );
}

export default Card;
