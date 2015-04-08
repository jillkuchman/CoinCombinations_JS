var CoinCombinations = function(input_value) {
    var amount_left = input_value  * 100;


    var output = "";

    var penny_count = 0;
    var nickel_count = 0;
    var dime_count = 0;

    if ((amount_left % 5) !== 0) {
        penny_count = Math.floor(amount_left % 5);
    }

    if (penny_count !== 0){
        output += penny_count + "p";
    }

    amount_left = Math.floor(amount_left - penny_count);

    if(amount_left % 10 === 0) {
        dime_count = amount_left / 10;
    }

    amount_left = Math.floor(amount_left - dime_count);

    if (amount_left % 5 === 0) {
        nickel_count = amount_left / 5;
    }

    if (nickel_count !== 0) {
        output += nickel_count + "n";
    }

    if (dime_count !== 0) {
        output += dime_count + "d";
    }


    return output;
};
