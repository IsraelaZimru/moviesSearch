import { movieActions } from "./index";

const BaseUrl = "https://www.omdbapi.com/?apikey=fb2e1ae4";

export const getMovies = (movie: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${BaseUrl}&s=${movie}`);

      if (!response.ok) throw new Error("Feching data failed.");

      const responseData = await response.json();

      if (responseData.length) {
        dispatch(movieActions.getMovies(responseData));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
