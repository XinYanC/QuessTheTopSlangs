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

inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess = inputField.value;
  console.log(guess);
  if (guess.toLowerCase() === "cheugy") {
    cheugyTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "rent free" || guess.toLowerCase() === "rent-free") {
    rentFreeTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "vibe check" || guess.toLowerCase() === "vibe-check") {
    vibeCheckTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "main character") {
    mainCharacterTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "caught in 4k" || guess.toLowerCase() === "caught in four k") {
    caughtIn4kTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "understood the assignment") {
    understoodTheAssignmentTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "bussin" || guess.toLowerCase() === "bussin'") {
    bussinTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "the blueprint" || guess.toLowerCase() === "blueprint" || guess.toLowerCase() === "blue print" || guess.toLowerCase() === "the blue print") {
    theBlueprintTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "ate that" || guess.toLowerCase() === "ate") {
    ateThatTile.classList.remove("hidden");
    
  } else if (guess.toLowerCase() === "sending me") {
    sendingMeTile.classList.remove("hidden");
     
  }
  inputField.value = "";
});

// 2022
