describe('CoinCombinations', function() {
    it("for one cent value, return 1 p", function() {
        expect(CoinCombinations(.01)).to.equal("1 p");
    });

    it("for 1 - 4 cents, return that number of pennies", function() {
        expect(CoinCombinations(.02)).to.equal("2 p");
    });

    it("for 5 cents, return 1 nickel", function() {
        expect(CoinCombinations(.05)).to.equal("1 n");
    });

});
