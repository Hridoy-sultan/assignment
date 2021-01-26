
//1st problem
function kilometerToMeter(kilometer) {
    var metar = kilometer * 1000;
    return metar;
}
var result = kilometerToMeter(12);
console.log(result);

//2nd problem
function budgetCalculator(wach, phone, laptop) {
    var fristProduct = wach * 50;
    var secoundProduct = phone * 100;
    var thirdProduct = laptop * 500;
    var totalAmount = fristProduct + secoundProduct + thirdProduct;
    return totalAmount;
}
var budget = budgetCalculator(5, 3, 2);
console.log(budget);

//3rd problem
function hotelCost(duration) {
    var days = 0;
    if (duration <= 10) {
        days = duration * 100;

    }
    else if (duration <= 20) {
        var fristSection = 10 * 100;
        var remaining = duration - 10;
        var secoundSection = remaining * 80;
        days = fristSection + secoundSection;
    }
    else {
        var fristSection = 10 * 100;
        var secoundSection = 10 * 80;
        var remaining = duration - 20;
        var thirdSection = remaining * 50;
        var days = fristSection + secoundSection + thirdSection;
    }
    return days;

}
var totalDays = hotelCost(25);
console.log(totalDays);

//4th problem
function megaFriend(Names) {
    var Max = Names[0];
    for (var i = 0; i < Names.length; i++) {
        element = Names[i];
        if (element > Max) {
            Max = element;

        }

    }
    return Max;
}
var result = megaFriend(['raju', 'rohim', 'badol', 'Rahman', 'Robin']);
console.log(result);