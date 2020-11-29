// JavaScript Document
// 以下代码用以编写导航栏动态效果
function change(myid, mode){
	document.getElementById(myid).style.display=mode;
	document.getElementById(myid).parentNode.firstChild.style.background="url(images/bg_menuAct.png)";
	document.getElementById(myid).parentNode.firstChild.style.color="gray";

	if (mode=='none'){
		document.getElementById(myid).style.display=mode;
		document.getElementById(myid).parentNode.firstChild.style.background="";
		document.getElementById(myid).parentNode.firstChild.style.color="";
	}
}