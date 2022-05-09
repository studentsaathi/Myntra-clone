import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let products = async()=>
{
    try
    {
        let res = await fetch("https://fakestoreapi.com/products")
        let data=await res.json();
        appenddata1(data);
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}
products()
let base=document.getElementById("datatobeappended");
let appenddata1=(data)=>
    {
    data.forEach(({title,price,image,rating:{rate}})=>
    {
       let box=document.createElement("div");
       let image1=document.createElement("img");
       let title1=document.createElement("h4");
       let price1=document.createElement("p");
       let rating1=document.createElement("p");
       let cart=document.createElement("button");
       cart.innerText="Add to Cart"
       cart.addEventListener("click",pushtocart)
       box.setAttribute("id","b1")
       image1.src=image;
       image1.setAttribute("id","i1")
       title1.innerText=title;
       price1.innerText="Rs. "+price;
       rating1.innerText="Rating:"+rate;

       box.append(image1,title1,price1,rating1,cart);
        base.append(box);

        function pushtocart()
        {
             let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
             let datatocart={image,title,price,rate};
             cartdata.push(datatocart);
             localStorage.setItem("cart",JSON.stringify(cartdata))
        }

    })
}