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


function changeStarRating(grade){
    for (let i = 1; i <= 5; i++) {
        let star = document.getElementById("star" + i);
        if (i <= grade) {
            star.classList.add("filled");
        }
        else
        {
            star.classList.remove("filled")
        }
    }
}
for (let i = 1; i <= 5; i++) {
    let star = document.getElementById("star" + i);
    star.addEventListener("click", () =>{
        changeStarRating(i);
    });
    
}


renderMovie(movieData);
changeStarRating(2);