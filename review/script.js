const review=[
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at odio blandit, scelerisque tortor sit amet, ullamcorper erat. Proin at eros tristique, laoreet ligula a, venenatis ligula.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed at odio blandit, scelerisque tortor sit amet, ullamcorper erat. Proin at eros tristique, laoreet ligula a, venenatis ligula ",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Nunc eu consectetur sem, vel porttitor orci. Praesent in diam bibendum, aliquam odio a, viverra nunc. Vestibulum vel leo nec augue venenatis suscipit. Etiam pulvinar aliquet magna, non aliquam diam egestas at.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Integer eu nisi dapibus, rhoncus elit in, malesuada enim. Mauris ac risus a neque tincidunt dictum at eu lorem. Nam nec ex sit amet mi pulvinar tincidunt. ",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Proin mattis felis id erat pharetra, rutrum sagittis odio ullamcorper. Donec quis ex vel orci varius vehicula ac vel ex.",
      },
]

let img=document.getElementById("person-img");
let author=document.getElementById("author");
let job=document.getElementById("job");
let info=document.getElementById("info");
let counter=0;
let prevBtn=document.querySelector(".prev-btn");
let nextBtn=document.querySelector(".next-btn");
let randomBtn=document.querySelector(".random-btn");

window.addEventListener("DOMContentLoaded",function(){
item(counter);
})

function item(el){
let item=review[el];
img.src=item.img;
author.textContent=item.name;
job.textContent=item.job;
info.textContent=item.text;
}

prevBtn.addEventListener("click",function(){
    counter--;
    if(counter<0)
    {
        counter=review.length-1;
    }
    item(counter);

})


nextBtn.addEventListener("click",function(){
    counter++;
    if(counter>review.length-1)
    {
        counter=0;
    }
    item(counter);

})

randomBtn.addEventListener("click",function(){
    counter=Math.floor(Math.random()*review.length);
    item(counter);
})