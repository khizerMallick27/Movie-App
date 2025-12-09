import axios from "axios";
import { useState } from "react";
import MovieInput from "../components/MovieInput";
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");

  const handleMovieChange = (event) => {
    setMovieName(event.target.value);
    setError("");
  };

  const fetchMovie = async () => {
    if (!movieName) {
      setError("Please enter a movie name");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieName}&apikey=dbb9375f`
      );

      if (response.data.Response === "False") {
        setError("❌ Movie not found!");
        setMovieData(null);
        return;
      }

      console.log(response.data);
      setMovieData(response.data);
    } catch (error) {
      console.error(error, "API error");
      setError("⚠️ Something went wrong!");
      setMovieData(null);
    }
  };

  return (
    <div className="movie-container">
      <h1>🎬 Movie Search App</h1>

      <MovieInput
        movieName={movieName}
        handleMovieChange={handleMovieChange}
        fetchMovie={fetchMovie}
      />

      {error && <p className="error-message">{error}</p>}
      {movieData && <MovieCard movieData={movieData} />}
    </div>
  );
};

export default Movie;
