let bars = document.getElementById("bars")
let menu = document.getElementById("menu")
let close = document.getElementById("close")
let nav =document.getElementById("navbar")
let custom =document.getElementById("custom")
let customLeft =document.getElementById("custom-left")
let customImg =document.querySelectorAll(".custom-img")
let kolom1 = document.getElementById("kolom1")
let kolom2 = document.getElementById("kolom2")
let kolom3 = document.getElementById("kolom3")
let cs1 = document.querySelector (".custom-img1")
let cs2 = document.querySelector (".custom-img2")
let cs3 = document.querySelector (".custom-img3")
let progres = document.querySelector (".progres")




bars.onclick = function (){
    menu.style.marginTop = "11vh"
    bars.style.display = "none"
    close.style.display = "block"
    menu.style.opacity = "1"
    nav.classList.add("nav-active")
}
close.onclick =function (){
    menu.style.marginTop = "-600px"
    menu.style.opacity = "0"
    bars.style.display = "block"
    close.style.display = "none"
    menu.style.opacity = "0"
    nav.classList.remove("nav-active")
}
 
let bottom =document.getElementById("bottom")
let jumbo =document.getElementById("jumbo")
let thumb = document.querySelectorAll(".thumb")
let next=document.getElementById("left")
let before= document.getElementById("right")
let jumlah =0
let jumlah2 =thumb.length


// alert(thumb[3])

bottom.addEventListener("click",function (e){
    if(e.target.className == "thumb"){
        jumbo.src = e.target.src
        jumbo.classList.add("jumbo-active")
        setTimeout(() => {
            jumbo.classList.remove("jumbo-active")
        }, 200);

        thumb.forEach(function(p){
            p.className = "thumb"
        })

        e.target.classList.add("jumbo-active2")
    }

})

function src (){
    for (let i = 0;i < thumb.length;i++){
        if(jumbo.src == thumb[i].src){
            thumb[i].classList.add("jumbo-active2")
        }
    }
}
function ilang (){
    for (let i = 0;i < thumb.length;i++){
        if(jumbo.src == thumb[i].src){
            thumb[i].classList.remove("jumbo-active2")
        }
    }
}

next.addEventListener("click",function(){
    
    for (let i = 0;i < thumb.length;i++){
        if (jumbo.src == thumb[i].src){
            ilang()
            jumbo.src = thumb[i + 1].src
            return src()
            
        }
    }
  
       
})
before.addEventListener("click",function(){
    for (let i = 0;i < thumb.length;i++){
        if (jumbo.src == thumb[i].src){
            ilang()
            jumbo.src = thumb[i - 1].src
            return src()
        }
    }
       
})




window.addEventListener("scroll",function(){
    let ofsite2 =window.scrollY > kolom2.offsetTop -470
    let ofsite2Balik =window.scrollY < kolom2.offsetTop - 470
    let ofsite3 =window.scrollY > kolom3.offsetTop - 470
    let ofsite3Balik =window.scrollY < kolom3.offsetTop - 470
    if (ofsite2){
        cs2.classList.add("custom-img2-active")
        progres.classList.add("progres2")
        cs1.classList.add("img1-naik")
    }else if (ofsite2Balik){
        cs2.classList.remove("custom-img2-active")
        cs1.classList.remove("img1-naik")
        progres.classList.remove("progres2")
    }
    if (ofsite3){
        cs3.classList.add("custom-img3-active")
        cs2.classList.add("img2-naik")
        progres.classList.add("progres3")
    }else if (ofsite3Balik){
        cs3.classList.remove("custom-img3-active")
        cs2.classList.remove("img2-naik")
        progres.classList.remove("progres3")
    }
    console.log(ofsite2)
})



let questions = document.querySelector(".questions")
let questions1 = document.querySelector(".questions1")
let questions2 = document.querySelector(".questions2")
let questions1_1 = document.querySelector(".questions1-1")
let questions1_2 = document.querySelector(".questions1-2")
let questions2_1 = document.querySelector(".questions2-1")
let questions2_2 = document.querySelector(".questions2-2")
let questions3_1 = document.querySelector(".questions3-1")
let questions3_2 = document.querySelector(".questions3-2")

window.addEventListener ("scroll",function(){
   let qs1Muncul = window.scrollY > questions.offsetTop - 200
   let qs1hilang = window.scrollY < questions.offsetTop - 200
   let qs2Muncul =window.scrollY > questions.offsetTop + 120
   let qs2hilang =window.scrollY < questions.offsetTop + 120
   let qs3Muncul =window.scrollY > questions1_2.offsetTop + 130
   let qs3hilang =window.scrollY < questions1_2.offsetTop + 120


    if(qs1Muncul){
        setTimeout(() => {
            questions1_1.classList.add("questions1-1-active")
        }, 200);
        setTimeout(() => {
            questions1_2.classList.add("questions1-2-active")
        }, 600);

    }
    if (qs1hilang){
        setTimeout(() => {
            questions1_1.classList.remove("questions1-1-active")
        }, 200);
        setTimeout(() => {
            questions1_2.classList.remove("questions1-2-active")
        }, 600);
    }


    if (qs2Muncul){
        setTimeout(() => {
            questions2_1.classList.add("questions2-1-active")
        }, 200);
        setTimeout(() => {
            questions2_2.classList.add("questions2-2-active")
        }, 600);

        setTimeout(() => {
            questions1_1.classList.remove("questions1-1-active")
        }, 200);
        setTimeout(() => {
            questions1_2.classList.remove("questions1-2-active")
        }, 600);
    }
    if (qs2hilang){
        setTimeout(() => {
            questions2_1.classList.remove("questions2-1-active")
        }, 200);
        setTimeout(() => {
            questions2_2.classList.remove("questions2-2-active")
        }, 600);
    }


    if(qs3Muncul){
        setTimeout(() => {
            questions3_1.classList.add("questions3-1-active")
        }, 200);
        setTimeout(() => {
            questions3_2.classList.add("questions3-2-active")
        }, 600);

        setTimeout(() => {
            questions2_1.classList.remove("questions2-1-active")
        }, 200);
        setTimeout(() => {
            questions2_2.classList.remove("questions2-2-active")
        }, 600);
    }
    if (qs3hilang){
        setTimeout(() => {
            questions3_1.classList.remove("questions3-1-active")
        }, 200);
        setTimeout(() => {
            questions3_2.classList.remove("questions3-2-active")
        }, 600);
    }
    
})