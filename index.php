<html ng-app = "materialApp">
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
  <script type="text/javascript" src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
  <script type="text/javascript" src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.js"></script>
  
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
  
  <!-- Your application bootstrap  -->
  <script type="text/javascript" src = 'controllers.js'>    
    /**
     * You must include the dependency on 'ngMaterial' 
     */
    
  </script>
  <title>Material Angular</title>
</head>
<body layout = "column" ng-controller = "sidenavcontroller">
  <md-toolbar layout = "row" md-scroll-shrink md-shrink-speed-factor="0.5" style="min-height: 70px">
    <md-button hide-gt-sm ng-click="navDrawer()" angular-aria = "" aria-label = "">
      <img src = "http://atayeshe.com/wp-content/uploads/2016/03/iconmonstr-menu-6-icon-256.png" height="50" width="50">
    </md-button>
   <!--  <h2 layout-padding flex = "100" layout-align="center">UserApp</h2>-->
   <span layout-padding flex = "100" layout-align="center"><font size="5">UserApp</font></span>
    <md-button angular-aria = "" aria-label = "">
      <img ng-controller="dialogController" src = "https://cdn3.iconfinder.com/data/icons/musthave/128/Add.png" height="50" width="50" ng-click="openDialog($event)">
    </md-button>
  </md-toolbar>


  
  <div layout = "row" ng-controller = "logicController">
    <md-sidenav style="overflow: auto;" md-component-id="left" style="height: 100%;" md-is-locked-open="$mdMedia('gt-sm')" flex class = "md-whiteframe-z2">
      

        <input type="text" ng-model="user.name" placeholder = "search" layout-padding >
      
      <md-list>
       <md-list-item class="md-2-line" ng-repeat="d in dataset | filter: {name: user.name}">
       <md-button layout = "row" ng-click="changeUser($index); navDrawer()" flex>
        <img flex="2" src="{{d.img}}" height = "50" width = "50"  alt="image">
        <p layout-padding> {{d.name}}</p>
      </md-button>
      <md-divider></md-divider> 
       </md-list-item>

      </md-list>
    </md-sidenav>
    

    <md-content layout-padding flex>
     <div ng-view>
     </div>
    </md-content>

  </div>
</body>
</html>