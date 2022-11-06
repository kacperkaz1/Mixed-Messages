const randomMessages = ["What is fast, loud and crunchy? A rocket chip.", "What is a room with no walls? A mushroom.", "What do you call a guy who's really loud? Mike.", "What's brown and sticky? A stick.", "What do you call a tired bull? A bulldozer."];

let usedIndex = -1;

function dontRepeat(){
    let randomIndex = Math.floor(Math.random() * randomMessages.length);
    while (randomIndex == usedIndex){
        randomIndex = Math.floor(Math.random() * randomMessages.length);
    }
    console.log(randomMessages[randomIndex]);
    // document.getElementsByClassName("main").innerHTML = randomMessages[randomIndex];
    usedIndex = randomIndex;

}
console.log(dontRepeat());