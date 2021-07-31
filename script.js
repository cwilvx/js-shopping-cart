let items_array = ["carrots", "spinach", "cookies", "lettuce", "avocado"];

let cart = [];

function appendNode(parent, element){
    parent.appendChild(element);
}

function getDiv(container){
    return document.getElementById(container);
};

function createNode(node){
    let element = document.createElement(node);
    return element;
};
