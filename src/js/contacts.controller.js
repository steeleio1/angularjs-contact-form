function ContactController ($scope,SERVER,$http) {

  $scope.contacts=[];


  init();

	  function init () {
	    $http.get(SERVER.URL).then( (res) => {
	      $scope.contacts = res.data;
	       $scope.gif = {};
	    });
	  }


	  $scope.addContact = (contact) => {
	  	$http.post(SERVER.URL, contact).then( (res) => {
			// $scope.contact
			console.log(contact)
			$scope.contacts.unshift(contact);
	  });  
	}

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id).then( (res) => {
      $scope.contacts = $scope.contacts.filter( (contact) => {
        return contact._id !== id;
      });
    });
  };



}

ContactController.$inject = ['$scope', 'SERVER', '$http'];
export {ContactController};