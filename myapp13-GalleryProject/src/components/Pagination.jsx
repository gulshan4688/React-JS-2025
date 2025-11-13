const Pagination = ({ index, goPrev, goNext, setPictureArr }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6 mb-2  bg-black">

      <button onClick={() => {
        goPrev();
        setPictureArr([]);
      }}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white  text-gray-700 text-sm font-medium transition-all disabled:opacity-40">Prev
      </button>
      <h4>{index}</h4>
      <button onClick={() => {
        goNext();
        setPictureArr([]);
      }}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium transition-all disabled:opacity-40"> Next
      </button>

    </div>
  );
};

export default Pagination;
