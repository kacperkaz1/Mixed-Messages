const randomMessages = ["What is fast, loud and crunchy? A rocket chip.", "What is a room with no walls? A mushroom.", "What do you call a guy who's really loud? Mike.", "What's brown and sticky? A stick.", "What do you call a tired bull? A bulldozer."];

// const generateRand = randomMessages[Math.floor(Math.random() * randomMessages.length)];

// console.log(generateRand);

const btn = document.getElementById("snickers");


btn.addEventListener("click", GeneratingMessage, false);

// function randomNoRepeats(array) {
//       var copy = array.slice(0);
//       if (copy.length < 1) { copy = array.slice(0); }
//       var index = Math.floor(Math.random() * copy.length);
//       var item = copy[index];
//       copy.splice(index, 1);
//       return item;
//     }


function dontRepeat(copy){
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };

  function randomNoRepeats(array) {
    var copy = array.slice(0);
    return dontRepeat(copy);
  }

  function GeneratingMessage(){
    const message = randomNoRepeats(randomMessages);
    document.getElementsByClassName("content")[0].innerText = randomNoRepeats(randomMessages);
}

