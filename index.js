function writeCards(name, event){
    let thankingCards = [];
    for (let i = 0; i < name.length; i++) {
        thankingCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankingCards;
}

function countDown(n){
    let number = 0;
    while (number <= n){
        console.log(number);
        number++;
     }
    }
countDown(10);
