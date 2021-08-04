### Creating a shopping cart using arrays and objects in JavaScript

### Introduction
Over to you Magic!

### Preferences
To follow along with this tutorial, you are required to have understanding of the following JavaScript methods:
1. [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
3. [EventTarget.addEventListener()
](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


### The base html
Create a new file `index.html` in the working directory. Open it in your code editor and add the code below.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="wrapper">
       <div id="container">
           <h1>Shopping list</h1>
           <div id="items"></div>
       </div>
        <div id="container">
            <h1>Cart</h1>
            <div id="cart"></div>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

### Creating the items library
Create a new file `script.js` in the working directory. Open it in your code editor and add the code below.

```javascript
let items_array = [
    { "name": "carrots", "id": 1, count: 1 },
    { "name": "spinach", "id": 2, count: 1 },
    { "name": "cookies", "id": 3, count: 1 },
    { "name": "lettuce", "id": 4, count: 1 },
    { "name": "avocado", "id": 5, count: 1 }
];

let cart = [];
```

The `items_array` is an array of objects which will be displayed for selection. Each object has a `name` and `id` property. It also has a`count` property which is the number of items which will be used in the shopping cart. 

The `cart` is an empty array which will be used to store the items which are selected in the shopping cart.

### Creating base functions
Lets' create a couple of functions to make our life easier. Open the `script.js` file in your code editor and add the code below.

```javascript
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
```

We have created 3 functions. 

The `appendNode` function will append a new node to the parent node. It will take the parent node and the new node as parameters.

The `getDiv` function will return the div element with the id of a container.

The `createNode` function will create a new node and return it. It will take a node as a parameter.

We will use these functions to create the shopping list and the shopping cart.

### Displaying the shopping list
We will create a function which will display the shopping list. Open the `script.js` file in your code editor and add the code below.

```javascript
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
```

The `displayItems` function will take the items array and the container id as parameters. It will display the items in the container.

It will iterate through the items array and create a new node for each item. It will set the id of the node to the item id. The `displayItems` function will then append the node to the container. 

If you look closely, you will notice that we are using the `setAttribute` method to set the attribute of the node. `setAttribute` is an in-built method used to add attributes to a node. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).

The `displayItems` also clears the lists before updating them by setting the `innerHTML` property of the container to empty. This is done to avoid the previous items from showing up.

```javascript
items_container.innerHTML = '';
```

You should now proceed to calling the `displayItems` function to display the items list. Open the `script.js` file in your code editor and add the code below.

```javascript
displayItems(items_array, "items");
```

### A little CSS
The displayed lists look very basic at this point. Let's fix that.

Open the `index.html` file in your code editor and add the code below.

```html
<style>
    #wrapper {
        display: flex;
    }

    li{
        width: 100px;
        height: 30px;
        list-style: none;
        background-color: rgb(1, 4, 49);
        border-radius: 10px;
        margin: 5px;
        padding: 5px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #badge {
        width: 20px;
        height: 20px;
        background-color: #f0ad4e;
        color: white;
        padding: 2px 2px;
        border-radius: 5px;
        margin-left: 10px;
        text-align: center;
        float: right;
    }

    #items #badge {
        /* hides the count badge on the shopping list */
        display: none;
    }

    #container {
        margin: 50px;
    }
</style>
```
Check out the new look of your shopping list. I guess it look better.
### Adding and removing items from the cart
We will create a function which will add an item to the shopping cart. Open the `script.js` file in your code editor and add the code below.

```javascript
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
}
```

We create a function `addOrRemoveItemsFromCart` which will take an `action` as a parameter. If the action is `add`, it will add the item to the shopping cart. If the action is `remove`, it will remove the item from the shopping cart.

We use an `if else` statement to check the action. We pass the `items` container to the `takeAction` function if the action is `add` and the `cart` container if the action is `remove`. We will refer to this when listening for click events.

We will use the `getDiv` function to get the container to work with. We will use the `takeAction` function to add or remove the item from the cart.

Open the `script.js` file in your code editor and add the code below, to create the`takeAction` function.

> Note: You can create the `takeAction` function inside the `addOrRemoveItemsFromCart` function, or outside it. The difference between these two is that when you have created it inside the function, `takeAction()` will not be available outside. In short, it can't be re-used.

In this example, we will create the `takeAction` function inside the `addOrRemoveItemsFromCart` function.

```javascript
function addOrRemoveItemsFromCart(action) {
    // code in the previous block is still there

    function takeAction(container) {
        container.addEventListener("click", function (event) {
            let item_id = event.target.id;

            if (item_id !== "items" && item_id !== "badge") {
                let item = items_array.filter(function (item) {
                    return item.id == item_id;
                })[0];

                let item_in_cart = cart.filter(function (item) {
                    return item.id == item_id;
                })[0];

                if (item_in_cart == undefined) {
                    cart.push(item);
                } else if (action == "add") {
                    item_in_cart.count++;
                } else if (action == "remove") {
                    item_in_cart.count--;
                }

                console.log(cart);
                displayItems(cart, "cart");
            };
        });
    };
}
```

We are using the `addEventListener` method to add an event listener to the container. The event listener will be called when the user clicks on the item. We will use the `event.target.id` to get the item id. 

We check whether the item is already in the cart. If it is, we will either add or remove the item from the cart. We do this by incrementing or decrementing the `count` property of the item.

We finally call the `displayItems` function to display the updated list of items in the cart.

The remaining part is to call the `addOrRemoveItemsFromCart` function. Open the `script.js` file in your code editor and add the code below. 

```javascript
addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');
```

Passing `add` or `remove` as the action will:
1. Display the items array.
2. Listen for clicks on the `items` container.
3. Call the `takeAction` function to add the item to the cart.
4. Call the `displayItems` function to display the updated list of items in the cart.
5. Listen for clicks in the `cart` container.
6. Call the `takeAction` function to remove the item from the cart.

### Conclusion
Over to you Magic!