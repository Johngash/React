import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Pages() {
  return (
    <div className="flex items-center justify-between w-full px-10 font-roboto">
      <div className="flex items-center gap-10">
        <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
        <img
          src="/pgicon.png"
          alt="page logo"
          className="h-12 cursor-pointer"
        />
      </div>
      <h1 className="text-2xl font-bold cursor-pointer">Movie Search</h1>
    </div>
  );
}

export default Pages;
