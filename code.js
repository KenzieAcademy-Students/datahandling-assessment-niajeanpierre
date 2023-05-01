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

  let display = document.getElementById("gallery");
combinedMovieDataSet.map((combinedMovieDataSet) => {
  let html = `<img width="250px" height="300px" src=${combinedMovieDataSet.imageUrl}> <h2>${combinedMovieDataSet.title}</h2> <h3>Cast: ${combinedMovieDataSet.cast}</h3> <p>Year: ${combinedMovieDataSet.year}</p>`
  display.innerHTML += html;
}) 
 
// combinedMovieDataSet.map((combinedMovieDataSet) => {
//   let html = `<img width="20px" height="20px" src=${combinedMovieDataSet.imageUrl}>`
//   display.innerHTML += html;
// }) 
 







// window.onload = () => {
//   MovieCard(movie);
// }