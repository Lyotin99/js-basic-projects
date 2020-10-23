const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const currClass=e.currentTarget.parentElement.parentElement;
        btns.forEach(function(item){
            let el=item.parentElement.parentElement;
            if(el!==currClass){
                el.classList.remove("show-text")
            }

        })
        currClass.classList.toggle("show-text");
    })

})  


// window.addEventListener("DOMContentLoaded",function(){
//     let el=document.createElement("div")
//     el.className="question-container";
//     let c=document.querySelector(".container");
//     el.textContent="hello";
//     el.style.background="rgba(219,219,219)";
//     c.appendChild(el)
// })