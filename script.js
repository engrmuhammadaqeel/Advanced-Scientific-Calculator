// Function to append values to the result
function appendValue(value) {
    const resultField = document.getElementById('result');
    
    // Append specific math functions with a format to handle in evaluation
    switch (value) {
        case 'sin':
            resultField.value += 'Math.sin(';
            break;
        case 'cos':
            resultField.value += 'Math.cos(';
            break;
        case 'tan':
            resultField.value += 'Math.tan(';
            break;
        case 'log':
            resultField.value += 'Math.log(';
            break;
        case 'sqrt':
            resultField.value += 'Math.sqrt(';
            break;
        case 'x^y':
            resultField.value += '**'; // Use ** for exponentiation
            break;
        case 'π':
            resultField.value += 'Math.PI';
            break;
        case 'e':
            resultField.value += 'Math.E';
            break;
        case '|x|':
            resultField.value += 'Math.abs(';
            break;
        default:
            resultField.value += value;
    }
}

// Clear the result field
function clearResult() {
    document.getElementById('result').value = '';
}

// Delete last character from the result field
function deleteLast() {
    const result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const input = document.getElementById('result').value;

    try {
        // Replace math functions with JavaScript-friendly format
        let expression = input
            .replace(/Math.sin\(/g, 'Math.sin(')
            .replace(/Math.cos\(/g, 'Math.cos(')
            .replace(/Math.tan\(/g, 'Math.tan(')
            .replace(/Math.log\(/g, 'Math.log(')
            .replace(/Math.sqrt\(/g, 'Math.sqrt(')
            .replace(/\^/g, '**') // Replace ^ with ** for power calculation
            .replace(/Math.abs\(/g, 'Math.abs(');

        // Evaluate the expression safely
        const result = eval(expression);
        
        // Update the result field with the calculated result
        document.getElementById('result').value = result;
    } catch (error) {
        // If there's an error (e.g., invalid expression), show an error message
        document.getElementById('result').value = 'Error';
    }
}
