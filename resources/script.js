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

function returnLessThanEqualToZero() {
    let LTETZNumber = Number(prompt('Enter Number'));
    if (LTETZNumber < 0) {
        alert('true');
    } else {
        alert('false');
    }
}

function returnArrayStringsToArrayNumbers() {
    let toNumbers = arr => arr.map(Number);
    toNumbers = ['1', '2', '3', '4', '5', '6'];
    alert(toNumbers);
}

function returnBasicVariableAssignment() {
    let nameString = prompt('Enter Name');
    alert(nameString + 'Edabit');
}

function returnLessThan100() {
    let lessThanNumber1 = Number(prompt('Enter first number'));
    let lessThanNumber2 = Number(prompt('Enter second number'));
    sum = lessThanNumber1 + lessThanNumber2;
    if (sum < 100) {
        alert('true');
    } else {
        alert('false');
    }
}

function returnLegsCount() {
    let chickenNumber = Number(prompt('Enter Chicken numbers'));
    let cowNumber = Number(prompt('Enter Cow numbers'));
    let pigNumber = Number(prompt('Enter Pig numbers'));

    result = (chickenNumber * 2) + (cowNumber * 4) + (pigNumber * 4);
    alert('Total number of legs = ' + result);
}

function returnTrueFalse() {
    let a = true;
    let b = true;
    if (a == true && b == true) {
        alert(true);
    } else {
        alert(false);
    }
}

function returnSumOfPolygonAngles() {
    let polygonAngles = Number(prompt('Enter total number of angles'));
    result = (polygonAngles - 2) * 180;
    if (polygonAngles > 2) {
        alert('Sum of Polygon Angles = ' + result);
    } else {
        alert('Total number of angles will always be greater than 2');
    }
}

function returnAreNumbersEqual() {
    let isSameNum1 = prompt('Enter first number');
    let isSameNum2 = prompt('Enter second number');
    if (isSameNum1 == isSameNum2) {
        alert(true);
    } else {
        alert(false);
    }
}
function returnBooleanToStringConversion() {
    let boolToString = true;
    result = boolToString.toString();
    alert(result);
}

function calculateFuel() {
    let inputDistance = Number(prompt('Enter Distance'));
    let requiredFuel = inputDistance * 10;
    if (inputDistance <= 10 && inputDistance > 0) {
        alert('Fuel = 100L');
    } else if (inputDistance <= 0) {
        alert('No fuel required');
    } else {
        alert('Fuel = ' + requiredFuel + 'L');
    }
}

function calculateFramesPerSecond(minutes, fps) {
    minutes = Number(prompt('Enter time in minutes')) * 60;
    fps = Number(prompt('Enter frames'));
    let framesPerSecond = minutes * fps;
    alert('Frames Per Second = ' + framesPerSecond);
}

function yearsInOneHouse(age, moves) {
    age = Number(prompt('Enter age'));
    moves = Number(prompt('Enter years'));
    let yearsLived = (age + moves) / 2;
    alert('average I have lived = ' + yearsLived);
}

function stringCalculator(str) {
    str = eval(prompt('Enter Expression'));
    alert(str);
}
function makesTen(a, b) {
    a = Number(prompt('Enter first number'));
    b = Number(prompt('Enter second number'));
    if (a == 10 || b == 10 || (a + b) == 10) {
        alert('Sum = ' + (a + b) + ' ' + true);
    } else {
        alert(false);
    }
}

function greeting(name) {
    name = prompt('Enter a name');
    if (name == 'Mubashir') {
        alert('Hello, my love!');
    } else {
        alert('Hello, ' + name + ' !');
    }
}
function maxNum(firstNum, SecondNum) {
    firstNum = Number(prompt('Enter First Number'));
    SecondNum = Number(prompt('Enter Second Number'));
    if (firstNum > SecondNum) {
        alert('Largest Number = ' + firstNum);
    } else if (firstNum == SecondNum) {
        alert('Both are equal');
    } else {
        alert('Largest Number = ' + SecondNum);
    }
}