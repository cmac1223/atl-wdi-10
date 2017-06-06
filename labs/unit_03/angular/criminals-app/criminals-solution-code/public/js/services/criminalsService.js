angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);


angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);
CriminalsService.$inject = ['$http'];
function CriminalsService($http) {
    console.log('testing');
    var self = this;
    self.getCriminals = function () {
        return $http.get('/criminals')
    };
}






// CriminalsController.$inject = ['CriminalsService'];
  
// function CriminalsController(CriminalsService){
  
//   var vm = this;
  
//   vm.all = [];
//   vm.newCriminal = {};
//   vm.addCriminal = addCriminal;
//   vm.deleteCriminal = deleteCriminal;
//    CriminalsService.getCriminals();
// }
//   function addCriminal(){
//     $http
//       .post('/criminals', vm.newCriminal)
//       .then(function(response){
//         getCriminals();
//     });
//     vm.newCriminal = {};
//   }
//   function deleteCriminal(criminal){
//     $http
//       .delete("/criminals/" + criminal._id)
//       .then(function(response){
//         var index = vm.all.indexOf(criminal);
//         vm.all.splice(index, 1);
//       });
//   }