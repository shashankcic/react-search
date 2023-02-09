import React, { useState } from "react";

function Card({ person }) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div
      onClick={() => setExpanded(!isExpanded)}
      className="tc bg-light-blue dib br3 pa3 ma2"
    >
      {isExpanded ? (
        <div>
          <h2>{person.name}</h2>
        </div>
      ) : (
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.address}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
