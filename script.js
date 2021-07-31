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

function displayCart(entry, count){
    let cart_node = createNode("li");
    cart_node.innerHTML = `${entry}: ${count}`;
    appendNode(container, cart_node);
};
