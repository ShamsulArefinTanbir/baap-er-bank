// step one

document.getElementById('btn-submit').addEventListener('click',function(){
// step2 + 3

const emailField = document.getElementById('user-mail');
const email = emailField.value;

const passwordField = document.getElementById('user-pass');
const password = passwordField.value;
//  step4

if (email === 'qwerty' && password === '1226') {
    window.location.href = 'bank.html';
}
else {
    alert('Bhalo hoye jaw');
}

})

// ------------------//

document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-am');
    const depositAmount = depositField.value;

    // Deposit part

    const depositTotalElement = document.getElementById('deposit-total');
   const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;


})
