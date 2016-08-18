angular
.module("wdinstagram")
.controller("entriesIndexController", [entriesIndexControllerFunc]);

function entriesIndexControllerFunc(){
  this.entries = dummyData;
}
