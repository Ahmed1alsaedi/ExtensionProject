const container = document.querySelector(".container");
const card = document.querySelector(".card");
const left = document.querySelector(".left-sec");
const right = document.querySelector(".right-sec");
async function getData(){
    try{
        const response = await fetch("assets/data/data.json");
        const data = await response.json();
        return data;
    } catch(err){
        console.log(err);
    }
}


async function getAll(){
    try{
        container.innerHTML="";
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
    
        newImg.src = `assets/images/images/${log.substring(16)}`

       const newBtn = document.createElement("button")
       newBtn.classList.add("statBtns")
       newBtn.textContent = "Remove"
       newLeft.appendChild(newImg);
       newLeft.appendChild(newBtn);
       const newH2 = document.createElement("h2")
       newH2.textContent = el.name;
       const newP = document.createElement("p")
       newP.textContent = el.description;
       const newBtn2 = document.createElement("button")
       newBtn2.classList.add("statBtns")
       newBtn2.textContent = "Install"
       newRight.appendChild(newH2);
       newRight.appendChild(newP);
       newRight.appendChild(newBtn2);
    })
    } catch(err){
       console.log(err);
    }
    
    
}

async function getActive(){
    try{
        container.innerHTML="";
        const data = await getData();
       const active =  data.filter(el => el.isActive === true);
        active.forEach(el =>{
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
    
        newImg.src = `assets/images/images/${log.substring(16)}`

       const newBtn = document.createElement("button")
       newBtn.classList.add("statBtns")
       newBtn.textContent = "Remove"
       newBtn.addEventListener("click", () => {
        container.removeChild(newCard);
       });
       newLeft.appendChild(newImg);
       newLeft.appendChild(newBtn);
       const newH2 = document.createElement("h2")
       newH2.textContent = el.name;
       const newP = document.createElement("p")
       newP.textContent = el.description;
       const newBtn2 = document.createElement("button")
       newBtn2.classList.add("statBtns")
       newBtn2.textContent = "Install"
       newRight.appendChild(newH2);
       newRight.appendChild(newP);
       newRight.appendChild(newBtn2);
    })
    } catch(err){
        console.log(err);
    }

}

//async function remveCard(card){
    //container.removeChild(card);
//
