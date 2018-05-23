// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicacion 7","OK"});
		});
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Que deseas hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
				    break;
					case 2:
					navigator.notification.vibrate(1500);
					break;			
				}
			},"Aplicacion 7","Sonar,vibrar,cancelar");
		});
	},false);
});
	