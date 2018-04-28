'use strict';

var app = angular.module('app', ['ui.bootstrap']);


app.controller('myCtrl', function($scope, $uibModal) {
	console.log("Init");
	$scope.buttonClicked = function() {
		console.log("Button clicked");
		var modalInstance = $uibModal.open({
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			controllerAs: '$ctrl'
		});
	};

});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
	var $ctrl = this;
	$ctrl.ok = function () {
		console.log("Closing with OK");
		$uibModalInstance.close();
	};

	$ctrl.cancel = function () {
		console.log("Closing with Cancel");
		$uibModalInstance.dismiss('cancel');
	};
});
