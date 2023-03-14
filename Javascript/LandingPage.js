const APIURL = "https://yts.mx/api/v2/list_movies.json?quality=3D";
let moviesArray;
const imgPath = "https://yts.mx/assets/images/movies/";
const main = document.querySelector("main");
async function getAPI() {
    try {
        const res = await fetch(APIURL).then((value1) => {
            return value1.json()
        }).then((value2) => {
            // console.log(value2)
            return value2;
        })
        moviesArray = res.data.movies;
        console.log(moviesArray);
        getAllMovies(moviesArray);
    } catch (error) {
        console.log(error)
    }
}




function getAllMovies(movie) {
    console.log("Inside ", movie);
    movie.forEach((element) => {
        let { title } = element;
        title = title.replace(/^["'](.+(?=["']$))["']$/, '$1');
        const div = document.createElement("div");
        div.classList.add("movie");
        // console.log(element.id)
        div.innerHTML = `
            <div class="movie-card" onclick={handleNextPage(${element.id})}>
                <img src="${element.medium_cover_image}" alt=""/>
                    <div class="movie-info">
                    
                        <h3>${title.substring(0, 15)}</h3>
                        <h5>${element.rating}</h5>
                    </div>
            </div>
    `;
        main.appendChild(div);
    });


}
getAPI();


function handleNextPage(id) {
    let list = JSON.parse(localStorage.getItem("movie"));
    let idValue = { id };
    localStorage.setItem("movie", JSON.stringify(idValue));
    location.replace("../html/MovieDetails.html");

}