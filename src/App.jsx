import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Pages from "./components/Pages";
import Pagination from "./components/Pagination";
import LightDark from "./components/LightDark";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [searchMovie, setSearchMovie] = useState("batman");
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState("dark");

  searchMovie.trim() == "" && setSearchMovie("bat");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}&s=${searchMovie}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        console.log(data.Search);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [searchMovie, page]); // refetch when searchMovie changes

  return (
    <div className={`${darkMode} flex flex-col min-h-[100vh] items-center dark:bg-slate-950 dark:text-white transition-colors duration-300 ease-in`}>
      <LightDark mode={darkMode} setMode={setDarkMode} />
      <Pages />
      <SearchBar
        onSearch={setSearchMovie}
        movieNames={movieData?.Search || []}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 justify-center">
        {movieData?.Search?.length > 0 ? (
          movieData.Search.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              name={movie.Title}
              imgUrl={movie.Poster}
              year={movie.Year}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalResults={movieData?.totalResults} />
    </div>
  );
}

export default App;
