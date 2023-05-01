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



function movieCard(movies) {
  let display = document.getElementById("gallery");
  movies.map((movie) => {
    let card = document.createElement("div");
    card.classList.add("myCard");
    card.innerHTML = `<div class = "title"> Title: ${movie.title}</div> 
  <img width="250px" src=${movie.imageUrl}>
  <div> Year: ${movie.year}</div>
  <div> Cast: ${movie.cast}</div>`;
    display.append(card);
  });
}
////////////////////////////////////////////////////
let searchButton = document.getElementById("btn");
////////////////////////////////////////////////////
function movieSearch(movie) {
  let gallery = document.getElementById("gallery");

  let searchedTitle = document.getElementById("title").value;
  let searchedActor = document.getElementById("actor").value;

  let filterTitleSearch = movie.filter((movie) =>
    movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
  );

  console.log(filterTitleSearch);

  let filterActorSearch = movie.filter((movie) =>
    movie.cast.some((castMember) =>
      castMember.toLowerCase().includes(searchedActor)
    )
  );
  let filterCard = document.createElement("div");
  filterCard.classList.add("myFilterCard");
  filterCard.innerHTML = `<div class = "title"> Title: ${movie.title}</div> 
<img width="250px" src=${movie.imageUrl}>
<div> Year: ${movie.year}</div>
<div> Cast: ${movie.cast}</div>`;
  

  gallery.append(filterCard)
  return filterTitleSearch && filterActorSearch;
}
searchButton.addEventListener("click", function () {
  display = "";
  // movieSearch(combinedMovieDataSet);
  movieCard(movieSearch(combinedMovieDataSet));
});

movieCard(combinedMovieDataSet);
