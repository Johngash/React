import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SearchBar({ onSearch, movieNames }) {
  const [showDropDown, setShowDropdown] = useState(false);

  function submitSearch(e) {
    e.preventDefault();
    setShowDropdown(false);
  }

  return (
    <div className="relative w-full bg-slate-200 flex justify-center items-center m-5 dark:bg-slate-900 ">
      <form
        onSubmit={submitSearch}
        className="bg-slate-50 max-w-[90vw] rounded-full relative px-14 py-2 flex h-[100%] justify-center items-center gap-2 m-5 dark:bg-slate-500 "
      >
        <input
          onBlur={() => setShowDropdown(false)}
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => {
            setShowDropdown(true);
            onSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowDropdown(false);
            }
          }}
          className="outline-0 border-none p-2  text-black max-md:text-xl"
        />
        <FontAwesomeIcon icon={faSearch} />
        {showDropDown && (
          <div className=".dark absolute top-15 left-5 z-10 lg:w-[22vw] bg-gray-100 rounded-[10px] py-3 overflow-hidden dark:bg-slate-800">
            {movieNames.length > 0 ? (
              movieNames.map((movie, index) => (
                <div
                  key={movie.id}
                  className={`mx-0 flex gap-2 py-1 items-center ${index % 2 == 0 ? "" : "bg-gray-200 dark:bg-slate-900"} w-[100%] hover:bg-slate-700 transition-colors duration-75`}
                  onClick={() => console.log(movie.Title)}
                >
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="h-15 ml-1 rounded-[5px] cursor-pointer"
                  />
                  <p className="cursor-pointer self-start">{movie.title}</p>
                </div>
              ))
            ) : (
              <div className="px-10">
                <p>No movies found</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
