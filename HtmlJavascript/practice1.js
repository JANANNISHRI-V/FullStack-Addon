
document.title = "dom"
console.log("Vanakkam")


let h1h= document.getElementById("heading")
console.log("heading")


let h2h= document.getElementById("heading2")
h2h.innerText="dom"

let d1d= document.getElementById("d1")
d1d.innerHTML="<h1>VANAKKAM</h1>"

function contManupulate(){
    let d2d= document.getElementById("d2")
d2d.innerHTML="<h1>VANAKKAM NANBARGALEHH</h1>"
}
setTimeout(contManupulate,3000);

function contManupulate(){
    let h1h=document.getElementById("heading")
    h1h.innerHTML="Doc  Obj  Mod"
}