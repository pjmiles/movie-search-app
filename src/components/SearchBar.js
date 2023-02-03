import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = ({ setMovie, setErrMsg, setIsLoading }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const movieData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?s=${searchText}&?i=tt3896198&apikey=c9c5de57`
        );
        if (data?.Response === "True") {
          setErrMsg("");
          setIsLoading(false);
          setMovie(data?.Search);
        } else {
          setIsLoading(false);
          setErrMsg(data?.Error);
        }
      } catch (e) {
        setErrMsg(e.message);
        setIsLoading(false);
      }
    };

    if (searchText) {
      const timeOutId = setTimeout(() => {
        movieData();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    } else if (searchText === "") {
      setIsLoading(false);
    }
  }, [searchText]);

  return (
    <div className="search-container">
      <h1>Search</h1>
      <input type="text" onChange={handleSearch} value={searchText} />
    </div>
  );
};

export default SearchBar;
