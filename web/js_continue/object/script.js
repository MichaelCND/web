var obj = {
    engine: { brand: 'lada', type: { gas: 1, electric: 1 } }, body: { length: 3, width: 3 }, wheels: ['tires','discs'], doors: 4}

var engine;
var body;
var wheels;
var doors;
var electric
var engineType


function load() {
    engine = document.getElementById('engine');
    body = document.getElementById('body');
    wheels = document.getElementById('wheels');
    doors = document.getElementById('doors');
    electric = document.getElementById('engine-type').getAttribute("data-electric");
    engineType = document.getElementById('engine-type');

    for (i = 0; i < obj.wheels.length; i++) {

        var elem = document.createElement('option');
        var id = document.getElementById('select');

        elem.innerHTML = obj.wheels[i];
        id.appendChild(elem);

    }
}

function create() {

    obj.engine.brand = engine.value;
    obj.body.length = body.value;
    obj.engine.type.electric = engineType.value;
    document.getElementById('engine-type').setAttribute("data-electric", engineType.value);

    console.log(obj);
    
}

function read() {

    body.value = obj.body.length;
    engine.value = obj.engine.brand;
    electric.value = obj.engine.type.electric;
 // engineType.value = obj.engine.type.electric;
    engineType.value = document.getElementById('engine-type').getAttribute("data-electric");

    console.log(obj)
} 

function clone() {
    var clone = obj

    console.log(clone)
}