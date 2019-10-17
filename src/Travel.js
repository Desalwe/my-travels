import React from "react";

const Travel = ({ tripInfo }) => (
  <figure>
    <img src={tripInfo.photo} alt={tripInfo.destination} />
    <figcaption>
      <blockquote>{tripInfo.destination}</blockquote>
      <blockquote>{tripInfo.country}</blockquote>
      <blockquote>{tripInfo.distance}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;