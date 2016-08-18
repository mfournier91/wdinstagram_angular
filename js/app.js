"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterCallBack
  ]);

function RouterCallBack($stateProvider) {
  console.log("Router callback");
  $stateProvider
  .state("entriesIndex", {
    url:"/entries",
    templateUrl: "js/entries/index.html",
    controller: "entriesIndexController",
    controllerAs: "entriesIndexViewModel"
  })
  .state("entryShow", {
    url: "entry/:id/show",
    templateUrl: "entries/show.html",
    controller: "entriesShowController",
    controllerAs: "entriesShowViewModel"
  });
}

})();
