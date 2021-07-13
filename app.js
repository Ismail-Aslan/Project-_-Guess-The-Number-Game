let randomNumber = Math.ceil((Math.random() * 100));
// console.log(randomNumber);

const checkButton = document.getElementById('checkButton');
const guessedNumber = document.getElementById('guessedNumber');
const hint = document.getElementById('hint');
const attemp = document.getElementById('attemp');
let attemps = 0;


checkButton.addEventListener('click',checkNumber);
guessedNumber.addEventListener('keydown',function (event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});


function checkNumber() {
    const numberInput = guessedNumber.value;
    attemps += 1;
    if (numberInput == randomNumber ) {

        alert(`Congrats! You have found the number after ${attemps} attemps!`);
        
        if (window.confirm("You wanna play again!")) {
            window.location.href = "./index.html"
        } else {
            hint.innerText = "Thanks for playing the game.";
            attemps = 0;
            attemp.innerText = "";
        }

    }else if(numberInput === ''){
        hint.innerText = 'Write a number.'
        attemps--;
        attemp.innerText = `Number of attemps: ${attemps}`;

    }else if (numberInput > randomNumber) {
        hint.innerText = "A little lower.";
        attemp.innerText = `Number of attemps: ${attemps}`;
        
    }else if (numberInput < randomNumber) {
        hint.innerText = "A little higher.";
        attemp.innerText = `Number of attemps: ${attemps}`;
    }
    guessedNumber.focus();
    guessedNumber.value = '';
}

