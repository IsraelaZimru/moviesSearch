import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import MovieCard from "./movieCard";
import "./MoviesListStyle.css";

export default function MoviesList() {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="container">
      {!!movies.length &&
        movies.map((movie, i) => (
          <MovieCard
            key={i}
            Poster={movie.Poster}
            Title={movie.Title}
            Type={movie.Type}
            Year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
    </div>
  );
}
