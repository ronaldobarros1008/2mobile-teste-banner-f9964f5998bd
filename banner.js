img = new Array('1','2','3','4');
indice = 0;
setInterval("mudaImg()", 5500);

function mudaImg(i){
	if(i == 0 || i == 1 || i == 2 || i == 3){		
		indice = i;		
	}else{		
		if(indice == img.length - 1){			
			indice = 0;			
		}else{			
			indice++;			
		}		
	}	
	document.getElementById("banner_img").innerHTML = "<img src='banner_img/"+ img[indice] +".gif'>";
}