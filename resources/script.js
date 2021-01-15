function printName() {
    console.log('Mukesh Kumar');
}

function sumOfTwoNumbers() {
    let firstNumber = Number(prompt('Enter First Number'));
    let secondNumber = Number(prompt('Enter Second Name'));
    let sum = firstNumber + secondNumber;
    alert(sum);
}

function convertMinutesToSeconds() {
    let minuteInput = Number(prompt('Enter Minutes'));
    alert(minuteInput + ' Minutes' + ' = ' + minuteInput * 60 + ' Seconds');
}

function printNextNumber() {
    let numberInput = Number(prompt('Enter the number'));
    alert('Next Number' + ' = ' + (numberInput + 1));
}

function areaOfTriangle() {
    let baseInput = Number(prompt('Enter Triangle Base'));
    let heightInput = Number(prompt('Enter Triangle Height'));
    alert('Triangle Area ' + ((baseInput * heightInput) / 2));
}

function convertAgeToDays() {
    let ageInput = Number(prompt('Enter Age'));
    alert(ageInput + ' Years' + ' = ' + (ageInput * 365) + ' Days');
}

function calculatePower() {
    let voltage = Number(prompt('Enter Voltage'));
    let current = Number(prompt('Enter Current'));
    alert('Electrict Power' + ' = ' + (voltage * current) + ' Watt');
}