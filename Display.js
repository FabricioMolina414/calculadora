class Display {
    constructor(displayPreview, display) {
        this.displayPreview = displayPreview;
        this.display = display;
        this.valueActually = "";
        this.valuePreview = "";
        this.operator = undefined;
    }

    addNumber(number) {
        if (number === "." && this.valueActually.includes(".")) return;
        this.valueActually = this.valueActually + number;
        if (this.valueActually.length > 9) return;
        
        this.showNumbers();
    }

    showNumbers() {
        this.display.textContent = this.valueActually;
        this.displayPreview.textContent = this.valuePreview;
    }


    delete() {
        this.valueActually = this.valueActually.slice(0, -1);
        this.showNumbers();
    }

    reset() {
        this.valueActually = "";
        this.valuePreview = "";
        this.operator = undefined;
        this.showNumbers();
    }

    operation(operator) {
        if (this.valueActually == "") return;
        if (this.valuePreview != "") {
            this.calculate();
        }
        this.operator = operator;
        this.valuePreview = this.valueActually;
        this.valueActually = "";
    }

    calculate() {
        let answer 
        let number1 = parseFloat(this.valuePreview);
        let number2 = parseFloat(this.valueActually);
        if (isNaN(number1) || isNaN(number2)) return;

       switch (this.operator) {
            case "+":
                answer = number1 + number2;
                break;
            case "-":
                answer = number1 - number2;
                break;
            case "X":
                answer = number1 * number2;
                break;
            case "/":
                answer = number1 / number2;
                break;
            default: 
                return;
        } 

        if (answer > 1000000000) {
            answer = answer.toExponential(2);
        } 

        let textAnswer = answer.toString();

        if (textAnswer.length > 9) {
            textAnswer = textAnswer.slice(0, 9);
        }

        
        this.valuePreview = "";
        this.valueActually = textAnswer;
        this.operator = undefined;
    }
}