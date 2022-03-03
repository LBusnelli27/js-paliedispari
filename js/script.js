// ! Start functions
/**
 * This function check if a word is palindrome or not
 * 
 * @param {*} string Insert the word to check
 * @returns Return true(palindrome) or false(not palindrome)
 */
function checkPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * This function take the value and tranform into parseInt
 * 
 * @param {*} numerone Insert the number
 * @returns Return the parseInt of the value
 */
function parseIntInput(numerone) {
    return parseInt(numerone.value)
}

/**
 * This function generate a random number between 1 and 5
 * 
 * @returns A random int from 1 to 5
 */
function randomInteger() {
    return Math.floor(Math.random() * 5) + 1;
}

/**
 * This function do a sum and check if the result is odd or even
 * 
 * @param {*} firstNum First number
 * @param {*} secondNum Second Number
 * @returns True(odd) or False(even)
 */
function oddSumNumbers(firstNum, secondNum) {
    if((firstNum + secondNum)%2 == 0) {
        return true;
    } else {
        return false;
    }
}
// ! End functions


// * EventListerner for the send btn for palindrome
const btnSend = document.getElementById('btn-pali');
btnSend.addEventListener('click', function() {
    // Get user input word
    let inputUser = document.getElementById('input-pali');

    //Check if palindrome
    let checkValue = checkPalindrome(inputUser.value.toLowerCase());

    // Get result p
    let reusulPhrase = document.getElementById('result-p');
    
    // If true is palindrome 
    if(checkValue == true) {
        reusulPhrase.innerHTML = "Complimenti, la parola e' palindroma"
    } else {
        reusulPhrase.innerHTML = "Mi dispiace, la parola non e' palindroma"
    }


    // Reset input value
    inputUser.value = "";
});



// * EventListerner for the send btn for game odd or even
const btnOddOrEven = document.getElementById('btn-odd-even');
btnOddOrEven.addEventListener('click', function() {
    // Get the input user number 
    let inputNumUser = document.getElementById('input-number');
    // Check if is between 1 and 5, check if isNan
    if((parseIntInput(inputNumUser) > 5 || parseIntInput(inputNumUser) < 1) || (isNaN(inputNumUser.value)) ) {
        inputNumUser.value = "";
        location.reload();
    }

    // Save in a variable the random number number generated
    let randomComputer = randomInteger();

    // Get the user selection odd or even
    let userInputSelect = document.getElementById('inputGroupSelect');

    
    let isOdd;
    // Get the result paragraph
    const oddP = document.getElementById('result-odd-p');

    //If for establish if is true or false
    if(oddSumNumbers(parseIntInput(inputNumUser), randomComputer) == true) {
        isOdd = true;
    } else {
        isOdd = false;
    }
    

    //Check the result with the choose of the user
    if(((userInputSelect.value == 1) && (isOdd == true)) || ((userInputSelect.value == 2) && (isOdd == false))) {
        console.log('Hai vintooo');
        oddP.innerHTML = "Hai vintooo!"
    } else {
        console.log('Hai persooo');
        oddP.innerHTML = "Hai presooo!"
    }
    

    // Some console.log to check if everything is right
    console.log(`Input user: ${parseIntInput(inputNumUser)}`);
    console.log(`Random computer: ${randomComputer}`);
    console.log(`Sum: ${(parseIntInput(inputNumUser)) + (randomComputer)}`);

    // Reset input number value
    inputNumUser.value = "";
});

