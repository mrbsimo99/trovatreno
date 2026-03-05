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
          placeholder="Numero Treno"
          className="w-[240px] md:w-auto px-8 py-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 placeholder:italic focus:outline-none focus:ring-0 focus:border-red-400 text-center transition-all hover:border-gray-400"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
        <button 
          type="submit"
          className="w-[240px] px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95 font-semibold"
        >
          Cerca
        </button>
      </form>
    </>
  );
}

export default SearchBar;