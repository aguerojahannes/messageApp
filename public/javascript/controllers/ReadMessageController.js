angular.module("MessageApp").controller("ReadMessageController", function($http, MessageFactory){
   var vm = this;

vm.readMessages = function(){
   MessageFactory.readMessages().then(function(messages){
      vm.messages = messages;
   });
};
vm.readMessages();

setInterval(function(){vm.readMessages();}, 3000);
})
