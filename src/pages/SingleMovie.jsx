import React, { useContext, useEffect, useState } from "react";
import { movieContext } from "../context/MovieContext";
import { useParams, useNavigate } from "react-router";
import style from "../styles/SingleMovie.module.scss";

const SingleMovie = () => {
  const { data, setdata } = useContext(movieContext);
  const params = useParams();
  const movie = (data || []).find((movie) => String(params.id) === String(movie.id));
  const navigator = useNavigate();

  const deleteHandler = () => {
    const filterdata = (data || []).filter((movie) => movie.id != params.id);
    setdata(filterdata);
    localStorage.setItem("movies", JSON.stringify(filterdata));
    const filterFav = (favorite || []).filter((f) => f.id != params.id);
    setfavroite(filterFav);
    localStorage.setItem("movieFav", JSON.stringify(filterFav));
    navigator("/");
  };

  const [favorite, setfavroite] = useState(() => {
    return JSON.parse(localStorage.getItem("movieFav") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("movieFav", JSON.stringify(favorite));
  }, [favorite]);

  const FavHandler = () => {
    let copyFav = [...favorite];
    if (!copyFav.find((f) => f.id == movie?.id)) {
      copyFav.push(movie);
      setfavroite(copyFav); // <- update state so UI re-renders
      localStorage.setItem("movieFav", JSON.stringify(copyFav));
    }
  };
  const UnFavHandler = () => {
    const filterfav = favorite.filter((f) => f.id != movie?.id);
    setfavroite(filterfav);
    localStorage.setItem("movieFav", JSON.stringify(filterfav));
  };

  return (
    <div className={style.container}>
      <p onClick={() => navigator(-1)} className={style.back}>
        <i className="ri-arrow-left-line"></i>Back
      </p>
      <h1>{movie?.movie_name}</h1>
      <div className={style.parths}>
        <img src={movie?.poster} alt="" />

        <div>
          <p>{movie?.desc}</p>
          <p className={style.rate}>
            Rating: <span>{movie?.rate}</span>
          </p>

          <button className={style.play} onClick={() => window.open(movie?.trailer_link, "_blank")}>
            <i className="ri-play-fill"></i> Play Trailer
          </button>
        </div>
        <button onClick={deleteHandler} className={style.deletes}>Delete</button>
      </div>
      <span className={style.heart}>
        {favorite.find((f) => f.id == movie?.id) ? (
          <i onClick={UnFavHandler} className="ri-heart-fill"></i>
        ) : (
          <i onClick={FavHandler} className="ri-heart-line"></i>
        )}
      </span>
    </div>
  );
};

export default SingleMovie;
