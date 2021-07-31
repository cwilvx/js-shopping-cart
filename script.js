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

function displayCart(grouped_items, cart_node){
    for (const [key, value] of Object.entries(grouped_items)) {
        if(value){
            
            let item_node = createNode("li");

            item_node.innerHTML = `${key} <span class="badge">${value}</span>`;
            appendNode(cart_node, item_node);

            // console.log(key, value);
        };
    };
}

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

function addItemsToCart(action){
    let container;

    if (action === "add"){ 
        container = getDiv("container");
    } else {
        container = getDiv("cart");
    }
    
    getDiv("container");

    container.addEventListener("click", function(event){
        
        let item_node = event.target;
        let item_name = item_node.innerHTML;

        if (action == "add"){
            cart.push(item_name);
        } else if (action == "remove"){
            let index = cart.indexOf(item_name);
            cart.splice(index, 1);
        }
        
        let sorted_items = getDuplicateItems(cart);

        console.log(sorted_items);

        let cart_node = getDiv("cart");
        cart_node.innerHTML = '';

        displayCart(sorted_items, cart_node);
    });
};

addItemsToCart('add');
addItemsToCart('remove');

function getDuplicateItems(array){
    let duplicates = {};

    array.map(function(item){
        if(duplicates[item]){
            duplicates[item]++;
        } else {
            duplicates[item] = 1;
        };
    });

    return duplicates;
};

// function removeElementFromcart(){
//     let container = getDiv("cart");

//     container.addEventListener("click", function(event){
//         let item_node = event.target;
//         let item_name = item_node.innerHTML;

//         

//         cart.splice(index, 1);

//         let sorted_items = getDuplicateItems(cart);

//         // console.log(sorted_items);

//         let cart_node = getDiv("cart");
//         // cart_node.innerHTML = '';

//         displayCart(sorted_items, cart_node);
//     });
// };

// removeElementFromcart();