let display = document.getElementById("display");
            let currentNumber = "";
            let currentOperator = "";
            let currentFunction = "";
            let result = 0;
    
            function addNumber(num) {
                currentNumber += num;
                display.value = currentNumber;
            }
    
            function addOperator(operator) {
                currentOperator = operator;
                result = parseFloat(currentNumber);
                currentNumber = "";
            }
    
            function addFunction(func) {
                currentFunction = func;
                calculateFunction();
            }
			
			function addDecimal() {
				if (currentNumber.indexOf('.') === -1) {
					currentNumber += ".";
				}
				display.value = currentNumber;
			}

            
    
            function calculateFunction() {
                switch(currentFunction) {
                    case "sin":
                        result = Math.sin(parseFloat(currentNumber));
                        break;
                    case "cos":
                        result = Math.cos(parseFloat(currentNumber));
                        break;
                    case "tan":
                        result = Math.tan(parseFloat(currentNumber));
                        break;
                    case "log":
                        result = Math.log10(parseFloat(currentNumber));
                        break;
                    case "sqrt":
                        result = Math.sqrt(parseFloat(currentNumber));
                        break;
                    case "exp":
                        result = Math.exp(parseFloat(currentNumber));
                        break;
                }
                display.value = result;
                currentNumber = result.toString();
                currentFunction = "";
            }
    
            function calculate() {
                if (currentFunction !== "") {
                    calculateFunction();
                }
                else {
                    switch(currentOperator) {
                        case "+":
                            result += parseFloat(currentNumber);
                            break;
                        case "-":
                            result -= parseFloat(currentNumber);
                            break;
                        case "*":
                            result *= parseFloat(currentNumber);
                            break;
                        case "/":
                            result /= parseFloat(currentNumber);
                            break;
                    }
                    display.value = result;
                    currentNumber = "";
                    currentOperator = "";
                }
            }
    
            function clearDisplay() {
                display.value = "";
                currentNumber = "";
                currentOperator
            }
             