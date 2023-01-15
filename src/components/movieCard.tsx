type TProps = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export default function MovieCard({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}: TProps) {
  return (
    <div>
      <img src={Poster} />
      <footer>
        <p>{Title}</p>
        <small>{Year}</small>
      </footer>
    </div>
  );
}
