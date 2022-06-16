const container = document.querySelector(".container") as HTMLElement;


interface ItemInterface{
    div:HTMLElement,
    symbol:string
}


let cardsArray:string[] = [
   "arrow",
   "star",
   "x",
   "str",
   "awp",
   "smile",
   "gold",
   "claws",
   "up",
   "ags"
]

let iconsMerged: string[]= [...cardsArray, ...cardsArray]

let selected:ItemInterface[] = []

function closeCards(){

    setTimeout(() => {
        selected[0].div.style.backgroundColor = "#bde0fe"
        selected[0].div.innerHTML = ""

        selected[1].div.style.backgroundColor = "#bde0fe"
        selected[1].div.innerHTML = ""
        selected = []
    }, 1000);
}

function cardsMatch(){
    selected[0].div.classList.add("open")
    selected[1].div.classList.add("open")
    selected = []
}

 function compareSymbols(){
    if(selected[0].symbol === selected[1].symbol){
        console.log("match")
        cardsMatch()
    } else{
        console.log("no match")
        closeCards()
    }
}


function cardClicked(e:any){
    if(e.target.className.includes("open"))return

    if(selected.length < 2){
        const{value: iconName} = e.target.attributes[1]
        e.target.style.backgroundColor ="#bde0fe"
        e.target.innerHTML = `  <div class="card ${iconName}" id="0"></div>`

        const item: ItemInterface ={
            div: e.target,
            symbol: iconName
        }
        selected.push(item)
        if(selected.length ===2) compareSymbols()
    }
}

function appendCards():void{
   iconsMerged = iconsMerged.sort((a,b)=> 0.5 - Math.random())
   for(let i=0; i<iconsMerged.length; i++){
    container.innerHTML += `  <div class="card" iconName="${iconsMerged[i]}"></div>`
   }
  const cards= document.querySelectorAll(".card") as NodeListOf <HTMLElement>
  cards.forEach(x=>x.onclick = cardClicked)
}




appendCards()



// function compareSymbols():any{
//     if(selected[0].symbol === selected[1].symbol){
//         console.log("math")
//     }else{
//         console.log("no match")
//     }
// }




// function changeCardsOnClick(){
//     const regularCard = document.querySelectorAll(".card") as NodeListOf <HTMLElement>;
    
//     regularCard.forEach(x=>{
//     x.onclick =(e:any)=>{
//       const random = Math.round(Math.random()* cardsArray.length -1)
//       console.log(cardsArray[random])
//       e.target.classList.add(cardsArray[random])
//       const item:itemInterface = {
//         div: e.target,
//         symbol: cardsArray[random]
//     }
//     // selected.push(item)
//     compareSymbols()
//     }
//     }
   

// })



