// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	result = [];
	var checkClassName = function(nodes) {
		if (nodes.classList) { //checks to see if it has a list of classes
			if (nodes.classList.contains(className)) { //checks to see if className is in list of classes
				result.push(nodes);
			}	
		}
		if (nodes.hasChildNodes()) { //checks to see if node has children
			for (var i = 0; i < nodes.children.length; i++) {
				checkClassName(nodes.children[i]);
			}
		}
	}
	checkClassName(document.body);
	return result;
 };