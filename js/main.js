const movieContainer = document.getElementById("movieContainer");
const movieFilter = document.getElementById("movieFilter");
let movieAllArray = [];

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
    movieImg.addEventListener("click", () => {
        sessionStorage.setItem("selectedmovie", JSON.stringify(movie));
        window.location.href = "http://127.0.0.1:5500/pages/details.html";
    });
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
movieFilter.addEventListener("change", function () {
    let selectedGenre = this.value;
    filterByGenre(selectedGenre);
});

const allOption = document.createElement("option");
allOption.innerText = "All movies";
movieFilter.appendChild(allOption);

function filterByGenre(movieToFilter) {
    let movieFilteredArray = [];
    if (movieToFilter === "All movies") {
        movieFilteredArray = [...movieAllArray];
    } else {
        for (const movie of movieAllArray) {
            if (movie.genre === movieToFilter) {
                movieFilteredArray.push(movie);
            }
        }
    }

    movieContainer.innerHTML = "";
    for (const movie of movieFilteredArray) {
        displayMovie(movie);
    }
}

filterByGenre();

function moviesToDropDown() {
    let genres = new Set(movieAllArray.map((movie) => movie.genre));

    for (const genre of genres) {
        const movieGenreOption = document.createElement("option");
        movieGenreOption.innerText = genre;
        movieFilter.appendChild(movieGenreOption);
    }
}
