var CoinCombinations = function(input_value) {
    var amount_left = input_value  * 100;
    var output = [0, 0, 0, 0];
    var penny_count = 0;
    var nickel_count = 0;

    nickel_count = Math.floor(amount_left/5);
    output[1] = nickel_count;
    amount_left -= (nickel_count * 5);
    penny_count = Math.floor(amount_left);
    output[0] = penny_count;

    return output;
}
