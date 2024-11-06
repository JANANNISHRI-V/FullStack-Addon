function handleRegister(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value

let userDetails;
let arr=[];
if(!user){
 alert("Enter your name.");
}
    else if(!pass){
    alert("enter your password.");
}
    else{
    userDetails={
        Name:user,
        Password:pass 
    }

    let arrobj = localStorage.getItem("userDetails");

    
    if(arrobj){
        arrobj=JSON.parse(arrobj);
        arr=arr.concat(arrobj);
        arr.push(userDetails);
        localStorage.setItem("userDetails",JSON.stringify(arr));

    }
    else{
        localStorage.setItem("userDetails",JSON.stringify([userDetails]));
    }
    // window.location.href="/HtmlJavascript/practice2login.html"
    window.location.replace("http://127.0.0.1:5500/HtmlJavascript/practice2login.html")  
}
}
function handleLogin(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value
    let arr=[];
    if(!user){
        alert("Enter your name.");
       }else if(!pass){
           alert("enter your password.");
       }else{
            let arrobj = localStorage.getItem("userDetails");
            arrobj=JSON.parse(arrobj);
            let correctName = false;
            let correctPass = false;

            arrobj.map((value)=>{
                if(value.Name==user){
                    correctName = true;
                    if(value.Password==pass){
                        correctPass = true;
                    }}
                
            })
                if(correctName && correctPass){
                    alert("Login Success");
                }else if(correctName){
                    alert("enter correct password");
                }else{
                    alert("enter correct name");
                }
            }
        }




    // arrow function
// let newfunc =()=>{

// }