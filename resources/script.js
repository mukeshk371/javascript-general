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