import {movieData1, movieData2} from "./data";
import * as angular from "angular";
import {Review} from "./interfaces";
let app = angular.module("reviewApp", []);
app.controller("appController", function(){
    this.movie1 = movieData1;
    this.movie2 = movieData2;
  });
  
  app.component("review", {
    bindings: {
      movie: '<'
    },
  
    controller: class ReviewComponent {
      rating = 0;
      movie: Review;
      changeStarRating(newRating){
        this.rating = newRating;
      }
    },
  
    controllerAs: 'reviewCtrl',
    template: `
    <div class="container">
    <div><img class="poster imgPoster" ng-src="{{reviewCtrl.movie.Image}}"></div>
    <div class="desc">
        <div class="starRating">
            <span ng-repeat="i in [1,2,3,4,5,6,7,8,9,10]" ng-class="{filled: reviewCtrl.rating >= i}" ng-click="reviewCtrl.changeStarRating(i)">&#9733;</span>
        </div>
        <h3 class="Title">{{reviewCtrl.movie.Title}}</h3>
        <p class="Desc">{{reviewCtrl.movie.Desc}}</p>
        <ul class="ul1 Actors">
            <li ng-repeat="item in reviewCtrl.movie.Actors">{{item}}</li>
        </ul>
    </div>
</div>
    `
});