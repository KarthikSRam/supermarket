window.onload = function() {

  console.log("Sanity check");

  // Items in our shopping cart
  var shoppingCart = [];

  // Cereal items
  var cerealItems = [
  	{
  		img: 'imgs/cereal/cheerios.jpg',
  		name: 'Cheerios'
  	},
  	{
  		img: './imgs/cereal/crunch.jpg',
  		name: 'Crunch'
  	},
  	{
  		img: './imgs/cereal/fruit-loops.jpg',
  		name: 'Fruit Loops'
  	},
  	{
  		img: './imgs/cereal/puffs.jpg',
  		name: 'Puffs'
  	},
  	{
  		img: './imgs/cereal/raisin-bran.jpg',
  		name: 'Raisin Bran'
  	}
  ];

  // Meat items
  var meatItems = [
  	{
  		img: 'imgs/meats/pepperoni.jpeg',
  		name: 'Pepperoni'
  	},
  	{
  		img: './imgs/meats/chicken.jpg',
  		name: 'Chicken'
  	},
  	{
  		img: './imgs/meats/salmon.jpg',
  		name: 'Salmon'
  	},
  	{
  		img: './imgs/meats/steak.jpeg',
  		name: 'Steak'
  	},
  	{
  		img: './imgs/meats/salami.jpg',
  		name: 'Salami'
  	}
  ];

  // Candy items
  var candyItems = [
  	{
  		img: './imgs/candy/kit-kat.jpg',
  		name: 'Kit Kat'
  	},
  	{
  		img: './imgs/candy/m&ms.jpg',
  		name: 'M&M\'s'
  	},
  	{
  		img: './imgs/candy/skittles.jpg',
  		name: 'Skittles'
  	},
  	{
  		img: './imgs/candy/snickers.jpg',
  		name: 'Snickers'
  	},
  	{
  		img: './imgs/candy/twix.jpg',
  		name: 'Twix'
  	}
  ];

//Call the createShoppingMenu() function with appropriate list of items.
  document.querySelector("#cereal").addEventListener("click", function () { createShoppingMenu(cerealItems);});
  document.querySelector("#meats").addEventListener("click", function () { createShoppingMenu(meatItems);});
  document.querySelector("#candy").addEventListener("click", function () { createShoppingMenu(candyItems);});

//Create event listener that listens for clicks on shopping items.
  document.querySelector(".menu-images").addEventListener("click", addItemToCart);

  function addItemToCart(e) {
    if(e.target && e.target.matches("p")){
      var item = e.target.innerHTML;
      addToShoppingCart(item);
    }
  }

//Testing out to see if it works
  createShoppingMenu(cerealItems);

  function createShoppingMenu(menuName){

    clearShoppingMenu();
    var menuDiv = document.querySelector(".menu-images");
    var menuList = document.createElement("ul");
    for(var i = 0; i < menuName.length; i++){
      var currentItem = menuName[i];
      var newListItem = document.createElement("li");
      newListItem.setAttribute("class", "shopping-item");
      var newImage = document.createElement("img");
      newImage.setAttribute("src", currentItem.img);
      var itemName = document.createElement("p");
      itemName.innerHTML = currentItem.name;

      newListItem.appendChild(newImage);
      newListItem.appendChild(itemName);
      menuList.appendChild(newListItem);

    }
    menuDiv.appendChild(menuList);
  }

  function clearShoppingMenu(){
    //Taken from Stack Overflow (https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript)
    var myNode = document.querySelector(".menu-images");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  };

  function addToShoppingCart(item){
    var shoppingList = document.querySelector(".shopping-list");
    var newListItem = document.createElement("li");
    newListItem.innerHTML = item;
    shoppingList.appendChild(newListItem);
  }

}
