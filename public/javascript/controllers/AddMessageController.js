   angular.module('MessageApp').controller('AddMessageController', function($http, $state, MessageFactory) {
   var vm = this;
   vm.messages = {};

vm.group =[
   { name: "Pearl",
   image: "https://material.angularjs.org/0.11.2/img/washedout.png",
   color:""
},
{ name: "Yisel",
   image: "",
   color:""},

   { name: "Ana",
   image: "",
   color:""}
]
   vm.addMessage = function(){
      MessageFactory.addMessage(vm.messages);
   console.log("YAYYY!");
      }
   }
);
