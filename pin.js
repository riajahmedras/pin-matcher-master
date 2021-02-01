function pinMatcher(){
   var random = Math.random(  )*10000;
   const pin = (random + " ").split('.')[0];
   if(pin.length === 4){
      return pin;
   }
   else{
      return pinMatcher();
   }
}
function genaratePin(){
   var pinId = document.getElementById("showPin");
   pinId.value = pinMatcher();
}
// calculator button bubble event
var buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function(event){
   var typingNumber = event.target.innerText;
   if(isNaN(typingNumber)){
      // handle backspace
      // handle clear
   }else{
      var typingBox = document.getElementById('typeing-box');
      typingBox.value = typingBox.value + typingNumber;
   }
})
function checkPin(){
   var pin = document.getElementById("showPin").value;
   var typedPin = document.getElementById('typeing-box').value;
   if(pin === typedPin){
      document.getElementById("for-correct").style.display = 'block';
   }else{
      document.getElementById("for-incorrect").style.display = 'block';
   }
}
