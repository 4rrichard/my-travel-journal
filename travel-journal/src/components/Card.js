import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`images/${props.imageUrl}`}
        alt="landscape"
        className="card--image"
      />
      <div className="card--text">
        <h3 className="card--country">
          <img src="images/pin.png" alt="pin" className="card--pin" />
          {props.location}{" "}
          <a href={`${props.googleMapsUrl}`}>
            <span className="card--link">View on Google maps</span>
          </a>
        </h3>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
