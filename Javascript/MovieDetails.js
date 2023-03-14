let id;

async function getAPI() {
    try {
        let list = JSON.parse(localStorage.getItem("movie"));
        id = (list.id);
        const APIURL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        // id = id.toString();
        console.log(typeof (id));
        const res = await fetch(APIURL).then((response) => {
            return response.json()
        }).then((response) => {
            return response;
        });

        getMovieDetails(res.data.movie);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
getAPI();

function getMovieDetails(movie) {
    console.log(movie);
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
                <div class="movie-card"}>
                    <img src="${movie.large_cover_image
        }" alt=""/>
                        <div class="movie-info">
                        <h3>Title::  ${movie.title.substring(0, 15)}</h3>
                        <h5><span >Description</span>${movie.description_full}</h5>
                    </div>
            </div>
`;
    document.querySelector("main").appendChild(div);

}

function handlePage(){
    location.replace("./MovieLandingPage.html")
}