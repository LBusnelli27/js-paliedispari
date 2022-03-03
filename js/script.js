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




