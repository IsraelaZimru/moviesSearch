import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/movieAction";

export default function MovieForm() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState({
    value: "",
  });

  function updateHandler(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setMovieName((prev) => ({
      value,
    }));
  }

  async function submitHandler() {
    try {
      console.log(movieName.value);

      dispatch(getMovies(movieName.value));

      setMovieName((prev) => ({
        value: "",
      }));
    } catch (e) {
      console.log("e", e);
    }
  }

  return (
    <div>
      <label> movie name: </label>
      <input value={movieName.value} onChange={updateHandler} />
      <button onClick={submitHandler} />
    </div>
  );
}
