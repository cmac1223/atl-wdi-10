//standard boilerplate -use the title of the angular app
angular.module('InfamousCriminals', [])
    //name the controller
    .controller('CriminalsController', CriminalsController);
//telling the app that we are using $http, and this allows us to use it inside the controller
CriminalsController.$inject = ['$http']

//this begins the criminals controller - everything (routes) will go inside of this
function CriminalsController($http) {
    var vm = this;
    vm.all = [];
    vm.addCriminal = addCriminal;
    vm.updateCriminal = updateCriminal;
    vm.removeCriminal = removeCriminal;
    vm.newCriminal = {};
    // get (url, [config]);    
    function getCriminals() {
        $http
            .get('/criminals')
            .then(function (response) {
                vm.all = response.data.criminals;
            })
    };
    getCriminals();

    // create criminals
    function addCriminal() {
        console.log('linking submit to function')
        $http
            .post('/criminals', vm.newCriminal)
            .then(function (response) {
                if (vm.newCriminal)
                    vm.all.push(response.data.criminal);
                console.log(vm.newCriminal);
                vm.newCriminal = {};
                console.log(vm.newCriminal);
                console.log(vm.all);

            })
    };

    function updateCriminal(criminal) {
        console.log('updateCriminal is called')
        $http
            .patch('/criminals/' + criminal._id, criminal)
            .then(function (response) {
                criminal.isEditing = false
            });
    };

    function removeCriminal(criminalId){
        console.log(criminalId);
        $http
            .delete('/criminals/' + criminalId)
            .then(function (response) {
                getCriminals();
            })
    }

}
