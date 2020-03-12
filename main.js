let app = document.getElementById('app');
app.className = 'container';


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
        var row1 = new Element('div', 'row', 'row1', '');
        var col1 = new Element('div', 'col-6', 'clear', 'Clear');
        var col2 = new Element('div', 'col-3', '', '');
        var col3 = new Element('div', 'col-3', 'divide', '/');
        let numbers = 1;
        var mainRow = new Element('div', 'row', '', '');
        for (let i = 0; i < 9; i++) {
            var mainCol = new Element('div', 'col-9', '', numbers);
            numbers++;
        }
    
        row1.Element.appendChild(col1.Element);
        row1.Element.appendChild(col2.Element);
        row1.Element.appendChild(col3.Element);
        app.appendChild(row1.Element);
    
    
    }

}





var calc = new PageView()
calc.buildCalculator()