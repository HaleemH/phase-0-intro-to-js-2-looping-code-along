// Code your solutions in this file
let names = ["Lisa", "Kaitlin", "Jan"];
let event = "surprise";

function writeCards(){
    let message = [];
    for(let i =0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;

}

function countDown(num){
    while(num >= 0){
        console.log(num--);
    }
}