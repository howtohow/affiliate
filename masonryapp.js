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
//var maingrid = document.getElementById("grid");
let masonry;
let grid;
let arr=[]
let arrnew=[]
const imgClasses = new Set();
const arrn = new Set();
let masonryItems;
let arrForTiles=new Set();

window.onload=function(){
        grid=document.querySelector(".grid");
        masonry=new Masonry(grid,{
          itemSelector:'.grid-item',
          gutter:10,
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
    console.log()
    masonry=new Masonry(grid,{
          itemSelector:'.'+n,
          gutter:10,
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
          gutter:10,
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