import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let ads = [
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg"}
]
let i=0;
let append=document.getElementById("append_ad");
function ad()
{
     append.src=ads[0].img;
    setInterval(function(){
        if(i==ads.length)
        {
            i=0;
        }
        append.src=ads[i].img;
       i++
    }, 5000);
  
}

ad();

import footer  from "../components/footer.js";
document.getElementById("container").innerHTML = footer();