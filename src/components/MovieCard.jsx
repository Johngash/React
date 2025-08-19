import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ name, imgUrl, date  }) {
  const year = date.split("-")[0];
  return (
    <div className="flex flex-col lg:w-[20vw] xl:w-[14vw] h-[70vh] relative">
      <div className="absolute z-1 left-1 top-1">
        <FontAwesomeIcon
          icon={faHeart}
          color="red"
          className="xl:hover:text-2xl  max-md:text-4xl transition-all duration-100 cursor-pointer"
        />
      </div>
      <div className="relative rounded-[5px] w-full h-[70%] overflow-hidden">
        <img
          src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${imgUrl}`}
          alt={name}
          className="w-[100%] h-[42vh] object-cover cursor-pointer rounded-[5px] bg-gray-900"
        />
        <p className="absolute top-0 right-0 bg-gray-200 rounded-bl-[6px] opacity-80 px-2 text-black font-bold ">
          {year}
        </p>
      </div>
      <div className="text-xl font-bold lg:text-[14px] text-slate-500 font-roboto cursor-pointer">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default MovieCard;
