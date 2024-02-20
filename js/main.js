const movieContainer = document.getElementById("movieContainer");
const movieAllArray = [];
const movieFilteredArray = [];

// fetch the data and parse it to json
async function fetchData() {
    const reponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
    const result = await reponse.json();

    movieAllArray.push(...result);

    for (const movie of movieAllArray) {
        displayMovie(movie);
    }
    console.log(movieAllArray);
}

fetchData();

function displayMovie(movie) {
    const movieList = document.createElement("li");
    const movieImg = document.createElement("img");
    movieImg.src = movie.image;
    movieList.appendChild(movieImg);
    movieContainer.appendChild(movieList);
}
