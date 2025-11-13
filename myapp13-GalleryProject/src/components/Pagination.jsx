const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6 mb-10  bg-black">

      <button
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white  text-gray-700 text-sm font-medium transition-all disabled:opacity-40">Prev
      </button>

      <button
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium transition-all disabled:opacity-40"> Next
      </button>

    </div>
  );
};

export default Pagination;
