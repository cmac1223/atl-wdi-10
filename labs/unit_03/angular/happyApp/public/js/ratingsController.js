angular.module('HappyApp', [])
  .controller('RatingsController', RatingsController);

function RatingsController(){
    this.all = [-1, 0, 1];
    this.newRating;
    this.addRating = addRating;
    function addRating() {
        if (this.newRating != null){
            this.all.push(this.newRating);
            this.newRating = null;   
        }
    }
}