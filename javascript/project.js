function pasword(){
	var siz=document.getElementById("word").value;
	if(siz.length<6){
		document.getElementById("pass").innerHTML="Short!";
	}
	
}
function survey(){
	confirm("Click ok to submit");
}