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
//  double cardsArray 
let iconsMerged: string[]= [...cardsArray, ...cardsArray]

// array for selected cards
let selected:ItemInterface[] = []

function closeCards(){
    // closes cards after one second
    setTimeout(() => {
        // closes first selected card if it is not matched
        selected[0].div.style.backgroundColor = "#bde0fe"
        selected[0].div.innerHTML = ""
        // closes second selected card if it is not matched
        selected[1].div.style.backgroundColor = "#bde0fe"
        selected[1].div.innerHTML = ""
        selected = []
    }, 1000);
}


function cardsMatch(){
    // opens cards if they match
    selected[0].div.classList.add("open")
    selected[1].div.classList.add("open")
    // refresh array
    selected = []
}


 function compareSymbols(){
    // if first selected card symbol is equil to second
    if(selected[0].symbol === selected[1].symbol){
        // checks if cards matches
        console.log("match")
        cardsMatch()
        // otherwise closes cards
    } else{
        console.log("no match")
        closeCards()
    }
}


function cardClicked(e:any){
    // if card is clicked checks if it includes class "open"
    if(e.target.className.includes("open"))return
    if(selected.length < 2){
        // adds to value attribute iconName
        const{value: iconName} = e.target.attributes[1]
        // sets blue BG
        e.target.style.backgroundColor ="#bde0fe"
        // sets card image
        e.target.innerHTML = `  <div class="card ${iconName}" id="0"></div>`
        // object  for div and symbol
        const item: ItemInterface ={
            div: e.target,
            symbol: iconName
        }
        // pushes object to array
        selected.push(item)
        // if two cards selected compareSymbol
        if(selected.length ===2) compareSymbols()
    }
}


function appendCards():void{
    // sorts iconsMerged randomly
   iconsMerged = iconsMerged.sort((a,b)=> 0.5 - Math.random())
    // // appends cards based on iconsMerged array
   for(let i=0; i<iconsMerged.length; i++){
    container.innerHTML += `  <div class="card" iconName="${iconsMerged[i]}"></div>`
   }
// onclick event to select cards
  const cards= document.querySelectorAll(".card") as NodeListOf <HTMLElement>
  cards.forEach(x=>x.onclick = cardClicked)
}




appendCards()


