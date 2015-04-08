var CoinCombinations = function(input_value) {
    var amount_left = input_value  * 100;
    var output = [0, 0, 0, 0];
    var penny_count = 0;
    var nickel_count = 0;
    var dime_count = 0;
    var quarter_count = 0;

    quarter_count = Math.floor(amount_left / 25);
    output[3] = quarter_count;
    amount_left = amount_left - (quarter_count * 25);

    dime_count = Math.floor(amount_left / 10);
    output[2] = dime_count;
    amount_left -= (dime_count * 10);

    nickel_count = Math.floor(amount_left/5);
    output[1] = nickel_count;
    amount_left -= (nickel_count * 5);

    penny_count = amount_left;
    output[0] = penny_count;

    return output;
}
