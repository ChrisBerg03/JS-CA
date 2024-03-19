const selectedMovie = JSON.parse(sessionStorage.getItem("selectedMovie"));
const movieContainer = document.getElementById("movieContainer");
const moviePurchseBTN = document.createElement("button");
const key = "myCart";
let movieCart = JSON.parse(sessionStorage.getItem(key)) || [];

home.addEventListener("click", function () {
    document.location.href = "/index.html";
});
movies.addEventListener("click", function () {
    document.location.href = "/index.html";
});
cart.addEventListener("click", function () {
    document.location.href = "/pages/checkout.html";
});

displayMovie(selectedMovie);
function displayMovie(movie) {
    const movieList = document.createElement("li");
    const movieTextContainer = document.createElement("li");
    const movieImg = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const movieDescription = document.createElement("p");
    const movieGenre = document.createElement("p");
    const movieRating = document.createElement("p");
    const movieRelease = document.createElement("p");
    const moviePrice = document.createElement("p");
    movieTitle.classList.add("movieTitle");
    movieDescription.classList.add("movieDescription");
    moviePurchseBTN.classList.add("moviePurchaseBTN");
    movieImg.src = movie.image;
    movieImg.classList.add("movieImage");
    movieTitle.innerText = "Title: " + movie.title;
    movieDescription.innerText = movie.description;
    movieGenre.innerText = "Genre: " + movie.genre;
    movieRating.innerText = "Rating: " + movie.rating;
    movieRelease.innerText = "Released: " + movie.released;
    moviePrice.innerText = "Price: " + movie.price + " kr";
    moviePurchseBTN.innerText = "Purchase Movie";
    movieContainer.appendChild(movieList);
    movieContainer.appendChild(movieTextContainer);
    movieList.appendChild(movieImg);
    movieTextContainer.appendChild(movieTitle);
    movieTextContainer.appendChild(movieDescription);
    movieTextContainer.appendChild(movieGenre);
    movieTextContainer.appendChild(movieRating);
    movieTextContainer.appendChild(movieRelease);
    movieTextContainer.appendChild(moviePrice);
    if (movie.onSale === true) {
        const movieSaleImg = document.createElement("img");
        const movieDiscountPrice = document.createElement("p");
        movieDiscountPrice.innerText = movie.discountedPrice;
        movieSaleImg.classList.add("movieSale");
        movieSaleImg.src = "../assets/images/sale.png";
        movieList.appendChild(movieSaleImg);
        movieTextContainer.removeChild(moviePrice);
        movieDiscountPrice.innerText =
            "Price: " + movie.discountedPrice + " kr";
        movieDiscountPrice.classList.add("moviePrice");
        movieTextContainer.appendChild(movieDiscountPrice);
    }
    movieTextContainer.appendChild(moviePurchseBTN);
}

moviePurchseBTN.addEventListener("click", function () {
    const movieExistsInCart = movieCart.some(
        (cartItem) => cartItem.id === selectedMovie.id
    );
    if (movieExistsInCart) {
        movieCart = movieCart.filter(
            (cartItem) => cartItem.id !== selectedMovie.id
        );
    } else {
        movieCart.push(selectedMovie);
    }
    sessionStorage.setItem(key, JSON.stringify(movieCart));
});
