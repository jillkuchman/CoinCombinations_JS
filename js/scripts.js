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

$(document).ready(function() {
    $("form#input_value").submit(function(event) {

        var user_money =  parseFloat($("input#total_money").val());
        var results_array = CoinCombinations(user_money);

        var penny_count = results_array[0];
        var nickel_count = results_array[1];
        var dime_count = results_array[2];
        var quarter_count = results_array[3];

        $("#pennies").text(penny_count + " penn(ies)");
        $("#nickels").text(nickel_count + " nickel(s)");
        $("#dimes").text(dime_count + " dime(s)");
        $("#quarters").text(quarter_count + " quarter(s)");

        $("#result").show();
        event.preventDefault();
    });
});
