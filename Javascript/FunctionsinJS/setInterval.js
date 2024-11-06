function time(){
    var date =new date();
    document.getElementById("time").innerHTML = date.tolocalTimeString();
}
setInterval(time,1000);
