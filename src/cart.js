var cartData = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cartData);
var total = cartData.reduce(function(sum,ele,ind,arr){
    return sum+Number(ele.price);
},0)
console.log(total);
var length = cartData.length;
console.log(length);
document.querySelector("#result").innerText = `${length} SELECTED ITEMS TOTAL =>`;

document.querySelector("#botti").innerText = `${total}`;

cartData.map(function(ele,ind){
    var disp = document.createElement("div");
    var box = document.createElement("div");
     box.style.height = "230px"
     box.style.width = "150px";
     box.style.boxShadow =  " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
    var img = document.createElement("img");
    img.src = ele.image;
    img.style.width = "100%";
    img.style.height = "80px";
    var price = document.createElement("p");
    price.innerText = ele.price;
    var title = document.createElement("p");
    title.innerText = ele.title;
    title.style.marginTop = "-7px";
    title.style.letterSpacing = "-1px";
    title.style.textAlign = "center";
    var rate = document.createElement("p");
    rate.innerText = ele.rate;
    var box1 = document.createElement("div");
    box1.append(price,rate);
    box1.style.display = "flex";
    box1.style.marginTop = "-1px";
    box1.style.justifyContent = "space-around";
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.marginLeft = "30px";
    btn.style.backgroundColor = "yellow";
    btn.style.border = "1px solid grey";
    btn.style.borderRadius = "10px"
    btn.style.cursor = "pointer";
    btn.style.width = "70px";
    btn.style.height = "30px"
    btn.addEventListener("click",function(){
        removeItem(ele,ind);
    })

    box.append(img,box1,title,btn);
    document.querySelector("#forth").prepend(box);
})

function removeItem(ele,ind){
    console.log(ele,ind);
    cartData.splice(ind,1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
}
var last = document.getElementById("end");
last.style.width = "350px";
last.style.height = "350px";
last.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px";
last.style.margin = "auto";
var detail = document.createElement("p");
detail.innerText = "PRICE DETAILS (1 Items)";
detail.style.color = "grey";
var box1 = document.createElement("div");
var mrp = document.createElement("p");
mrp.style.color = "grey";
mrp.innerText = "Total MRP";
var TOTAL = document.createElement("p");
TOTAL.innerText = `₹ ${total}`;
box1.append(mrp,TOTAL);
box1.style.display = "flex";
box1.style.justifyContent = "space-between";
box1.style.marginTop = "-9px";
var box2 = document.createElement("div");
var p1 = document.createElement("p");
p1.innerText = "Discount on MRP";
p1.style.color = "grey";
var p2 = document.createElement("p");
p2.innerText = `₹ ${(total/2)*(100)}`;
p2.style.color = "green"
box2.append(p1,p2);
box2.style.display = "flex";
box2.style.justifyContent = "space-between";
box2.style.marginTop = "-9px";
var p3 = document.createElement("p");
p3.innerText = "Coupon Discount";
p3.style.color = "grey";
var p4 = document.createElement("p");
p4.innerText = "Apply Coupon";
p4.style.color = "red";
var box3 = document.createElement("div");
box3.append(p3,p4);
box3.style.display = "flex";
box3.style.justifyContent = "space-between";
box3.style.marginTop = "-9px";
var p5 = document.createElement("p");
p5.innerText = "Convenience Fee";
p5.style.color = "grey";
var p6 = document.createElement("p");
p6.innerText = "Know More";
p6.style.color = "red";
var p7 = document.createElement("p");
p7.innerText = "₹ 99 FREE";
p7.style.color = "green";
p7.style.marginLeft = "70px";
p7.style.textDecoration = "line-through";
var box4 = document.createElement("div");
box4.append(p5,p6,p7);
box4.style.display = "flex";
box4.style.gap = "10px";
box4.style.marginTop = "-9px";
var p8 = document.createElement("p");
p8.innerText = "Total Amount";
p8.style.fontSize = "20px"
var p9 = document.createElement("p");
p9.innerText = `${total}`;
var box5 = document.createElement("div");
box5.append(p8,p9);
box5.style.display = "flex";
box5.style.justifyContent = "space-between";
box5.style.marginTop = "-9px";
var btn1 = document.querySelector("#other")
// function changepathtologin()

// btn1.innerText = "PLACE ORDER";
btn1.style.width = "360px";
btn1.style.height = "50px";
btn1.style.cursor = "pointer";




document.querySelector("#end").append(detail,box1,box2,box3,box4,box5,btn1);
