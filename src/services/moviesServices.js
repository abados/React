const moviesDB = [
  {
    id: 1,
    title: "Spiderman",
    genre: "Action",
    rate: 10,
    stock: 5,
    isLike: false,
  },
  { id: 2, title: "Batman", genre: "Action", rate: 6, stock: 5, isLike: false },
  { id: 3, title: "Hulk", genre: "Action", rate: 7, stock: 5, isLike: false },
  {
    id: 4,
    title: "IronMan",
    genre: "Action",
    rate: 10,
    stock: 5,
    isLike: false,
  },
  { id: 5, title: "G.O.T", genre: "Action", rate: 10, stock: 5, isLike: false },
  { id: 6, title: "It", genre: "Horror", rate: 8, stock: 5, isLike: false },
];
/*
export const setMovieLike = (id, isLike) => {
  let movie = moviesDB.find((m) => m.id === id)[0];
  if (movie) {
    movie.isLike = isLike;
  }
  let moviesWitoutId = moviesDB.filter((m) => m.id !== id);
  moviesDB = [...moviesWitoutId, movie];
};
*/
export const getMoviesFromServer = () => {
  // get from server take time
  return moviesDB;
};
