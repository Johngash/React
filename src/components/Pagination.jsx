import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ page, setPage, totalPages }) {
  const start = Math.floor((page - 1) / 10) * 10 + 1;
  const end = Math.min(start + 9, totalPages);

  const displayed = [];
  for (let i = start; i <= end; i++) {
    displayed.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 w-full h-20 bg-slate-100 m-5 dark:bg-slate-800">
      {start > 1 && (
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-2xl cursor-pointer"
          onClick={() => setPage(start - 10)}
        />
      )}
      {displayed.map((d) => (
        <button
          key={d}
          onClick={() => setPage(d)}
          className={`py-2 px-[4px] md:px-3 rounded-[3px] cursor-pointer ${
            d === page ? "bg-blue-500 text-white" : "bg-gray-500"
          }`}
        >
          {d}
        </button>
      ))}
      {end < totalPages && (
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-2xl cursor-pointer"
          onClick={() => setPage(start + 10)}
        />
      )}
    </div>
  );
}

export default Pagination;
