angular
	.module('RonSwansonApp')
	.service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

 function QuotesService($http){
     const self = this;
     self.getQuote = getQuote;
     // come back and finished this later I'm about to start on my back end 
     //show all
	function getQuote() {
		return $http.get(' http://ron-swanson-quotes.herokuapp.com/v2/quotes ');
	}

 }