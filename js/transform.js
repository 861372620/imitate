// JavaScript Document
var curIndex = 0;
var curLeft = 0;
var curRight = 0;
var arr = new Array();
var left = new Array();
var right = new Array();
arr[0] = "url(images/banner01.jpg)"; 
arr[1] = "url(images/banner02.jpg)"; 
arr[2] = "url(images/banner03.jpg)";
left[0] = "url(images/left01.jpg)";
left[1] = "url(images/left02.jpg)";
left[2] = "url(images/left03.jpg)";
right[0] = "url(images/right01.png)";
right[1] = "url(images/right02.jpg)";
window.onload = function() {
	var a = document.getElementById("menu").getElementsByTagName("ul");
	var b = a[0].getElementsByTagName("li");
	for (var i = 1; i < b.length-1; i++){
		b[i].style.borderLeft="1px solid black";
	}
}

setInterval(changeImg, 5000);
function changeImg(){
	var obj = document.getElementById("header");
	var objLeft = document.getElementById("left").getElementsByTagName("li");
	var objRight = document.getElementById("right").getElementsByTagName("li");
	var a = document.getElementById("menu").getElementsByTagName("ul");
	var b = a[0].getElementsByTagName("li");
	var btn = new Array();
	btn[0] = document.getElementById("btn01");
	btn[1] = document.getElementById("btn02");
	btn[2] = document.getElementById("btn03");
	btn[curIndex].style.backgroundColor="";
	if (curIndex == arr.length-1)
		curIndex = 0;
	else
		curIndex += 1;
	obj.style.background = arr[curIndex];
	btn[curIndex].style.backgroundColor="gray";
	obj.style.backgroundSize="100% 100%";
	
	if (curLeft == left.length-1)
		curLeft = 0;
	else
		curLeft += 1;
	objLeft[0].style.background = left[curLeft];
	
	if (curRight == right.length-1)
		curRight = 0;
	else
		curRight += 1;
	objRight[5].style.background = right[curRight];
	 if (curIndex == 1)
	 	for (var i = 1; i < b.length-1; i++){
	 		b[i].style.borderLeft="1px solid red";
		}
	 else if (curIndex == 2)
	 	 for (var i = 1; i < b.length-1; i++)
		 	b[i].style.borderColor="blue";
	 else
	 	 for (var i = 1; i < b.length-1; i++)
	 	 		b[i].style.borderColor="black";
}
function changeIndex(index){
	var obj = document.getElementById("header");
	var btn = new Array();
	var a = document.getElementById("menu").getElementsByTagName("ul");
	var b = a[0].getElementsByTagName("li");
	btn[0] = document.getElementById("btn01");
	btn[1] = document.getElementById("btn02");
	btn[2] = document.getElementById("btn03");
	btn[curIndex].style.backgroundColor="";
	obj.style.background = arr[index];
	obj.style.backgroundSize="100% 100%";
	if (index == 1)
		for (var i = 1; i < b.length-1; i++){
			b[i].style.borderLeftColor="red";
		}
	else if (index == 2)
		for (var i = 1; i < b.length-1; i++)
			b[i].style.borderColor="blue";
	else
		for (var i = 1; i < b.length-1; i++)
			b[i].style.borderColor="black";
	curIndex = index;
}