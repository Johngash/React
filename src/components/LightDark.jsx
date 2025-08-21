import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function LightDark({ mode, setMode }) {
  return (
    <div
      onClick={() => {
        mode === "dark" ? setMode("") : setMode("dark");
      }}
      className="flex items-center justify-center bg-gray-200 px-1.5 py-2 mt-2 fixed z-10 rounded-full blur-[0.7px] cursor-pointer"
    >
      {mode === "dark" ? (
        <FontAwesomeIcon icon={faMoon} color="black" />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </div>
  );
}

export default LightDark;
