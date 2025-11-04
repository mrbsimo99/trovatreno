import { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [trainNumber, setTrainNumber] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(trainNumber);
  }

  return (
    <>
      <form onSubmit={handleSearch} className="flex flex-col items-center gap-3">
        <input
          type="text"
          placeholder="Inserisci numero treno"
          className="w-full md:w-auto h-[50px]  px-8 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-center"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
        <button
          type="submit"
          className="w-full md:w-[240px] h-[50px] px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Cerca
        </button>
      </form>
    </>
  );
}

export default SearchBar;