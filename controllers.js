var myApp = angular.module('materialApp', ['ngMaterial' , 'ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when("/", {
    controller: 'logicController',
    templateUrl: 'viewtemplate.html'
  });
  $routeProvider.otherwise({redirectTo: '/'});
});


myApp.factory('dataFactory',  function(){
  var factory = {};
  var dataset = [{name:'avin' , img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/8255-200.png' , about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'} , 
  {name:'apoorv' , img: 'http://megaicons.net/static/img/icons_sizes/189/462/256/comics-mask-icon.png' , about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {name:'rajat' , img: 'http://rs306.pbsrc.com/albums/nn274/xX-EmO-AduSh-Xx/Me%20AnD%20FriEnDs/PoKeMon%20xD/pikachu.jpg~c200', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {name:'pratik' , img: 'https://static1.squarespace.com/static/52f174dde4b08a02b160afe4/t/52f7d3ade4b04cffe232f907/1391973294003/avatar.png', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {name:'Akash Todi' , img: 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {name:'Somesh' , img: 'http://findicons.com/files/icons/1072/face_avatars/300/g04.png', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}];
  
factory.getDataSet = function(){
  return dataset;
}

factory.addData = function(uname , uimg){
  dataset.push({name: uname , img: uimg , about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'});
}

  return factory;
});

myApp.controller('sidenavcontroller', function($scope , $mdSidenav ){
  $scope.navDrawer = function(){
  $mdSidenav('left')
    .toggle();
  };
});
myApp.controller('logicController' , function($scope,$rootScope , dataFactory){

$scope.dataset = dataFactory.getDataSet();
  $rootScope.currentUser = $scope.dataset[0];

  $scope.changeUser = function(index){
    console.log("index"+index);
    var getIndex = parseInt(index);
    $rootScope.currentUser = $scope.dataset[index];
  }

  $scope.addUser = function (){
    $scope.dataset.push();
  }
});

myApp.controller('dialogController' , function($scope , $mdDialog , dataFactory){
    $scope.openDialog = function(ev){
      $mdDialog.show({
      controller: 'dialogController',
      templateUrl: 'dialogview.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    });
    }

    $scope.addUser = function(){
      dataFactory.addData($scope.user.name , $scope.user.image);
    }

});

