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
    controller: "entriesIndexViewModel"
  })
  .state("entryShow"{
    url: "entry/:id/show",
    templateUrl: "entries/show.html",
    controller: "entriesShowController",
    controllerAs: "entriesShowViewModel"
  });
}

})();
