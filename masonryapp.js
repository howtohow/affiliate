//window.onload=()=>{
//    const grid=document.querySelector(".grid");
//    const masonry=new Masonry(grid,{
//          itemSelector:'.grid-item',
//          gutter:10,
//          fitWidth: true,
//          horizontalOrder: false,
//    });
//    masonry.on('layoutComplete',()=>console.log("COMPLETED"))
//    console.log(masonry)
//};
//
//function one(){
//    console.log("one clicked"+masonry);
////    var one=document.getElementsByClassName("one");
////    for(var i=0;i<=one.length;i++){
////        one[i].style.display='none'
////        console.log(one[i]);
////    }
//    masonry.remove('.one');
//}
var navigation = document.getElementById("navigation");
// var maingrid = document.getElementById("grid");
var adarshgrid=document.getElementById("grid");
let masonry;
let grid;
let arr=[]
let arrnew=[]
const imgClasses = new Set();
const arrn = new Set();
let masonryItems;
let arrForTiles=new Set();
var CSSVariables = document.querySelector(':root');
var gutterSize=10;

window.onload=function(){
    if(window.innerWidth<=600){
        gutterSize=0;
    }
    console.log("inside onload")
        grid=document.querySelector(".grid");
        masonry=new Masonry(grid,{
          itemSelector:'.grid-item',
          gutter:gutterSize,
          fitWidth: true,
          horizontalOrder: false,
});  
 changeButtonColor("all");

}
window.addEventListener("scroll",function(e){
if(window.pageYOffset>0){
    navigation.classList.add("changeColor");
}else{
    navigation.classList.remove("changeColor");
}   
})
function changeTiles(n){

masonry.destroy()

for(let i=0;i<  document.getElementsByClassName("grid-item").length;i++){
        document.getElementsByClassName("grid-item")[i].classList.remove("hide")
}
    masonry=new Masonry(grid,{
          itemSelector:'.'+n,
          gutter:gutterSize,
          fitWidth: true,
          horizontalOrder: false,
    });
    
for(let i=0;i<  document.getElementsByClassName("grid-item").length;i++){
    if(document.getElementsByClassName("grid-item")[i].classList[1]!=n){
        document.getElementsByClassName("grid-item")[i].classList.add("hide")
    }
}
changeButtonColor(n)
masonry.layout()
}

function AllTiles(all){
    
masonry.destroy()

for(let i=0;i<  document.getElementsByClassName("grid-item").length;i++){
        document.getElementsByClassName("grid-item")[i].classList.remove("hide")
}

        grid=document.querySelector(".grid");
        masonry=new Masonry(grid,{
          itemSelector:'.grid-item',
          gutter:gutterSize,
          fitWidth: true,
          horizontalOrder: false,
        });
changeButtonColor(all)
    
}

function changeButtonColor(n){
for(let i=0;i<document.getElementsByTagName("a").length;i++){
    if(document.getElementsByTagName("a")[i].attributes.id.value!=n){
        document.getElementById(document.getElementsByTagName("a")[i].attributes.id.value).classList.remove("changeButtonColor")
    }
    else{
        document.getElementById(document.getElementsByTagName("a")[i].attributes.id.value).classList.add("changeButtonColor")
    }
}
}

// TRYING TO ADD NEW DIVS DYNAMICALLY
for(var i=0;i<Electronics_data.search_results.length;i++){
var div=document.createElement("div");
var maindiv=document.createElement("div");
var imgdiv=document.createElement("div");
var mainlink=document.createElement("a");
var img=document.createElement("img");
var descdiv=document.createElement("div");
var productNamenew=document.createElement("div");
var starsnew=document.createElement("div");
var new1=document.createElement("div");
var new1=document.createElement("div");
var new2=document.createElement("div");
var productDescriptionnew=document.createElement("div");

div.appendChild(maindiv);
maindiv.appendChild(imgdiv);
imgdiv.appendChild(mainlink);
mainlink.appendChild(img);
img.src=Electronics_data.search_results[i].image;
mainlink.href=Electronics_data.search_results[i].link;
mainlink.target="_blank";
console.log(img.src)
maindiv.appendChild(descdiv);
descdiv.appendChild(productNamenew);
// productNamenew.textContent="Headphones";
descdiv.appendChild(starsnew);
starsnew.appendChild(new1);
new1.textContent=Electronics_data.search_results[i].price.raw;
new2.textContent="\u2605"+" "+Electronics_data.search_results[i].rating;
starsnew.appendChild(new2);
descdiv.appendChild(productDescriptionnew);
productDescriptionnew.textContent=Electronics_data.search_results[i].title;

div.setAttribute("class","grid-item");
div.classList.add("one");
maindiv.setAttribute("class","maindiv");
imgdiv.setAttribute("class","imgdiv");
mainlink.setAttribute("class","mainlink");
descdiv.setAttribute("class","descdiv");
productNamenew.setAttribute("class","productNamenew");
starsnew.setAttribute("class","starsnew");
new1.setAttribute("class","new1");
new2.setAttribute("class","new2");
productDescriptionnew.setAttribute("class","productDescriptionnew");
if(window.innerWidth<=600){
    div.style.marginBottom=0;
}

adarshgrid.appendChild(div);
}

for(var i=0;i<Kitchen_data.search_results.length;i++){
var div=document.createElement("div");
var maindiv=document.createElement("div");
var imgdiv=document.createElement("div");
var mainlink=document.createElement("a");
var img=document.createElement("img");
var descdiv=document.createElement("div");
var productNamenew=document.createElement("div");
var starsnew=document.createElement("div");
var new1=document.createElement("div");
var new1=document.createElement("div");
var new2=document.createElement("div");
var productDescriptionnew=document.createElement("div");

div.appendChild(maindiv);
maindiv.appendChild(imgdiv);
imgdiv.appendChild(mainlink);
mainlink.appendChild(img);
img.src=Kitchen_data.search_results[i].image;
mainlink.href=Kitchen_data.search_results[i].link;
mainlink.target="_blank";
console.log(img.src)
maindiv.appendChild(descdiv);
descdiv.appendChild(productNamenew);
// productNamenew.textContent="Headphones";
descdiv.appendChild(starsnew);
starsnew.appendChild(new1);
new1.textContent=Kitchen_data.search_results[i].price.raw;
new2.textContent="\u2605"+" "+Kitchen_data.search_results[i].rating;
starsnew.appendChild(new2);
descdiv.appendChild(productDescriptionnew);
productDescriptionnew.textContent=Kitchen_data.search_results[i].title;

div.setAttribute("class","grid-item");
div.classList.add("three");
maindiv.setAttribute("class","maindiv");
imgdiv.setAttribute("class","imgdiv");
mainlink.setAttribute("class","mainlink");
descdiv.setAttribute("class","descdiv");
productNamenew.setAttribute("class","productNamenew");
starsnew.setAttribute("class","starsnew");
new1.setAttribute("class","new1");
new2.setAttribute("class","new2");
productDescriptionnew.setAttribute("class","productDescriptionnew");
if(window.innerWidth<=600){
    div.style.marginBottom=0;
}

adarshgrid.appendChild(div);
}

for(var i=0;i<Men_data.search_results.length;i++){
var div=document.createElement("div");
var maindiv=document.createElement("div");
var imgdiv=document.createElement("div");
var mainlink=document.createElement("a");
var img=document.createElement("img");
var descdiv=document.createElement("div");
var productNamenew=document.createElement("div");
var starsnew=document.createElement("div");
var new1=document.createElement("div");
var new1=document.createElement("div");
var new2=document.createElement("div");
var productDescriptionnew=document.createElement("div");

div.appendChild(maindiv);
maindiv.appendChild(imgdiv);
imgdiv.appendChild(mainlink);
mainlink.appendChild(img);
img.src=Men_data.search_results[i].image;
mainlink.href=Men_data.search_results[i].link;
mainlink.target="_blank";
console.log(img.src)
maindiv.appendChild(descdiv);
descdiv.appendChild(productNamenew);
// productNamenew.textContent="Headphones";
descdiv.appendChild(starsnew);
starsnew.appendChild(new1);
new1.textContent=Men_data.search_results[i].price.raw;
new2.textContent="\u2605"+" "+Men_data.search_results[i].rating;
starsnew.appendChild(new2);
descdiv.appendChild(productDescriptionnew);
productDescriptionnew.textContent=Men_data.search_results[i].title;

div.setAttribute("class","grid-item");
div.classList.add("two");
maindiv.setAttribute("class","maindiv");
imgdiv.setAttribute("class","imgdiv");
mainlink.setAttribute("class","mainlink");
descdiv.setAttribute("class","descdiv");
productNamenew.setAttribute("class","productNamenew");
starsnew.setAttribute("class","starsnew");
new1.setAttribute("class","new1");
new2.setAttribute("class","new2");
productDescriptionnew.setAttribute("class","productDescriptionnew");
if(window.innerWidth<=600){
    div.style.marginBottom=0;
}

adarshgrid.appendChild(div);
}

for(var i=0;i<Games_data.search_results.length;i++){
var div=document.createElement("div");
var maindiv=document.createElement("div");
var imgdiv=document.createElement("div");
var mainlink=document.createElement("a");
var img=document.createElement("img");
var descdiv=document.createElement("div");
var productNamenew=document.createElement("div");
var starsnew=document.createElement("div");
var new1=document.createElement("div");
var new1=document.createElement("div");
var new2=document.createElement("div");
var productDescriptionnew=document.createElement("div");

div.appendChild(maindiv);
maindiv.appendChild(imgdiv);
imgdiv.appendChild(mainlink);
mainlink.appendChild(img);
img.src=Games_data.search_results[i].image;
mainlink.href=Games_data.search_results[i].link;
mainlink.target="_blank";
console.log(img.src)
maindiv.appendChild(descdiv);
descdiv.appendChild(productNamenew);
// productNamenew.textContent="Headphones";
descdiv.appendChild(starsnew);
starsnew.appendChild(new1);
new1.textContent=Games_data.search_results[i].price.raw;
new2.textContent="\u2605"+" "+Games_data.search_results[i].rating;
starsnew.appendChild(new2);
descdiv.appendChild(productDescriptionnew);
productDescriptionnew.textContent=Games_data.search_results[i].title;

div.setAttribute("class","grid-item");
div.classList.add("four");
maindiv.setAttribute("class","maindiv");
imgdiv.setAttribute("class","imgdiv");
mainlink.setAttribute("class","mainlink");
descdiv.setAttribute("class","descdiv");
productNamenew.setAttribute("class","productNamenew");
starsnew.setAttribute("class","starsnew");
new1.setAttribute("class","new1");
new2.setAttribute("class","new2");
productDescriptionnew.setAttribute("class","productDescriptionnew");
if(window.innerWidth<=600){
    div.style.marginBottom=0;
}

adarshgrid.appendChild(div);
}

for(var i=0;i<Women_data.search_results.length;i++){
var div=document.createElement("div");
var maindiv=document.createElement("div");
var imgdiv=document.createElement("div");
var mainlink=document.createElement("a");
var img=document.createElement("img");
var descdiv=document.createElement("div");
var productNamenew=document.createElement("div");
var starsnew=document.createElement("div");
var new1=document.createElement("div");
var new1=document.createElement("div");
var new2=document.createElement("div");
var productDescriptionnew=document.createElement("div");

div.appendChild(maindiv);
maindiv.appendChild(imgdiv);
imgdiv.appendChild(mainlink);
mainlink.appendChild(img);
img.src=Women_data.search_results[i].image;
mainlink.href=Women_data.search_results[i].link;
mainlink.target="_blank";
// console.log(img.src)
maindiv.appendChild(descdiv);
descdiv.appendChild(productNamenew);
// productNamenew.textContent="Headphones";
descdiv.appendChild(starsnew);
starsnew.appendChild(new1);
new1.textContent=Women_data.search_results[i].price.raw;
new2.textContent="\u2605"+" "+Women_data.search_results[i].rating;
starsnew.appendChild(new2);
descdiv.appendChild(productDescriptionnew);
productDescriptionnew.textContent=Women_data.search_results[i].title;

div.setAttribute("class","grid-item");
div.classList.add("five");
maindiv.setAttribute("class","maindiv");
imgdiv.setAttribute("class","imgdiv");
mainlink.setAttribute("class","mainlink");
descdiv.setAttribute("class","descdiv");
productNamenew.setAttribute("class","productNamenew");
starsnew.setAttribute("class","starsnew");
new1.setAttribute("class","new1");
new2.setAttribute("class","new2");
productDescriptionnew.setAttribute("class","productDescriptionnew");
if(window.innerWidth<=600){
    div.style.marginBottom=0;
}

adarshgrid.appendChild(div);
}

// TRYING TO ADD NEW DIVS DYNAMICALLY

//IMAGES FOR PRODUCTS
Electronics_asins=[];
Kitchen_asins=[];
Men_asins=[];
Games_asins=[];
Women_asins=[];

for(var i=0;i<Electronics_data.search_results.length;i++){
    Electronics_asins.push(Electronics_data.search_results[i].asin)
}
for(var i=0;i<Kitchen_data.search_results.length;i++){
    Kitchen_asins.push(Kitchen_data.search_results[i].asin)
}
for(var i=0;i<Men_data.search_results.length;i++){
    Men_asins.push(Men_data.search_results[i].asin)
}
for(var i=0;i<Games_data.search_results.length;i++){
    Games_asins.push(Games_data.search_results[i].asin)
}
for(var i=0;i<Women_data.search_results.length;i++){
    Women_asins.push(Women_data.search_results[i].asin)
}

console.log(Electronics_asins,Kitchen_asins,Games_asins,Women_asins)
//IMAGES FOR PRODUCTS

/////////////WORKING REMOVING/////////////////////
//function changeTiles(n){
//        console.log(n)
//        alle=masonry.getItemElements()//works
//        alleOriginal=[...alle]
//        for(i=0;i<alle.length;i++){
//            if(alle[i].classList[1]==n){
//                alle.splice(i,1);
//                i=i-1;
//                console.log("i = ",i)
//            }
//        }
//        console.log("final array",alle);
//        masonry.remove(alle)//works
//        console.log("trying to remove from alle",alle);
//        masonry.layout();//works
//        console.log("trying to layout alle",alle);
//        masonry.addItems(alle);
//        console.log("adding alleoriginal",alle);
////        grid=document.querySelector(".Later");
////        masonry=new Masonry(grid,{
////          itemSelector:'.comingSoon',
////          fitWidth: true,
////          horizontalOrder: false,
////        });
//    
//}
/////////////WORKING REMOVING/////////////////////


/////////////WORKING MASONRY//////////////////////
//    e=document.getElementsByClassName("grid-item");
//    for(i=0;i<e.length;i++){
//        imgClasses.add("."+e.item(i).classList[1])
//        arrn.add(e.item(i).classList[1]);
//    }
//    arr=Array.from(imgClasses)
//    arrnew=Array.from(arrn)
//    
////    f=document.querySelectorAll(".one")
////    console.log(f)
//    grid=document.querySelector(".grid");
//    masonry=new Masonry(grid,{
//          itemSelector:arr,
//          gutter:10,
//          fitWidth: true,
//          horizontalOrder: false,
//});
//    console.log(arr)
//    console.log(arrnew)
//}
/////////////WORKING MASONRY//////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function changeTiles(num){
////    console.log(num+" clicked"+masonry.items);
//    var e=document.getElementsByClassName(num);
////    var f=document.getElementsByClassName("two");
////    console.log(masonry.options.itemSelector[1])
//
////    for(i of arrnew){
////        if(!(i==num)){
////            r=document.getElementsByClassName(i);
////            masonry.remove(r);
////            console.log(i);
////        }
////    }
//    
//    for(i=0;i<arr.length;i++){
//        if(arrnew[i]!=num)
//        arrForTiles.add(arr[i])
//    }
//    arrRedo=Array.from(arrForTiles)
//    console.log(arrRedo)
//    masonry=new Masonry(grid,{
//              itemSelector:arrRedo,
//              gutter:10,
//              fitWidth: true,
//              horizontalOrder: false,
//    });
//    
//    console.log(e)
////    masonry.layout()
//    console.log(masonry)
//    arrForTiles.clear();
////    masonryItems.layout()
////    masonryOptions = {
////          itemSelector:"."+num,
////          gutter:10,
////          fitWidth: true,
////          horizontalOrder: false,
////    };
//////    masonry.addItems(e);
////    masonryOptions.layout();
////    console.log(masonry.items);
//}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////