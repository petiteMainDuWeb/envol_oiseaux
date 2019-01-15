
window.addEventListener("load", function () {
	var html = "";
var birds = 30;
for (var i = 0; i < birds; i++) {
    var size = Math.random() * 1.5;
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    html += "<span style='font-size:" +size+ "em; left:"+x+"%; top:"+y+"%;'>&gt;</span>"
}
    var nodes = document.querySelectorAll('.data-picture');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML = html;
    }

});



