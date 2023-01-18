import { TProps } from "../data/types";

export default function MovieCard({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}: TProps) {
  return (
    <div className="child">
      <img src={Poster} height="200px" />
      <footer>
        <p>{Title}</p>
        <small>{Year}</small>
      </footer>
    </div>
  );
}
