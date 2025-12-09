const MovieCard = ({ movieData }) => {
  return (
    <div className="movie-card">
      <img src={movieData.Poster} alt={movieData.Title} />
      <h2>{movieData.Title}</h2>
      <p>🎞 Year: {movieData.Year}</p>
      <p>⭐ IMDb Rating: {movieData.imdbRating}</p>
      <p>📽 Type: {movieData.Type}</p>
      <p>🎭 Actors: {movieData.Actors}</p>
    </div>
  );
};

export default MovieCard;
