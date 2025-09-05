const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-violet-100">
      <div className="text-6xl text-pink-400 mb-5">title</div>
      <div className="flex text-lg text-pink-400 bg-blue-100 p-2 rounded-full w-80">
        <i className="fa-solid fa-star text-yellow-100 ml-1"></i> what's up
        <input className="flex-1 bg-blue-200" />
      </div>
    </div>
  );
};

export default Search;
