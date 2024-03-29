import ClipLoader from "react-spinners/ClipLoader";

const MovieBody = ({ movie, isLoading, errMsg }) => {
  return (
    <>
      {isLoading ? (
        <div className="clip-loader">
          <ClipLoader isLoading={isLoading} size={50} />
        </div>
      ) : (
        <>
          {errMsg ? (
            <p className="error-message">{errMsg}</p>
          ) : (
            <div className="movie-result">
              {movie?.map((item) => {
                return (
                  <div className="movie-title">
                    <img src={item?.Poster} alt="movie-image" />
                    <p>{item?.Title}</p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieBody;
