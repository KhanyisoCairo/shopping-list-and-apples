// shopping list factory function here
function ShoppingListFactroy() {
    var shoppingList = [];
    var myPrice = 0;
    var myBudget = 0;
    var error = "";
    var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i

    function getbudget(getPrice) {
        myPrice += getPrice;


        return myPrice;
    }


    function getMaxKeys(getvalue) {

        var maxValue = 10;
        if (getvalue.length > maxValue) {
            return error() + "you have reached max value"
        }
        else {
            return true;
        }
    }
    function addList(getList) {
        var gotList = getList.toUpperCase().trim();
        error = ""
        var myTest = regex.test(gotList);
        if (gotList.length > 0 && gotList.length <= 10 && myTest === false) {

            if (gotList.startsWith("AP ") || gotList.startsWith("OR ") || gotList.startsWith("GU ") || gotList.startsWith("LE ")) {
                if (!shoppingList.includes(gotList)) {
                    shoppingList.push(gotList);

                }
                else {
                    error = " fruit already Been Added"
                }

            } else {
                error = "This is not a Fruit"
            }
        } else {
            error = "Enter a correct fruit"
        }
        getbudget(gotList);
    }

    function error() {
        return error;
    }

    function getShoppingList() {

        return shoppingList
    }

    function totalShoppiingList(dataList) {
    
        var list = dataList.split(', ');
        var apples = 0;
        var orange = 0;
        var guava = 0;
        var lemon = 0;

        for (var i = 0; i < list.length; i++) {
            console.log(list)
            if (list[i] === 'apples') {
                apples++;
            }
            else if (list[i] === 'orange') {
                orange++;
            }
            else if (list[i] === 'guava') {
                guava++;
            } else if (list[i] === 'lemon') {
                lemon++;

                var totalListBill = (apples * 3.15) + (orange * 1.85) + (guava * 5.20) + (lemon * 6.70);
            }
            return "R" + totalListBill.toFixed(2);
        }
    }



    return {


        addList,
        getbudget,
        getShoppingList,
        totalShoppiingList,
        error,
        getMaxKeys

    }


}