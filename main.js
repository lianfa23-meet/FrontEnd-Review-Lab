var i=0;
function hi(){
	if(i==0){
		document.getElementsByTagName('body')[0].style.backgroundColor = "lightblue";
		i=1;
	}
	else if(i==1){
		document.getElementsByTagName('body')[0].style.backgroundColor = "lightseagreen";
		i=0;
	}
}
