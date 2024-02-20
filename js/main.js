const movieContainer = document.getElementById("movieContainer");
const movieFilter = document.getElementById("movieFilter");
let movieAllArray = [];
let movieFilteredArray = [];

// fetch the data and parse it to json
async function fetchData() {
    const reponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
    const result = await reponse.json();

    movieAllArray.push(...result);

    for (const movie of movieAllArray) {
        displayMovie(movie);
    }
    moviesToDropDown();
    console.log(movieAllArray);
}
// calling the fetched data
fetchData();

// displaying the images
function displayMovie(movie) {
    const movieList = document.createElement("li");
    const movieImg = document.createElement("img");
    movieImg.src = movie.image;
    movieImg.classList.add("movieImage");
    movieContainer.appendChild(movieList);
    movieList.appendChild(movieImg);
    if (movie.onSale == true) {
        const movieSaleImg = document.createElement("img");
        movieSaleImg.classList.add("movieSale");
        movieSaleImg.src = "./assets/images/sale.png";
        movieList.appendChild(movieSaleImg);
    } else {
    }
}

function moviesToDropDown() {
    for (const movie of movieAllArray) {
        const movieGenreOption = document.createElement("option");
        movieGenreOption.innerText = movie.genre;
        movieFilter.appendChild(movieGenreOption);
    }
}
