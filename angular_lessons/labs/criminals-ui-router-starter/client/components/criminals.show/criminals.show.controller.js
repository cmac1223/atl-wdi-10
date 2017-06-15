CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	// we set the vm.current = {}
	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				//with the Service we assign response.data.criminal to vm.current
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;
