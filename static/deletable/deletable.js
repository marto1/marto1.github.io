var NUMBER = 4125673;
//track current state of number
var currnum = NUMBER.toString().split('');


function reset() {
    var m = document.getElementById('main');
    m.innerHTML = '';
    var currnum = NUMBER.toString().split('');
    main();
}

function customAlert(msg,duration)
{
 var styler = document.createElement("div");
 styler.setAttribute("style","border: solid 2px #859900;width:278;height:auto;top:50%;left:40%;background-color:#073642;color:#859900");
 styler.innerHTML = "<h3>"+msg+"</h3>";
 setTimeout(function()
 {
   styler.parentNode.removeChild(styler);
 },duration);
 var child = document.getElementById('main');
 child.parentNode.insertBefore(styler, child);
}

function winnigMessage(msg)
{
    customAlert(msg,"3000");
    setTimeout(function() {
	reset();
    },"3100");

}

function box(number) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = "<h3>" + number + "</h3>";
    return box;
}

function hidebox(e, b){
    b.setAttribute("class", "box hidden");
    setTimeout(function(){b.remove()}, 500);
}

function winning(e, b){
    var p = Number(b.getAttribute("pos"));
    currnum[p] = "_";
    checknum = "";
    for (var i = 0; i < currnum.length; i++) {
	if (currnum[i] != "_"){
	    checknum += currnum[i];
	}
    }
    if (checknum.length == 0){
	winnigMessage("You win!");
	return;
    }
    checknum = Number(checknum);
    if (!isPrime(checknum)){
	winnigMessage("You lost!");
    }
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function numbers(number) {
    var snum = number.toString();
    var numbox = document.createElement("div");
    for (var i = 0; i < snum.length; i++) {
	var b = box(snum[i]);
	b.setAttribute("pos", i);
	numbox.appendChild(b);
	b.onmousedown = function(e){
	    hidebox(e, this);
	    winning(e, this);
	};
    }
    return numbox;
}

function main() {
    var main = document.getElementById('main');    
    main.appendChild(numbers(NUMBER));
}

// main();
