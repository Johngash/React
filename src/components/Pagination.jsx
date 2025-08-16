import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ page, setPage, totalResults }) {
  const pages = Math.ceil(totalResults / 10);
  console.log("results ", pages);
  return (
    <div className="flex justify-center items-center gap-10 w-full h-20  bg-slate-100 m-5 dark:bg-slate-800">
      {page > 1 && (
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-2xl cursor-pointer"
          onClick={() => {
            setPage((current) => current + 1);
          }}
        />
      )}

      <button
        onClick={() => setPage(1)}
        className="bg-gray-500 py-2 px-3 rounded-[3px] cursor-pointer"
      >
        1
      </button>
      <span>....</span>
      {page == 1 && (
        <button
          onClick={() => setPage(Math.ceil(pages / 2))}
          className="bg-gray-500 py-2 px-3 rounded-[3px] cursor-pointer"
        >
          {Math.ceil(pages / 2)}
        </button>
      )}
      <button
        onClick={() => setPage(Math.ceil(pages / 2))}
        className="bg-gray-500 py-2 px-3 rounded-[3px] cursor-pointer"
      >
        {Math.ceil(pages / 2)}
      </button>

      {/* {Array.from({ length: pages }, (_, i) => ( */}
      {/*   <button */}
      {/*     onClick={() => setPage(i)} */}
      {/*     key={i} */}
      {/*     className="bg-gray-500 py-2 px-3 rounded-[3px]" */}
      {/*   > */}
      {/*     {i + 1} */}
      {/*   </button> */}
      {/* ))} */}
      <span>....</span>
      <button
        onClick={() => setPage(pages)}
        className="bg-gray-500 py-2 px-3 rounded-[3px] cursor-pointer"
      >
        {pages}
      </button>
      {page < pages && (
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-2xl cursor-pointer"
          onClick={() => {
            setPage((current) => current + 1);
          }}
        />
      )}
    </div>
  );
}

export default Pagination;
