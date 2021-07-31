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

function displayItems(array, div){
    document.getElementById(div).innerHTML = '';
    array.map(function(item){
        let container = getDiv(div);
        let item_node = createNode("li");

        item_node.innerHTML = `${item}`;
        
        appendNode(container, item_node);
    });
};

displayItems(items_array, "container");

function addItemsToCart(){
    let container = getDiv("container");

    container.addEventListener("click", function(event){
        
        let item_node = event.target;
        let item_name = item_node.innerHTML;

        cart.push(item_name);

        let sorted_items = getDuplicateItems(cart);

        console.log(sorted_items);

        let cart_node = getDiv("cart");
        cart_node.innerHTML = '';

        for (const [key, value] of Object.entries(sorted_items)) {
            if(value){
                
                let item_node = createNode("li");

                item_node.innerHTML = `${key} <span class="badge">${value}</span>`;
                appendNode(cart_node, item_node);

                console.log(key, value);
            };
        };
    });
};

addItemsToCart();
