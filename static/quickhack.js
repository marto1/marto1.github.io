function include_description(element, description) {
    element.html(element.html() +
		"<p class=\"quotebash\">" + description + "</p>");
}

$.ajax({
    url: 'https://raw.githubusercontent.com/marto1/my-ideas-list/master/hacks',
    dataType: 'text',
    success: function(data) 
    {
	var hacklist = $("#hacklist");
        var text = data.split('\n');
	var description = "";
	var v;
	text.forEach(function(line){
	    var lastel;
	    if (line.startsWith("* ")){
		if (description != "") {
		    include_description(hacklist.children().last(),
					description)
		}
		v = "<li>" + line.slice(2) + "</li>"
		hacklist.append(v);
		description = "";
	    } else {
		description += line;
	    }
	});
	//last element
	if (description != "") {
	    include_description(hacklist.children().last(),
				description)
	}
    }});