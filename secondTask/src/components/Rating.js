import React from "react";
import star from "../star.jpg";

function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.text; i++) {
    stars.push(
      <button
        key={i}
        onClick={() =>
          alert("Dziękujemy za oddanie głosu. Twoja ocena: " + (i + 1))
        }
      >
        <img key={i} src={star} />
      </button>
    );
  }
  return <p>{stars}</p>;
}

export default Rating;
