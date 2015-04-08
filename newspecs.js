input = 17 cents
amount left = 17 cents

if 10 cents goes into the input value, calculate dimes first

17/10 = 1.7 ....... if input/10 > 1, math.floor(input/10) = number of dimes


17
number of dimes = Math.floor(amount left / 10)



amount left = (amount left) - (number of dimes * 10)

number of nickels = Math.floor(amount left / 5)

amount left = (amount left) - (number of nickels * 5)

number of pennies = amount left
