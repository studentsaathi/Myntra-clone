import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    let mob= document.getElementById("user").value;
    console.log(mob);
    localStorage.setItem("Mob",mob)

    if(mob.length>"10"){
        alert("please enter valid mobile number")
    }

})