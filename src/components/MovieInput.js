const MovieInput = ({ movieName, handleMovieChange, fetchMovie }) => {
  return (
    <div className="movie-input">
      <input
        type="text"
        placeholder="Enter a movie name"
        value={movieName}
        onChange={handleMovieChange}
      />
      <button className="search-btn" onClick={fetchMovie}>
        Search Movie
      </button>
    </div>
  );
};

export default MovieInput;
