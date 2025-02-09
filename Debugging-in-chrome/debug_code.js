
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result1 = add(num1, num2);
        let result2 = subtract(num1, num2);
        let result3 = multiply(num1, num2);
        let result4 = divide(num1, num2);


        // Display the results
        displayResult1(result1);
        displayResult2(result2);
        displayResult3(result3);
        displayResult4(result4);
    } else {
        alert('Please enter valid numbers');
    }
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function subtract(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // subtract the numbers
    return a - b;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b;
}

function displayResult1(result1) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result1');
    resultElement.textContent = `The addition is: ${result1}`;
}
function displayResult2(result2) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result2');
    resultElement.textContent = `The subtraction is: ${result2}`;
}
function displayResult3(result3) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result3');
    resultElement.textContent = `The multiplication is: ${result3}`;
}
function displayResult4(result4) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result4');
    resultElement.textContent = `The Division is: ${result4}`;
}
