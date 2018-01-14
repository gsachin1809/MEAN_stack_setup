/*
 |  File Config.js contents the configuration related to
 |  Application
 |
 */

angular.module('pms')
.config(function($stateProvider, $urlRouterProvider,lockerProvider){

  //Defalult config for locker
  lockerProvider.defaults({
      driver: 'local',
      namespace: 'pms',
      separator: '.',
      eventsEnabled: true,
      extend: {}  
  });

  $stateProvider.state('login',{
    url:'/login',
    'views':{
      'root_view':{
        templateUrl:'login.html',
        controller:'LoginController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
