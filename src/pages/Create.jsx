import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { movieContext } from "../context/MovieContext";
import { useContext } from "react";
import { useNavigate } from 'react-router';
import style from '../styles/Create.module.scss';
const Create = () => {
  const { register, handleSubmit, reset} = useForm();
  const { data, setdata } = useContext(movieContext)
  const navigator = useNavigate();

  const submitHandler = (movie) => {
    movie.id = nanoid();

    const copydata = [...data];
    copydata.push(movie);
    setdata(copydata);
    localStorage.setItem('movies', JSON.stringify(copydata));
    reset();
    navigator('/');
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input {...register('poster')} type="url" placeholder='Poster url' /> <br />
        <input {...register('movie_name')} type="text" placeholder='Movie Name'/> <br />
        <textarea {...register('desc')} cols={35} rows={5} type="text" placeholder='Movie desc...'></textarea> <br />
        <input {...register('rate')} type="number" min={0} max={5} step={0.1} placeholder='rate' />
        <input {...register('trailer_link')} type="url" placeholder='trailer link' /> <br />
        <button>create</button>
      </form>
    </div>
  )
}

export default Create