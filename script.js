// the array to hold the list of items in the store
let items_array = ["carrots", "spinach", "cookies", "lettuce", "avocado"];

// array to hold the items in the cart
let cart = [];

// function to append a node to a container
function appendNode(parent, element){
    parent.appendChild(element);
};

// function to get a div element
function getDiv(container){
    return document.getElementById(container);
};

// function to create a node
function createNode(node){
    let element = document.createElement(node);
    return element;
};

// function to get duplicate items
function getDuplicateItems(array){
    // create an object to hold the items
    let duplicates = {};

    // loop through the array
    array.map(function(item){
        // if the item is already in the object, increment the value
        if(duplicates[item]){
            duplicates[item]++;
            // if the item is not in the object, add it
        } else {
            duplicates[item] = 1;
        };
    });

    // return the object
    return duplicates;
};

// function to display the cart
function displayCart(grouped_items, cart_node){
    // loop through the object
    for (const [key, value] of Object.entries(grouped_items)) {
        // if the value exists, add the item to the cart
        if(value){
            
            // create a node
            let item_node = createNode("li");
            // set the innerHTML
            item_node.innerHTML = `${key} <span class="badge">${value}</span>`;

            // append the node to the cart
            appendNode(cart_node, item_node);
        };
    };
};

// function to display the items in the store
function displayItems(array, div){
    // clear the div
    document.getElementById(div).innerHTML = '';

    // loop through the array
    array.map(function(item){
        // get the comtainer node
        let container = getDiv(div);

        // create a node
        let item_node = createNode("li");

        // set the innerHTML
        item_node.innerHTML = `${item}`;
        
        // append the node to the container
        appendNode(container, item_node);
    });
};

// calling the function to display the items in the store
displayItems(items_array, "container");

// function to add and remove items from the cart
function addOrRemoveItemsFromTheCart(action){
    // get the container node
    let container;
    // if the action is add, get the container node
    if (action === "add"){ 
        container = getDiv("container");
    } else {
        // if the action is remove, get the cart node
        container = getDiv("cart");
    }
    
    // add click event to the container
    container.addEventListener("click", function(event){
        // listen for the click event
        let item_node = event.target;
        // set the innerHTML
        let item_name = item_node.innerHTML;

        // if the item is already in the cart, remove it
        if (action == "add"){
            cart.push(item_name);
            // if the item is not in the cart, add it
        } else if (action == "remove"){
            let index = cart.indexOf(item_name);
            cart.splice(index, 1);
        }
        
        // get duplicates
        let sorted_items = getDuplicateItems(cart);

        // get the cart node
        let cart_node = getDiv("cart");
        // clear the cart node
        cart_node.innerHTML = '';

        // display the cart
        displayCart(sorted_items, cart_node);
    });
};

// call the function to add and remove items from the cart
addOrRemoveItemsFromTheCart('add');
addOrRemoveItemsFromTheCart('remove');
