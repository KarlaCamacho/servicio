angular.module("serviceApp",[])
.controller('mainCtrl', function($scope){
	$scope.holla = function(){
		console.log("Hola mundo");
	};
	
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
});