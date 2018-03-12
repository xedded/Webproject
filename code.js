function renderMovie(movie){
    document.getElementsByClassName("Title")[0].innerText = movie.Title;
    document.getElementsByClassName("Desc")[0].innerText = movie.Desc;


    let actorList ="";
    for (let index = 0; index < movie.Actors.length; index++) {

        actorList += "<li>" + movie.Actors[index] + "</li>";
        
    }
    document.getElementsByClassName("Actors")[0].innerHTML = actorList;
        
    document.getElementsByClassName("Poster")[0].setAttribute("src", movie.Image);
}

renderMovie(movieData);