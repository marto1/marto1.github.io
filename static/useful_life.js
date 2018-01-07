function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

function days_in_month(date) {
  return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

function useful_life_calculate(startd, endd, repaird, sumtotal,
			       adjsum, adjdsum){
    var useful_years = endd.getFullYear() - startd.getFullYear();
    var result = useful_years*12;
    result -= (repaird.getFullYear() - startd.getFullYear())*12;
    result += startd.getMonth() - repaird.getMonth() + 1;
    result -= (days_in_month(startd) - startd.getDate() + 1) / days_in_month(startd);
    result = result / 12;
    //daydiff(new Date(repaird.getFullYear(), 0, 1, 0, 0, 0, 0), repaird)
    var days_total = (endd.getFullYear() - repaird.getFullYear())*12 + 1;
    var result2 = (sumtotal / days_total).toFixed(4);
    var result3 = (result2/days_in_month(repaird));
    if (repaird.getDate() != 1){
	result3 = result3*(repaird.getDate() - 1);
    }
    var result4 = ((adjsum - adjdsum) / days_total);
    result4 = result4 / days_in_month(repaird);
    if (repaird.getDate() != 1){
	result4 = result4*(repaird.getDate() - 1);
    }
    return [result.toFixed(4), result2,
	    result3.toFixed(4), result4.toFixed(4)];
}

$(function() {
    $.datepicker.setDefaults({
	dateFormat: "yy-mm-dd"
    });
    $("#startch").datepicker();
    $("#endch").datepicker();
    $("#repairch").datepicker();
    $("#calcdep").click(function () {
    	var result = useful_life_calculate(new Date($("#startch").val()),
    					new Date($("#endch").val()),
    					new Date($("#repairch").val()),
					parseFloat($("#deprsum").val()),
					parseFloat($("#adjsum").val()),
					parseFloat($("#adjdsum").val()));
	$("#result").text(result[0] + " years. " + result[1] + " of deprication per month. " + result[2] + " deprication fix. " + result[3] + " yearly adjusted sum.");
    });
});
