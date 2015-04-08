describe('CoinCombinations', function() {
    it("for one cent value, return 1 p", function() {
        expect(CoinCombinations(.01)).to.equal("1p");
    });

    it("for 1 - 4 cents, return that number of pennies", function() {
        expect(CoinCombinations(.02)).to.equal("2p");
    });

    it("for 5 cents, return 1 nickel", function() {
        expect(CoinCombinations(.05)).to.equal("1n");
    });

    it("returns both pennies and nickels when the input value can be made from pennies and nickels", function() {
        expect(CoinCombinations(.07)).to.equal("2p1n");
    });

    it("returns a dime when the input value can be made from a dime", function() {
        expect(CoinCombinations(.10)).to.equal("1d");
    });

    it("returns one dime and 1 penny when the input is 11 cents", function() {
        expect(CoinCombinations(.11)).to.equal("1p1d");
    });
});
