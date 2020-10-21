const hexColors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let color=document.querySelector(".color");
let button=document.querySelector(".btn");

button.addEventListener("click",function(){
    let hex='#';

    for(let i=0;i<6;i++)
    {
        hex+=hexColors[Math.floor(Math.random()* hexColors.length)];
    }

    document.body.style.backgroundColor=hex;
    color.textContent=hex;
})
