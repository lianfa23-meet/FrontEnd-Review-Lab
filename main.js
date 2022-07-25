var i=0;

var song= new Audio('songrick.mp3')

function hi(){
	if(i==0){
		document.getElementsByTagName('body')[0].style.backgroundColor = "lightblue";
		document.body.style.backgroundImage = "url('rick.jpeg')"; 
		song.play();
		i=1;
	}
	else if(i==1){
		document.getElementsByTagName('body')[0].style.backgroundColor = "lightseagreen";
		document.body.style.backgroundImage = "none"; 
		song.pause();
		i=0;
	}
}
