function renderMovie(movie){
    $(".Title").text(movie.Title);
    $(".Desc").text(movie.Desc);
    
    $(".Actors").empty();
    for (let index = 0; index < movie.Actors.length; index++) {
        
        $(".Actors").append("<li>" + movie.Actors[index] + "</li>");
        
    }
    $(".Poster").attr("src", movie.Image);        

}


function changeStarRating(grade){
 
        $(".filled").removeClass("filled");
        for (let i = 1; i <= grade; i++) {
            $("[data-rating-id=" + i + "]").addClass("filled");
            
        }
    
}
$(".starRating").on("click", "span", function(e){

    let star = $(e.target);
  
    let rating = parseInt(star.attr("data-rating-id"));
  
    changeStarRating(rating);
  
  });

 



renderMovie(movieData);
//changeStarRating(2);