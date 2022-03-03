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


// EventListerner for the send btn
const btnSend = document.getElementById('btn-pali');
btnSend.addEventListener('click', function() {
    let inputUser = document.getElementById('input-pali');

    let checkValue = checkPalindrome(inputUser.value.toLowerCase());

    let reusulPhrase = document.getElementById('result-p');
    
    if(checkValue == true) {
        reusulPhrase.innerHTML = "Complimenti, la parola e' palindroma"
    } else {
        reusulPhrase.innerHTML = "Mi dispiace, la parola non e' palindroma"
    }


    inputUser.value = "";
});



const btnOddOrEven = document.getElementById('btn-odd-even');
btnOddOrEven.addEventListener('click', function() {
    let inputNumUser = document.getElementById('input-number');
    if((parseIntInput(inputNumUser) > 5 || parseIntInput(inputNumUser) < 0) || (isNaN(inputNumUser.value)) ) {
        inputNumUser.value = "";
        location.reload();
    }

    console.log(`Input user: ${parseIntInput(inputNumUser)}`);
    console.log(`Random computer: ${randomInteger()}`);
    console.log(`Sum: ${(parseIntInput(inputNumUser)) + (randomInteger())}`);
    console.log(`Result: ${oddSumNumbers(parseIntInput(inputNumUser), randomInteger())}`);

    const oddP = document.getElementById('result-odd-p');
    if(oddSumNumbers(parseIntInput(inputNumUser), randomInteger()) == true) {
        oddP.innerHTML = "E' pari!!!"
    } else {
        oddP.innerHTML = "E' dispari!!!"
    }

    inputNumUser.value = "";
});

