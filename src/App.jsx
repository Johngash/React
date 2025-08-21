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
  const [isLoading, setIsLoading] = useState(false);
  const [updateBody, setUpdateBody] = useState(false);

  useEffect(() => {
    setMovieData(null);
    searchMovie.trim() == "" && setSearchMovie("bat");

    setIsLoading(true);
    fetch(
      `${import.meta.env.VITE_TMDB_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchMovie}&page=${page}`,
    )
      .then((res) => res.json())
      .then((data) => {
        let keys = [];
        let movies = [];

        console.log("Data:\n" + JSON.stringify(data));

        data.results.forEach((element) => {
          if (!keys.includes(element.id)) {
            keys.push(element.id);
            movies.push(element);
          }
        });
        let movieData = {
          ...data,
          results: movies,
        };
        setMovieData(movieData);
        console.log("MoviesData:\n" + JSON.stringify(movieData));
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, [searchMovie, page]);

  return (
    <div
      className={`${darkMode} flex flex-col min-h-[100vh] items-center overflow-x-hidden dark:bg-slate-950 dark:text-white transition-colors duration-300 ease-in`}
    >
      <LightDark mode={darkMode} setMode={setDarkMode} />
      <Pages />
      <SearchBar
        onSearch={setSearchMovie}
        movieNames={movieData?.results || []}
        isLoading={isLoading}
        setUpdateBody={setUpdateBody}
      />
      {updateBody && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 justify-center">
            {movieData?.results?.length > 0 ? (
              movieData.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  name={movie.title}
                  imgUrl={movie.poster_path}
                  date={movie.release_date}
                />
              ))
            ) : (
              <p className="min-h-[60vh]">Loading...</p>
            )}
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={movieData?.total_pages}
          />
        </>
      )}
    </div>
  );
}

export default App;
