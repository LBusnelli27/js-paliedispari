
function checkPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const btnSend = document.getElementById('btn-pali');
btnSend.addEventListener('click', function() {
    let inputUser = document.getElementById('input-pali');

    let checkValue = checkPalindrome(inputUser.value);
    console.log(checkValue);


    inputUser.value = "";
});

