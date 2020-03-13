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
    constructor() { }

    buildCalculator() {
        // let ids = ['7', '8', '9', 'multiply', '4', '5', '6', 'subtract', '1', '2', '3', 'add'];
        let chars = ['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+'];

        var calRow = new Element('div', 'row', 'calcrow', '');
        var calCol1 = new Element('div', 'col-4', '', '');
        var calCol2 = new Element('div', 'col-4 border border-dark bg-light', 'calculator' , '');
        var calCol3 = new Element('div', 'col-4', '' ,'');

        var outputRow = new Element('div', 'row pt-2', '', '');

        var outputCol = new Element('div', 'col-12 pr-2 bg-light display-3 text-right text-dark', 'output', '0');
        outputRow.element.appendChild(outputCol.element);
        
        var row1 = new Element('div', 'row px-2 pt-2', 'row1', '');
        
        var col1 = new Element('button', 'col-6 rounded-circle bg-dark p-2 text-white text-center', 'clear', 'Clear');
        col1.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
        row1.element.appendChild(col1.element);
        
        var col2 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', '', '');
        col2.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
        row1.element.appendChild(col2.element);
        
        var col3 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'divide', '/');
        col3.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
        row1.element.appendChild(col3.element);
        
        for (let i = 0; i < 3; i++) {
            var mainRow = new Element('div', 'row px-2', 'mainrow', '');
            for (let j = 0; j < 12; j++) {
                var mainCol = new Element('button', 'col-3 rounded-circle bg-dark text-white', chars[j], chars[j]);
                mainCol.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
                mainRow.element.appendChild(mainCol.element);
                // bind the click event to the mainCol
                // bind it to the Controller's handleEvent
    
            }
        }

        var lrow = new Element('div', 'row px-2 pb-2', 'lrow', '');

        var lcol1 = new Element('button', 'col-6 rounded-circle p-2 bg-dark text-white', '0', '0');
        lcol1.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
        lrow.element.appendChild(lcol1.element);

        var lcol2 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'decimal', '.');
        lcol2.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
        lrow.element.appendChild(lcol2.element);

        var lcol3 = new Element('button', 'col-3 rounded-circle p-2 bg-dark text-white', 'equals', '=');
        lcol3.element.addEventListener('click', this.CalcController.handleClicks().bind(this));
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
}


class CalcController {
    constructor() {}

    handleClicks()

    // need a handleEvent method that accepts the click event
    // need to tell the Model to do something like calculate
}


// need a model class to mangage state that stores the input and tell the view to update
// the controller needs store a reference to the model to process the input


class Model {
    constructor() {


    }
}



var calc = new PageView()
calc.buildCalculator()