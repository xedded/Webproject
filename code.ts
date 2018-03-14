import * as $ from "jquery";
import {movieData} from "./data";
import { Review } from "./interfaces";
// let movieData = require("./data");

function renderMovie(data: Review) {
    $(".Title").text(data.Title);
    $(".Desc").text(data.Desc);
    $(".Actors").empty();
    for  (let index = 0; index < data.Actors.length; index++) {

        $(".Actors").append("<li>" + data.Actors[index] + "</li>");

    }
    $(".Poster").attr("src", data.Image);
}

function changeStarRating(grade) {
    $(".filled").removeClass("filled");
    for (let i = 1; i <= grade; i++) {
        $("[data-rating-id=" + i + "]").addClass("filled");

    }
}
$(".starRating").on("click", "span", (e) => {

    const star = $(e.target);

    const rating = parseInt(star.attr("data-rating-id"));

    changeStarRating(rating);

});

renderMovie(movieData);
// changeStarRating(2);
