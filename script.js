console.log("script running");

// 2022

// Fix these querySelectors so that they each select the correct element.
const cheugyTile = document.querySelector("#Cheugy");
const rentFreeTile = document.querySelector("#RentFree");
const vibeCheckTile = document.querySelector("#VibeCheck");
const mainCharacterTile = document.querySelector("#MainCharacter");
const caughtIn4kTile = document.querySelector("#CaughtIn4k");
const understoodTheAssignmentTile = document.querySelector("#UnderstoodTheAssignment");
const bussinTile = document.querySelector("#Bussin");
const theBlueprintTile = document.querySelector("#TheBlueprint");
const ateThatTile = document.querySelector("#AteThat");
const sendingMeTile = document.querySelector("#SendingMe");

console.log(cheugyTile);
console.log(rentFreeTile);
console.log(vibeCheckTile);
console.log(mainCharacterTile);
console.log(caughtIn4kTile);
console.log(understoodTheAssignmentTile);
console.log(bussinTile);
console.log(theBlueprintTile);
console.log(ateThatTile);
console.log(sendingMeTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

let numTotal = document.querySelector("#total");
let numRight = document.querySelector("#right");
let tries = 0;
let rightTries = 0;
let av = 100;

let coolBarVal = document.getElementById("coolBar").value;
  console.log(coolBarVal);

inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess = inputField.value;
  console.log(guess);
  tries++;
  if (guess.toLowerCase() === "cheugy") {
    cheugyTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "rent free" || guess.toLowerCase() === "rent-free" || guess.toLowerCase() === "living rent free" || guess.toLowerCase() === "livin rent free" || guess.toLowerCase() === "rentfree" || guess.toLowerCase() === "livin rent-free") {
    rentFreeTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "vibe check" || guess.toLowerCase() === "vibe-check" || guess.toLowerCase() === "checking vibe" || guess.toLowerCase() === "checking vibes" || guess.toLowerCase() === "check the vibes" || guess.toLowerCase() === "check the vibe" || guess.toLowerCase() === "passed the vibe check" || guess.toLowerCase() === "you passed the vibe ckeck") {
    vibeCheckTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "main character" || guess.toLowerCase() === "main character vibes" || guess.toLowerCase() === "main character vibe") {
    mainCharacterTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "caught in 4k" || guess.toLowerCase() === "caught in four k" || guess.toLowerCase() === "in 4k") {
    caughtIn4kTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "understood the assignment" || guess.toLowerCase() === "you understood the assignment" || guess.toLowerCase() === "understand the assignment" || guess.toLowerCase() === "you understand the assignment") {
    understoodTheAssignmentTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "bussin" || guess.toLowerCase() === "bussin'" || guess.toLowerCase() === "bussing") {
    bussinTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "the blueprint" || guess.toLowerCase() === "blueprint" || guess.toLowerCase() === "blue print" || guess.toLowerCase() === "the blue print") {
    theBlueprintTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "ate that" || guess.toLowerCase() === "ate" || guess.toLowerCase() === "you ate"  || guess.toLowerCase() === "you ate that") {
    ateThatTile.classList.remove("hidden");
    rightTries++;
  } else if (guess.toLowerCase() === "sending me" || guess.toLowerCase() === "sent me" || guess.toLowerCase() === "send me") {
    sendingMeTile.classList.remove("hidden");
     rightTries++;
  }
  numTotal.innerHTML = "<p>Total tries: " + tries + "</p>";
  numRight.innerHTML = "<p>Correct tries: " + rightTries + "</p>";
  av = (rightTries / tries) * 100;

  let coolEm = document.querySelector("#cool");

  if(av > 66){
    coolEm.innerHTML = "Cool Level 😎: ";
  }
  else if (av > 33){
    coolEm.innerHTML = "Cool Level 🤠: ";
  }
  else{
    coolEm.innerHTML = "Cool Level 🤕: ";
  }
  
  document.getElementById("coolBar").value = av;
  inputField.value = "";
});

const giveUpBut = document.querySelector("#giveup");
giveUpBut.addEventListener('click', () => {
  cheugyTile.classList.remove("hidden");
  rentFreeTile.classList.remove("hidden");
  vibeCheckTile.classList.remove("hidden");
  mainCharacterTile.classList.remove("hidden");
  caughtIn4kTile.classList.remove("hidden");
  understoodTheAssignmentTile.classList.remove("hidden");
  bussinTile.classList.remove("hidden");
  theBlueprintTile.classList.remove("hidden");
  ateThatTile.classList.remove("hidden");
  sendingMeTile.classList.remove("hidden");
  
  document.getElementById("coolBar").value = 0;
  let coolEm = document.querySelector("#cool");
  coolEm.innerHTML = "Cool Level 🤕: ";
});


// 2022
