//Month is 1 based
function get_days_in_month(year, month) {
    return new Date(year, month, 0).getDate();
}

//expiration - expiration in years
function deprication_percent(expiration) {
    return (100.0/expiration)
}

//price - price of product 
//percent - deprication percent
function deprication_sum(price, percent) {
    price = price/100
    return price*percent
}

//sum - sum of deprication
function deprication_day_koef(sum) {
    return sum/365.0
}

function deprication_years_koef(expiration, price){
    return price/(expiration*12);
}

//koef - koeficient from deprication_day_koef
//returns - array of deprication sums
function deprication_sum_for_month(koef, year) {
    var res = []
    for(var i = 0; i < 12; i++){
	res.push(get_days_in_month(year, i)*koef)
    }
    return res
}

function deprication_sum_for_month_with_offset(koef, date) {
    var res = []
    var i = date.getMonth()
    var days = date.getDate()
    var inMonth = get_days_in_month(date.getFullYear(), parseFloat(i)+1);
    res.push((inMonth-days+1)*(koef/inMonth))
    i += 1
    if (i != 12) {
	console.log(i)
	for(; i < 12; i++){
	    console.log(get_days_in_month(date.getFullYear(), i+1))
	    res.push(koef)
	}
    }
    return res
}

function deprication_calculate(date, expiration, price){
    return deprication_sum_for_month_with_offset(
	deprication_years_koef(expiration, price), date);
}

function deprication_main(date, expiration, price){
    console.log(deprication_calculate(date, expiration, price))
}

$(function() {
    $.datepicker.setDefaults({
	dateFormat: "yy-mm-dd"
    });
    $("#datech").datepicker();
    $("#calcdep").click(function () {
	var arr = deprication_calculate(new Date($("#datech").val()),
					parseFloat($("#expirch").val()),
					parseFloat($("#pricech").val()))
	$("#reslist").empty()
	arr.forEach(function (el){
	    $("#reslist").append('<li>' + el + '</li>');
	})
    })
});




//date, expiration, price
