"use strict";

(function(){
  angular.module("wdinstagram", ['ui.router'])
  .config(["$stateProvider", RouterCallBack]);

function RouterCallBack($stateProvider){
  console.log("router is working.");
}

})();
