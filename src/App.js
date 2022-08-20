
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

import { useEffect, useState } from "react";

function App() {

  const [movieList, setMovieList] = useState("");

    useEffect(() => {
      const loadAll = async () =>{
          // Pegando a lista total

          let list = await Tmdb.getHomeList();
          setMovieList(list);
      }

      loadAll();
    }, []);
    // 
  
  return (
    <div className="App">
     <section className= "lists"> 
      {movieList && movieList.map((item, key) => (
           <MovieRow key={key} title={item.title} items={item.items}/>
          
      ))}
     </section>
    </div>
  );
}

export default App;
