angular.module("serviceApp",[])
.controller('mainCtrl', function($scope, dataService){


	$scope.addCustomer = function(){
		var customer = {
			name:"Isaac Alejandro Rodriguez Morales",
			email: "zack_cpp@hotmail.com",
			type: "Afinacion",
			status: "Pendiente"
		};
		$scope.customers.push(customer);
	};
	
<<<<<<< HEAD
	$scope.customers = [
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"status": "Pendiente",
			"tel": "879087098098098"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"status": "Pendiente",
			"tel": "879087098098098"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"status": "Pendiente",
			"tel": "879087098098098"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"status": "Pendiente",
			"tel": "879087098098098"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"status": "Pendiente",
			"tel": "879087098098098"
		}
	]
=======
	$scope.helloConsole = dataService.helloConsole;

	dataService.getCustomers(function(response){
			console.log(response.data);
			$scope.customers = response.data;
		});

	$scope.deleteCustomer = function(customer,$index){
		dataService.deleteCustomer(customer);
		$scope.customers.splice($index,1);
	};

	$scope.saveCustomer = function(customer){
		dataService.saveCustomer(customer);
	}
	
})
.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('This is the hello console service');
	};

	this.getCustomers = function(callback) {
		$http.get('mock/customers.json')
		.then(callback)
	};

	this.deleteCustomer = function(customer) {
		console.log("The customer has been deleted");
		//other logic 
	}; 

	this.saveCustomer = function(customer){
		console.log("The customer has been saved");
	};
>>>>>>> upstream/master
});