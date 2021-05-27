class Node{
    constructor(color, number, next=null){
      this.color = color;
      this.number = number;
      this.next = next;
    }
    gitData(){
        return`${this.color}-${this.number}`
    }
  }
  
  class Stack{
    constructor(limit=20){
        this.limit= limit;
        this.size=0
        this.topNode=null
    }
  
    push=(color,number)=>{
        if(this.isFull){
            console.log(`your stack is full ${color} , ${number}`)
        }
        else{
        const newNode = new Node(color,number)
        newNode.nextNode=this.topNode
        this.topNode= newNode
        this.size++
        }
       
    }
    pop=()=>{
        if(this.isEmpty()){
          return"There is no more cards"
        }
        else{
        const popped= this.topNode
        this.topNode=popped.nextNode
        this.size--
        return popped.gitData()
        }
        
    }
    get isFull(){
        return this.size===this.limit
    }
    get isEmpty(){
        return this.size===0
    }
    get peek(){
        if(this.isEmpty()){
            console.log("There is no cards")
        }
        return this.topNode.gitData()
    }

    caards=()=>{
        let currentNode=this.topNode
        while(currentNode){
            console.log(`Numbers:${number} , color${color}`)
        }

}
}
const color =["red","blue","green","yallow"]
const number=[1,2,3,4,5,6,7,8,9]
const random=(x)=>{
    const card = Math.floor(Math.random()*x.length)
    return x[card]
}
const cards = new Stack(20)
const cardsArray=[]
while(!cards.isFull()){
    const number = random(number)
    const color = random(color)
    if(!cardsArray.includes(`${color},${number}`)){
        cards.push(color,number)
        cardsArray.push(`${color},${number}`) 
    }
}
console.log("Deck: ")
cards.caards()

let player1=[]
let player1=[]
let i=0
while(i<5){
player1.push(cards.pop())
player2.push(cards.pop())
i++
}
console.log("player 1 card :"+cards)
