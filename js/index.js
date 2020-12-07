// Your code goes here
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", (e)=>e.target.style.color = "orange");

h1.addEventListener("mouseout", (e)=>e.target.style.color = "pink");

let counter = 0;

const h2MouseoverCounter = document.createElement("p");

h2MouseoverCounter.textContent = `images clicked ${counter} times`

h1.prepend(h2MouseoverCounter)

const h2List = document.querySelectorAll("h2");

h2List.forEach(h2=>{
    

})

const imgList = document.querySelectorAll("img");

imgList.forEach(img=>{
    img.addEventListener("click", (e) => {
        console.log(e.target.localName)
        counter++;
        h2MouseoverCounter.textContent = `images clicked ${counter} times`
    })
    img.addEventListener("dblclick", (e)=>{
       if(e.target.style.transform === "scale(1.5)"){
        e.target.style.transform = "scale(1)"
        }
       else {
        e.target.style.transform = "scale(1.5)"
        }
   }) 
})

const anchor = document.querySelector("a");
anchor.addEventListener("keydown", (e) => {
  alert(`You pressed ${e.key} on keydown`);
});

window.addEventListener("keyup", (e) => {
    alert(`You pressed ${e.key} on keyup`);
  });
  
  let pList = document.querySelectorAll("p");
  pList.forEach((p) => {
    p.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      p.style.backgroundColor = "lightsalmon";
      p.style.color = "white";
    });
    p.addEventListener("mouseenter", () => {
      p.style.color = "darkcyan";
    });
    p.addEventListener("mouseleave", () => {
      p.style.color = "black";
    })  
  });

window.addEventListener("wheel", (e) => {
    console.log(e.target.style.backgroundColor);
    e.target.style.backgroundColor = "rgba(255, 99, 71, 0.2)";
});
