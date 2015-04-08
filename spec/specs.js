describe('CoinCombinations', function() {
    it("for one cent value, return 1 p", function() {
        expect(CoinCombinations(.01)).to.eql([1, 0, 0, 0]);
    });

    it("for 1 - 4 cents, return that number of pennies", function() {
        expect(CoinCombinations(.02)).to.eql([2, 0, 0, 0]);
    });

    it("for 5 cents, return 1 nickel", function() {
        expect(CoinCombinations(.05)).to.eql([0, 1, 0, 0]);
    });

    it("returns both pennies and nickels when the input value can be made from pennies and nickels", function() {
        expect(CoinCombinations(.07)).to.eql([2, 1, 0, 0]);
    });

    it("returns a dime when the input value can be made from a dime", function() {
        expect(CoinCombinations(.10)).to.eql([0, 0, 1, 0]);
    });

    it("returns one dime and 1 penny when the input is 11 cents", function() {
        expect(CoinCombinations(.11)).to.eql([1, 0, 1, 0]);
    });

    it("returns a count of dimes, nickels, and pennies when the input can be made from dimes, nickels, and pennies", function() {
        expect(CoinCombinations(.17)).to.eql([2, 1, 1, 0]);
    });

    it("returns a quarter for an input value of 25 cents", function() {
        expect(CoinCombinations(.25)).to.eql([0, 0, 0, 1]);
    });

    it("returns multiple coins for an input value that requires multiple coins", function() {
        expect(CoinCombinations(.42)).to.eql([2, 1, 1, 1]);
    });
});
