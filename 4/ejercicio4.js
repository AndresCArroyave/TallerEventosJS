let botones = document.querySelectorAll(".accordion");
botones.forEach ((x,index) =>{
    x.addEventListener("click", ()=>{
        let paneles = document.querySelectorAll(".panel");
        if(paneles[index].style.display == "block"){
            paneles[index].style.display = "none";
        }else{
            paneles[index].style.display = "block";
        }
    })
})

// let botones1 = document.querySelectorAll(".accordion");
// for (let x = 0; x < botones1.length; x++){
//     botones1[x].addEventListener("click", function(){
//         let paneles = document.querySelectorAll(".panel");
//         if(paneles[x].style.display == "block"){
//             paneles[x].style.display = "none";
//         }else{
//             paneles[x].style.display = "block";
//         }
//     })
// }