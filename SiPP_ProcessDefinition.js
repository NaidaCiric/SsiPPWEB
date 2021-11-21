
/*const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("SiPP_modules.xml", "utf8");

parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        console.log(result);
        console.log("helouuuuuuuuu");
    }
    else {
        console.log(error);
    }
});
*/
var xmlFile = 'SiPP_modules.xml';

function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", xmlFile, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            xmlFunction(this.response);
        }
    };

}
function myFunction(parameter) {
    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", parameter.type);
    document.body.appendChild(x);
    return x;
}
function makeButton(value, param) {
    let b = document.createElement('button');
    b.innerHTML = value;
    b.value = value;
    b.className = 'buttons';
    b.id = value;
    b.draggable;
    b.addEventListener('click', myFunction(param));
    document.body.appendChild(b);
    return b;
}
function xmlFunction(xml) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    let x = xmlDoc.getElementsByTagName("module");
    for (let elem of x) {
        let button = makeButton(elem.getAttribute('name'),elem.childNodes.item(0).nextSibling.getAttribute('name'));
        console.log(elem.childNodes.item(0).nextSibling.getAttribute('name'));
        console.log(elem.getAttribute('name'));
    }
}
loadDoc();

