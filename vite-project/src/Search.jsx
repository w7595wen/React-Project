const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-violet-100">
      <div className="text-6xl text-pink-400 mb-5">title</div>
      <div className="flex text-lg text-pink-400 bg-blue-100 p-2 rounded-full w-80">
        <i className="fa-solid fa-star text-yellow-100 ml-1"></i> what's up
        <input className="flex-1 bg-blue-200 mx-4" />
      </div>
      <div className="mt-4">
        <button className="m-1 bg-pink-100 rounded-md px-4 py-2">
          button 1
        </button>
        <button className="m-1 bg-blue-200 rounded-md px-4 py-2">
          button 2
        </button>
      </div>
    </div>
  );
};

export default Search;
