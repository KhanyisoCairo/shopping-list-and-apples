// shopping-list dom code here
var getshoppingListElem = document.querySelector(".getItem");
var addBtnElem = document.querySelector(".addItemBtn");
var setMaxElem = document.querySelector(".getFruits");
var showBtnElem = document.querySelector(".showItemBtn");
var hideBtnElem = document.querySelector(".hideItemBtn");
var displayListElem = document.querySelector(".Shopping_List");

var factoryInstance = ShoppingListFactroy();

function createShoppingList(getListItem) {
    var li = document.createElement('li');
    li.innerHTML = getListItem
    var ShpList = document.querySelector(".Shopping_List");
    ShpList.appendChild(li)
}

function createList(gotListArray) {
    displayListElem.innerHTML = "";
    gotListArray.forEach(currentList => {
        createShoppingList(currentList);
    });
}

function showItemBtn() {
    var getList = document.querySelector("input[name ='Shopping_List']:checked");

    if (getList !== "") {
        var list = getList.value;
        createList(factoryInstance.addList(list))
    }
}

function hideItemBtn() {
    var getList = document.querySelector("input[name ='Shopping_List']:checked");

    if (getList == "") {
        var list = "";
        createList(factoryInstance.addList(list))
    }
}

function addItemBtnClicked() {

    if (getshoppingListElem.value !== "") {
        factoryInstance.addList(getshoppingListElem.value)

        createShoppingList(factoryInstance.getShoppingList());
        //  localStorage.setItem('shoppingList', JSON.stringify(factoryInstance.eachReg()))
    }
}
addBtnElem.addEventListener("click", addItemBtnClicked)
showBtnElem.addEventListener("click", showItemBtn);
hideBtnElem.addEventListener("click", hideItemBtn);