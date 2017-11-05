//TODO:Retro effects on the way

//Switch html of elements
function switch_menu(val, val2){
    var real_current = val.html();
    var real_context = val2.html();
    val.html(real_context);
    val2.html(real_current);    
}

//Expanding for page entries
function expand_title(id){
    if (id.css("display") == "none"){
    	id.css("display", "block");
    } else {
	id.css("display", "none");
    }
}