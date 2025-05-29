const container = document.querySelector(".container");
const card = document.querySelector(".card");
const left = document.querySelector(".left-sec");
const right = document.querySelector(".right-sec");
async function getData(){
    try{
        const response = await fetch("assests/data/data.json");
        const data = await response.json();
        return data;
    } catch(err){
        console.log(err);
    }
}


async function getAll(){
    try{
    const data = await getData();
    data.forEach(el =>{
       const newCard = document.createElement("div")
       newCard.classList.add("card")
       const newLeft = document.createElement("div")
       newLeft.classList.add("left-sec")
       const newRight = document.createElement("div")
       newRight.classList.add("right-sec")
       container.appendChild(newCard);
       newCard.appendChild(newLeft);
       newCard.appendChild(newRight)
       const newImg = document.createElement("img")
       let log = el.logo;
       newImg.src= log.substring(2);

       const newBtn = document.createElement("button")
       newBtn.classList.add("statBtns")
       newLeft.appendChild(newImg);
       newLeft.appendChild(newBtn);
    })
    } catch(err){
       console.log(err);
    }
    
    
}
getAll();