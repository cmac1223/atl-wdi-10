angular.module('thePresidentsApp')
  .controller('PresidentsController', PresidentsController);

<<<<<<< HEAD
//function PresidentsController(){
//this.all = []:
// { name: 'George Washington', start: 1789, end: 1797 },
// { name: 'John Adams', start: 1797, end: 1801 },
// { name: 'Thomas Jefferson', start: 1801, end: 1809 },
// { name: 'James Madison', start: 1809, end: 1817 }
// }

PresidentsController.$inject = ['$http'];


function PresidentsController($http) {
  var vm = this;
  vm.all = [];
  vm.addPresident = addPresident;
  vm.newPresident = {};
  vm.removePresident = removePresident;

  function getPresidents() {
    $http
      .get('/presidents')
      .then(function (response) {
        console.log(response.data);
        vm.all = response.data.presidents;
      });
=======
function PresidentsController(){
  this.all = [
    { name: 'George Washington', start: 1789, end: 1797 },
    { name: 'John Adams', start: 1797, end: 1801 },
    { name: 'Thomas Jefferson', start: 1801, end: 1809 },
    { name: 'James Madison', start: 1809, end: 1817 }
  ];

  this.addPresident = addPresident;
  this.newPresident = {};

  function addPresident(){
    this.all.push(this.newPresident);
    this.newPresident = {};
>>>>>>> 954916ee73cd9f5e0a2a81ccb36ba74303f58d11
  }

  getPresidents();

  //CREATE PRESIDENT
  function addPresident() {
    $http
      .post('/presidents', vm.newPresident)
      .then(function (response) {
        if (vm.newPresident) {
          vm.all.push(response.data.president);
          vm.newPresident = {};
          console.log(response.data)
        }

        console.log(vm.newPresident)
      })


  };

  //DELETE PRESIDENT
  function removePresident(deletedPresidentId) {
    console.log(deletedPresidentId);
    $http
      .delete('/presidents/' + deletedPresidentId)
      .then(function (response) {
        getPresidents();
      })
  }

};



