// Your Code Here!
let combinedMovieDataSet = movieDetails
  .map((detail) => {
    //Find the same movie in the other array
    let thisMovie = movies.find(
      (movie) =>
        detail.title === movie.title &&
        movie.year === parseInt(detail.release_date)
    );
    if (!thisMovie) {
      return undefined;
    }
    return { ...thisMovie, ...detail };
  })
  .filter((movie) => movie);
console.log("Combined Movies:", combinedMovieDataSet);

console.log("Movies:", movies);

console.log("MovieDetails:", movieDetails);

function MovieCard(movie) {
  // creates the HTML and returns it
}

