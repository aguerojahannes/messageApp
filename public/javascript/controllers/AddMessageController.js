angular.module('MessageApp').controller('AddMessageController', function($http, $state, MessageFactory) {
   var vm = this;
   vm.messages = {};

   vm.addMessage = function(){
      MessageFactory.addMessage(vm.messages);
   console.log("YAYYY!");
      }
   }
);
