import React,{useState,useEffect} from 'react';
import MovieList from "./MovieList"
import './App.css';
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
  container:{
      display: 'flex',
      backgroundColor: 'black',
      color: 'yellow',
      padding: 25,
      justifyContent: 'space-between'
  },
  searchBox:{
      padding: 10,
      width: "50%",
      fontSize: 15,
      border: 'none',
      borderRadius: 8,
      outline: 'none'
  }
})

function App() {

  const classes = useStyle();

  const [searchQuery,setSearchQuery] = useState("Avengers");
  const [arr,setArr] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "3cf21c98";

  useEffect(() => {
    getCards();
  }, [searchQuery]); //We kept it an empty arrray so that we get only one time page refresh but after we get a query we can again calll this function. So we added the query inside the array.

  const getCards = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
    const data = await response.json();
    setArr(data.Search)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleKey=(e)=>{
    if(e.key==='Enter'){
      getSearch();
    }
  }

  const getSearch = (e) => {
    setSearchQuery(search);
    setSearch("");
  }

  return (
    <div>
    <div className={classes.container}>
      <h1>🎬 MOVIE HUB</h1> 
      <input className={classes.searchBox} 
      placeholder="Search here..."
      value={search}
      onChange={updateSearch}
      onKeyDown={handleKey}
      />
    </div>
    {arr && <MovieList arr={arr}/>}
    </div>
  );
}

export default App;
