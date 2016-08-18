"use strict";

(function(){
  angular.module("wdinstagram", ['ui.router'])
  .config(["$stateProvider", RouterCallBack]);

function RouterCallBack($stateProvider){
  $stateProvider
  .state("entriesIndex" {
    url:"/entries",
    templateUrl: "entries/index.html",
    controller: "entriesIndexController",
    controller: "enteriesIndexViewModel"
  })
  .state("enteryShow"{
    url: "entery/:id/show",
    templateUrl: "enteries/show.html",
    controller: "enteriesShowController",
    controllerAs: "enteriesShowViewModel"
  });
}

})();
