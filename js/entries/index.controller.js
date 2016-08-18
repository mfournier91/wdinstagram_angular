"use strict";

(function(){
angular
  .module("wdinstagram")
  .controller("entriesIndexController", [entriesIndexControllerFunc]);

function entriesIndexControllerFunc(){
  console.log("Controller invoked");
  var dummyData = [{
    photo_url: "http://fillmurray.com/300/200",
    author: "author1",
    body: "body1"
  },
  {
    photo_url: "http://fillmurray.com/300/200",
    author: "author2",
    body: "body2"
  }];
  var vm = this;
  vm.entries = dummyData;
}
}());
