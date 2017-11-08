$.ajax({
    url: 'https://raw.githubusercontent.com/marto1/my-ideas-list/master/hacks',
    dataType: 'text',
    success: function(data) 
    {
	var hacklist = $("#hacklist");
        var text = data.split('\n');
	var v;
	text.forEach(function(line){
	    if (line.startsWith("* ")){
		v = "<li>" + line.slice(2) + "</li>"
		hacklist.append(v);
	    } else {
		
	    }
	});
    }});
