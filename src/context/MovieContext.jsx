import { createContext, useEffect, useState } from "react"

export const movieContext = createContext(null)
const MovieContext = (props) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(JSON.parse(localStorage.getItem('movies')) || []);
    }, [])
  return (
    <movieContext.Provider value={{ data, setdata}}>
        {props.children}
    </movieContext.Provider>
  )
}

export default MovieContext