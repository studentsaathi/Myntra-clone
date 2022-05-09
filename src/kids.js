import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let ads=[
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg"}
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