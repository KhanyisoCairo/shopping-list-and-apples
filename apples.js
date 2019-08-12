
function totalNumberSold(applesSoldList) {
	var soldApples = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		soldApples += applesSoldList[i].qty;
	}
	return soldApples;
}

function totalIncome(applesSoldList) {

var total = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		total += applesSoldList[i].price;
		total++;
	}
	return total;

	// var total = applesSoldList.price;
	// return total.length;
}



function totalIncomeGreenApples(applesSoldList) {
	var green = [];
	
	for (var i = 0; i < applesSoldList.length; i++) {

		if (applesSoldList[i] !== green) {
			green+= applesSoldList[i].color;
			green++;
		}
	}
	return "R" + green;
}

function totalProfit(applesSoldList, applePriceMap) {
	var totalPrice = [];
	var totalPriceMap = [];
	console
	for (var i = 0; i < applesSoldList.length; i++) {
		if (applesSoldList[i].price > applesSoldList[i]) {
			totalPrice.push(applesSoldList[i]);

		}
		return totalPrice;

	}
	for (var i = 0; i < applesSoldList.length; i++) {
		if (applesSoldList[i].price > applePriceMap) {
			totalPriceMap.push(applesSoldList[i]);

		}
		return totalPriceMap;

	}
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}