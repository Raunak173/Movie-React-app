import React,{useState,useEffect} from 'react'

const MovieInfo = ({dis}) => {

    const API_KEY = "3cf21c98";
    const [info,setInfo] = useState();

    useEffect(() => {
        getInfo();
      }, []);

      const getInfo = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${dis}`);
        const data = await response.json();
        // console.log(data);
        setInfo(data);
      }

      console.log(info);

    return (
        <div>
        {info && <p>Imdb Rating: {info.imdbRating}</p>}
        {info && <p>Rated for: {info.Rated}</p>}
        {info && <p>Release Date: {info.Released}</p>}
        {info && <p>Runtime: {info.Runtime}</p>}
        {info && <p>Genre: {info.Genre}</p>}
        {info && <p>Director: {info.Director}</p>}
        {info && <p>Writer: {info.Writer}</p>}
        {info && <p>Actors: {info.Actors}</p>}
        {info && <p>Plot: {info.Plot}</p>}
        {info && <p>Languages: {info.Language}</p>}
        {info && <p>Country of Origin: {info.Country}</p>} 
        {/* {info && <p>Freshness Rating on Rotten Tomatoes: {info.Ratings[1].Value}</p>}
        {info && <p>Production House: {info.Production}</p>}
        {info && <p>BoxOffice Collection: {info.BoxOffice}</p>} */}
        </div>
    )
}

export default MovieInfo
