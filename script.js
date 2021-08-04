let items_array = [
    { "name": "carrots", "id": 1, count: 1 },
    { "name": "spinach", "id": 2, count: 1 },
    { "name": "cookies", "id": 3, count: 1 },
    { "name": "lettuce", "id": 4, count: 1 },
    { "name": "avocado", "id": 5, count: 1 }
];

let cart = [];

function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};

function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name} <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}

displayItems(items_array, "items");

function takeAction(container) {
    container.addEventListener("click", function (event) {
        let item_id = event.target.id;

        if (item_id !== "items" && item_id !== "badge") {
            let item = items_array.filter(function (item) {
                return item.id == item_id;
            })[0];

            let already_in_cart = cart.filter(function (item) {
                return item.id == item_id;
            })[0];

            if (already_in_cart == undefined) {
                cart.push(item);
            } else if (action == "add") {
                already_in_cart.count++;
            } else if (action == "remove") {
                already_in_cart.count--;
            }

            console.log(cart);
            displayItems(cart, "cart");
        };
    });
};

function addOrRemoveItemsFromCart(action) {
    let container = '';

    if (action == "add") {
        container = getDiv("items");

        takeAction(container)
    }
    else if (action == "remove") {
        container = getDiv("cart");

        takeAction(container)
    };
};

addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');