console.log("Quotes Controller Works!");
QuotesNewController.$inject = ['QuotesService'];
console.log('Testing before QuotesNewController fxn');

function QuotesNewController(QuotesService) {
    console.log('Testing inside of the QuotesNewController fxn')
    const vm = this;
    vm.randomQuote = {};

    function getQuote(){
        QuotesService
            .get(vm.randomQuote)
            .then(function resolve(response){
                
            })
    }
}

module.exports = QuotesNewController;

//Your QUOTES CONTROLLER HERE!
