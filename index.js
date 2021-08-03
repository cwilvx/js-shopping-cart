let items_array = [
    {"name": "carrots", "id": 1, count: 1}, 
    {"name": "spinach", "id": 2, count: 1},
    {"name": "cookies", "id": 3, count: 1},
    {"name": "lettuce", "id": 4, count: 1},
    {"name": "avocado", "id": 5, count: 1}
];

let cart = [];

function appendNode(parent, element){
    parent.appendChild(element);
};

function getDiv(container){
    return document.getElementById(container);
};

function createNode(node){
    let element = document.createElement(node);
    return element;
};
