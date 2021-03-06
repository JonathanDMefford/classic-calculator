let app = document.getElementById('app');
app.className = 'container my-5 mx-auto';


class Element {
    constructor(elementType, classes, id, htmlContent) {
        this.element = document.createElement(elementType)
        this.element.className = classes;
        this.element.id = id;
        this.element.innerHTML = htmlContent;
    }
}


class PageView {
    constructor(controller) {
        this.controller = controller;
    }

    buildCalculator() {
        let chars = ['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+'];

        var calRow = new Element('div', 'row', 'calcrow', '');
        var calCol1 = new Element('div', 'col-4', '', '');
        var calCol2 = new Element('div', 'col-4 border border-dark bg-light', 'calculator', '');
        var calCol3 = new Element('div', 'col-4', '', '');

        var outputRow = new Element('div', 'row pt-2', '', '');

        var outputCol = new Element('div', 'col-12 pr-2 bg-light display-3 text-right text-dark', 'output', 'Zero');
        // outputCol.element.innerHTML = "0"
        outputRow.element.appendChild(outputCol.element);
        // console.log(outputCol.element);
        var row1 = new Element('div', 'row px-2 pt-2', 'row1', '');

        var col1 = new Element('button', 'col-6 rounded-circle bg-dark p-2 text-white text-center', 'clear', 'Clear');
        col1.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        row1.element.appendChild(col1.element);

        var col2 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', '', '');
        col2.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        row1.element.appendChild(col2.element);

        var col3 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'divide', '/');
        col3.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        row1.element.appendChild(col3.element);

        for (let i = 0; i < 3; i++) {
            var mainRow = new Element('div', 'row px-2', 'mainrow', '');
            for (let j = 0; j < 12; j++) {
                var mainCol = new Element('button', 'col-3 rounded-circle bg-dark text-white', chars[j], chars[j]);
                mainCol.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
                mainRow.element.appendChild(mainCol.element);
                // bind the click event to the mainCol
                // bind it to the Controller's handleEvent

            }
        }

        var lrow = new Element('div', 'row px-2 pb-2', 'lrow', '');

        var lcol1 = new Element('button', 'col-6 rounded-circle p-2 bg-dark text-white', '0', '0');
        lcol1.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        lrow.element.appendChild(lcol1.element);

        var lcol2 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'decimal', '.');
        lcol2.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        lrow.element.appendChild(lcol2.element);

        var lcol3 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'equals', '=');
        lcol3.element.addEventListener('click', this.controller.handleClicks.bind(this.controller));
        lrow.element.appendChild(lcol3.element);


        calCol2.element.appendChild(outputRow.element);
        calCol2.element.appendChild(row1.element);
        calCol2.element.appendChild(mainRow.element);
        calCol2.element.appendChild(lrow.element);
        calRow.element.appendChild(calCol1.element);
        calRow.element.appendChild(calCol2.element);
        calRow.element.appendChild(calCol3.element);
        app.appendChild(calRow.element);
    }

    updateDisplay() {
        document.getElementById('output').innerHTML = this.controller.model.numString1;
    }
}


class CalcController {
    constructor(model) {
        this.model = model
    }

    handleClicks(e) {
        console.log(this)
        // console.log(buttons);
        // this.model.curr_button = e.target.textContent;
        if (!isNaN(e.target.textContent)) {
            if (this.model.numString1 == '0') {
                this.model.numString1 = e.target.textContent;
                
            } else {
                this.model.numString1 += e.target.textContent;
            }
        }


        this.model.displayButtons();
    }

    clearFunc() {
        if (e.target.textContent == 'Clear') {
            this.model.numString1 = '0';
        }
        
    }

    // need a handleEvent method that accepts the click event
}


class Model {
    constructor(view) {
        this.curr_button = "";
        this.view = null;
        this.numString1 = '';
        this.numString2 = '';
    }

    setView(view) {
        this.view = view;
    }


    displayButtons() {
        this.view.updateDisplay();
    }


}


var model = new Model();
var controller = new CalcController(model);
var calc = new PageView(controller);
model.setView(calc)
calc.buildCalculator();
model.displayButtons();