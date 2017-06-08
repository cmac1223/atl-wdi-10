angular
	.module('RonSwansonApp')
	.service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

 function QuotesService($http){
     const self = this;
     self.getQuote = function (){
         return $http.get(' http://ron-swanson-quotes.herokuapp.com/v2/quotes ')
            .then(function (response){
                return response;
            });

     }
     // come back and finished this later I'm about to start on my back end 
     //show all
	
		self.saveQuote = function (quoteToSave){
            return $http.post('/quotes', {quote: quoteToSave})
        };
	

 }

//  angular.module('RonSwansonApp')
//   .service('QuotesService', QuotesService);
// QuotesService.$inject = ['$http'];
// function QuotesService($http) {
//   console.log("QuotesService ready for action!");
//   const self = this;
//   self.getQuote = function () {
//     return $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//       .then(function (response) {
//         return response;
//       });
//   }
//   self.saveQuote = function (quoteToSave) {
//     return $http.post('/quotes', {quote: quoteToSave})
//   };