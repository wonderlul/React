import React, { useContext } from "react";
import Description from "./Description";
import Poster from "./Poster";
import Title from "./Title";
import Rating from "./Rating";
import LanguageContext from "../LanguageContext";

function PostMovie(props) {
  const lang = useContext(LanguageContext);
  return (
    <div>
      <Title text={props.title[lang]} />
      <Poster text={props.poster} />
      <Rating text={props.rating} />
      <Description text={props.description[lang]} />
    </div>
  );
}

export default PostMovie;
