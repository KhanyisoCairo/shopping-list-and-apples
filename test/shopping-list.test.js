// shopping-list tests here
describe('shopping-list', function () {
    it('should  Add to list ', function () {
        var getList = ShoppingListFactroy();
        getList.addList("orange")

        assert.deepEqual(getList.getShoppingList(), [('orange')]);
    });
    it("the total amount of apples ", function() {
        var getList = ShoppingListFactroy();
        getList =input;
        var input = ('apples')
        assert.deepEqual(getList.totalShoppiingList(), 3.15);
    });
});

