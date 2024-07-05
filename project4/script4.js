let hours = document.getElementById("hours");
let min= document.getElementById("min");
let sec = document.getElementById("sec");
// use date method to get current date and time

// let currentTime = new Date();


// this will set the current time but the clock still only show the time it will not updating
// hours.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();

 

// to use update time 

setInterval(()=>{
    let currentTime = new Date();
    // inline if condition
    hours.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();

    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000)