"use strict";

(function(){
angular
  .module("wdinstagram")
  .controller("entriesIndexController", [entriesIndexControllerFunc]);

function entriesIndexControllerFunc(){
  console.log("Controller invoked");
  var vm = this;
  vm.entries = dummyData;
}
}());
