    
    import { navbar } from "../components/navbar.js";
    document.getElementById("navbar").innerHTML=navbar();


    var mobile=document.getElementById("mobile")
    mobile.innerText=`OTP send in your mobile no:- ${localStorage.getItem("Mob")}`
    var one=document.getElementById("1").value
    var two=document.getElementById("2").value
    var three=document.getElementById("3").value
    var four=document.getElementById("4").value
    var five=document.getElementById("5").value;
    if(one ==="1"  && two==="2","1","5","3","4" && three==="2","1","5","3","4" && four==="2","1","5","3","4"  && five==="5"){
        alert("you are login")
    }

