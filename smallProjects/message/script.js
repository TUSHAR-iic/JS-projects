let message = document.getElementById('messages');
let textbox = document.getElementById('textbox');
let button = document.getElementById('send');

button.addEventListener("click",function(){

    // we have created a new html element using js createElement()

    var newMessage = document.createElement("li");
    newMessage.style = "list-style-type: none";
    // herewe store the value in input boc to new element's html
    newMessage.innerHTML = textbox.value ;

    // here we use append to append the changes in <ul>
    message.appendChild(newMessage);

    // to leave the input value blank we us this
    textbox.value = "";

});