const movieContainer = document.getElementById("movieContainer");
const currentCart = JSON.parse(sessionStorage.getItem("myCart"));
const home = document.getElementById("home");
const movies = document.getElementById("movies");
const cart = document.getElementById("cart");
const checkoutContainer = document.getElementById("checkoutContainer");
const removeFromCartBTN = document.getElementById("removeBTN");
let totalSum = 0;

home.addEventListener("click", function () {
    document.location.href = "/index.html";
});

movies.addEventListener("click", function () {
    document.location.href = "/index.html";
});

cart.addEventListener("click", function () {
    document.location.href = "/pages/checkout.html";
});

for (const movie of currentCart) {
    displayMovie(movie);
}
calculateTotal();
displayCheckout();

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
    const movieRemoveBTN = document.createElement("button");
    movieRemoveBTN.innerText = "Remove from cart";
    movieRemoveBTN.classList.add("removeBTN");
    movieTitle.classList.add("movieTitle");
    movieDescription.classList.add("movieDescription");
    movieImg.src = movie.image;
    movieImg.classList.add("movieImage");
    movieTitle.innerText = "Title: " + movie.title;
    movieDescription.innerText = movie.description;
    movieGenre.innerText = "Genre: " + movie.genre;
    movieRating.innerText = "Rating: " + movie.rating;
    movieRelease.innerText = "Released: " + movie.released;
    moviePrice.innerText = "Price: " + movie.price + " kr";
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
    } else {
    }
    movieTextContainer.appendChild(movieRemoveBTN);
}
function calculateTotal() {
    for (const item of currentCart) {
        const { price, discountedPrice } = item;
        totalSum += discountedPrice || price;
    }
    return totalSum;
}
function displayCheckout() {
    const totalSumContainer = document.createElement("h3");
    const buy = document.createElement("button");
    totalSumContainer.innerText = "Your total is: " + totalSum + " kr";
    buy.innerText = "Buy movies";
    checkoutContainer.appendChild(totalSumContainer);
    checkoutContainer.appendChild(buy);
}

removeFromCartBTN.addEventListener("click", function () {});
