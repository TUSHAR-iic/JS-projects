<<<<<<< HEAD
// alert('hello ji')
let number = document.getElementById('num');
let count = 0;
setInterval(() =>{
    if (count == 65){
        clearInterval();
    }
    else{
    count ++;
    number.innerHTML = count + "%";
    }
=======
// alert('hello ji')
let number = document.getElementById('num');
let count = 0;
setInterval(() =>{
    if (count == 65){
        clearInterval();
    }
    else{
    count ++;
    number.innerHTML = count + "%";
    }
>>>>>>> origin/master
},30);