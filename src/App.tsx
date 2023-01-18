import "./App.css";
import MovieForm from "./components/MovieForm";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Search for Movies:</h1>
      <MovieForm />
      <MoviesList />
    </div>
  );
}

export default App;
