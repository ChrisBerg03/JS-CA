async function fetchData() {
    const reponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
    const result = await reponse.json();
    console.log(result);
    return result;
}

fetchData();
