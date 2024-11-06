function darkmode(){
    document.body.style.backgroundColor="#A67B5B";
    document.body.style.color="white";
    let button=document.getElementById("button")
    button.innerHTML=`<i class="bi bi-brightness-high-fill"></i>`
    button.innerHTML+="lightmode"
}
function lightmode(){
    document.body.style.backgroundColor="white";
    document.body.style.color="#A67B5B";
    let button=document.getElementById("button")
    button.innerHTML=`<i class="fa-solid fa-moon"></i>`
    button.innerHTML+="darkmode";
}
function modechange(){
    let btext=document.getElementById("button").innerText
    if(btext=="darkmode"){
        darkmode();
    }
    else if(btext=="lightmode"){
        lightmode();
    }

}
document.getElementById("head1").setAttribute("id","head");


document.getElementById("head1").setAttribute("class","heading");
let h2=document.getElementById("head1").getAttribute("class","heading");
console.log(h2);


document.getElementById("head1").style.backgroundColor="brown";
document.getElementById("head1").style.Color="white";


document.getElementById("head1").setAttribute("class","heading");

let  h22=document.getElementById("head1").className="heading";
document.getElementById("head1").classList.add("com-heading")
document.getElementById("head1").classList.remove("heading")
console.log(h22);