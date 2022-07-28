import React from "react";

export default function Card(props) {
  console.log(props);

  return (
    <div className="card--section">
      <div>
        <img
          src={process.env.PUBLIC_URL + `images/${props.imageUrl}`}
          className="card--image"
        />
      </div>
      <div className="card--content">
        <div className="travel--location">
        <img
          src={process.env.PUBLIC_URL + "images/location.png"} className="location--logo"
        />
        <p className="travel--country">{props.location}</p>
        <a href={props.googleMapsUrl} className="travel--map" target="_blank"> View on Google Maps</a>
        </div>

        <h1 className="travel--title">{props.title}</h1>

        <h4 className="travel--duration">{props.startDate} - {props.endDate}</h4>

        <p className="travel--desc">{props.description}</p>
        {/* <hr /> */}
      </div>
    </div>
  );
}
