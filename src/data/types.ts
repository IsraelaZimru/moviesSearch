export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
  Rated?: string;
  Released?: Date;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: [
    {
      Source: string;
      Value: string;
    }[]
  ];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  DVD?: Date;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
};
