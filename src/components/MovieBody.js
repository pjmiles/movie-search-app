import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const movieList = async () => {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?t=${searchText}&?i=tt3896198&apikey=c9c5de57`
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
        movieList();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchText]);

  return (
    <>
      <div className="search-container">
        <h1>Search</h1>
        <input type="text" onChange={handleSearch} value={searchText} />
        {/* <p>{movie.Error}</p> */}
      </div>
      <div className="movie-result">
        <div className="image-rapper">
            <>
              <img
                src={movie.Poster}
                alt="movie-picture"
                className="movie-pics"
              />
            </>
          <h2>{movie.Title}</h2>
        </div>
      </div>
    </>
  );
};

export default Movie;
