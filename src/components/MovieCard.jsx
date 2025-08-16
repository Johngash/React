import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ name, imgUrl, year }) {
  return (
    <div className="flex flex-col lg:w-[20vw] xl:w-[14vw] h-[70vh] items-center relative">
      <div className="absolute z-1 left-1 top-1">
        <FontAwesomeIcon
          icon={faHeart}
          color="red"
          className="xl:hover:text-2xl  max-md:text-4xl transition-all duration-100 cursor-pointer"
        />
      </div>
      <div className="relative rounded-[5px] w-full h-[70%] overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className=" w-[100%] object-contain cursor-pointer"
        />
        <p className="absolute top-0 right-0 bg-gray-200 rounded-bl-[6px] opacity-80 px-2 text-black font-bold ">
          {year}
        </p>
      </div>
      <div className="text-xl font-bold font-poppins cursor-pointer">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default MovieCard;
