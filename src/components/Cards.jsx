import React from "react";
import { Link } from "react-router";
import style from "../styles/Cards.module.scss";

const Cards = (props) => {
  const { id, poster, movie_name, desc = '', rate} = props.movie || {};
  console.log(props.movie);
  
  return (
    <>
    <div className={style.cards}>
      <Link to={`/detail/${id}`}>
        <img
          src={poster}
          alt=""
        />
        <div className={style.circle}>
            <p>{rate}</p>
        </div>
        <div className={style.texts}>
          <h2>{movie_name}</h2>
        <p>
          {(desc || "").slice(0, 100)}... <small>more</small>
        </p>
        </div>
      </Link>
    </div>
    </>
  );
};

export default Cards;
