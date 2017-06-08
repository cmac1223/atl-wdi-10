console.log("Quotes Controller Works!");
QuotesController.$inject = ['QuotesService'];
console.log('Testing before QuotesController fxn');

function QuotesController(QuotesService) {
    console.log('Testing inside of the QuotesController fxn')
    const vm = this;
    vm.randomQuote = {};
    vm.getQuote = getQuote;
    vm.quote = '';
    vm.saveQuote = saveQuote;
    vm.message = 'hello';
    vm.favoriteQuotes = [];
    

    function getQuote(){
        QuotesService.getQuote()
            .then(function resolve(response){
                vm.randomQuote = response.data[0]
                
            });
    }
    function saveQuote(){
        QuotesService.saveQuote(vm.quote).then(function resolve(response){
            console.log(response);
            vm.favoriteQuotes.push(vm.quote);
        })
    }
}
console.log(QuotesController);
//console.log(QuotesService)

module.exports = QuotesController;

//Your QUOTES CONTROLLER HERE!

// QuotesController.$inject = ['QuotesService'];
// function QuotesController(QuotesService) {
//     const vm = this;
//     vm.getQuote = getQuote;
//     vm.quote = '';
//     vm.favoriteQuotes = [];
//     vm.saveQuote = saveQuote;
//     // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
//     // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
//     activate();
//     function activate() {
//     }
//     // HOW IT DOES STUFF
//     function getQuote() {
//         QuotesService.getQuote()
//             .then(function resolve(response) {
//                 vm.quote = response.data[0]
//             });
//     }
//     function saveQuote() {
//         QuotesService.saveQuote(vm.quote).then(function resolve(response) {
//             console.log(response);
//             vm.favoriteQuotes.push(vm.quote);
//         })
//     };
// };
// module.exports = QuotesController;