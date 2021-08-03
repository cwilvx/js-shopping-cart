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

function displayItems(items, container){
    let items_container = getDiv(container);
    items_container.innerHTML = '';
    
    for (let i = 0; i < items.length; i++){
        let item = items[i];
        
        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);
        item_node.innerHTML = item.name;

        appendNode(items_container, item_node);
    }      
}

displayItems(items_array, "items");
