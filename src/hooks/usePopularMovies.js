import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies= ()=>{
    const dispatch= useDispatch();

    const nowPolularMovie= useSelector((store)=>store.movies.nowPopularMovies);

  const getNowPopularMovies= async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const jsonData= await data.json();
    // console.log(jsonData.results);
    
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(()=>{
    !nowPolularMovie && getNowPopularMovies();
  },[]);
};

export default usePopularMovies;

