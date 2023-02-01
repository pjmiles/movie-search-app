const MovieBody = ({ movie, isLoading, errMsg }) => {
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {errMsg ? (
            <p className="error-message">{errMsg}</p>
          ) : (
            <div className="movie-result">
              {movie?.map((item) => {
                return (
                  <div>
                    <h1>{item?.Title}</h1>
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
