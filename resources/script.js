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

function returnFirstElement() {
    let newArray = [50, 504, 457];
    alert('First Element' + ' = ' + newArray[0]);
}

function convertHoursIntoSeconds() {
    let inputHours = Number(prompt('Enter Hours'));
    alert(inputHours + 'Hrs.' + ' = ' + (inputHours * 3600) + 'Sec.');
}

function maximumEdgeOfTriangle() {
    let firstSide = Number(prompt('Enter first angle'));
    let secondSide = Number(prompt('Enter second angle'));
    let result = (firstSide + secondSide) - 1;
    alert('Maximum Edge of a Triangle = ' + result);
}

function remainderFromTwoNumbers() {
    let dividend = Number(prompt('Enter Dividend'));
    let divisor = Number(prompt('Enter divisor'));
    let remainder = dividend % divisor;
    alert('Remainder = ' + remainder);
}

function perimeterOfRectangle() {
    let rectangleLength = Number(prompt('Enter length of rectangle'));
    let rectangleWidth = Number(prompt('Enter width of rectangle'));
    let rectanglePerimeter = (rectangleLength + rectangleWidth) * 2;
    alert('Perimeter of Rectangle = ' + rectanglePerimeter);
}

function returnSomethingToMe() {
    let inputSomething = prompt('Enter Something');
    alert('Something ' + inputSomething);
}