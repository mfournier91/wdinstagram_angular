angular
.module("wdinstagram")
.controller("entriesShowController", [
  "$stateParams",
  entriesShowControllerFunction
]);

function entriesShowControllerFunction($stateParams){
  console.log($stateParams);
  entry= dummyData[$stateParams.id]
  var vm = this
  vm.entry = entry
}
