// JavaScript Document
do{		
	var resp=prompt("Menu operaciones\n1.-Suma\n2.-Resta\n3.-Multiplicación\n4.-División\n5.-Potenciación\n6.-Radicación\n7.-Salir\nEscoja opcion:");	
    resp=Number(resp); 
switch (resp) {	
  case 0:
	alert("Elije una de las opciones");
    break;
  case 1:
	sumar();
    break;
  case 2:
	restar();
    break;
  case 3:
	multiplicar();
    break;
  case 4:
    division();
    break;
  case 5:
    potenciacion();
    break;
  case 6:
    radicacion();
    break;	
 }  
	alert("Fin del proceso")
}while(resp<7);
	alert("Proceso Finalizado")
function sumar(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var suma = a+b;
		alert("La suma es: "+suma);
}
function restar(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var resta = a-b;
		alert("La resta es: "+resta);
}
function multiplicar(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var multi = a*b;
		alert("La multiplicación es: "+multi);
}
function division(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var divi = a/b;
		alert("La división es: "+divi);
}
function potenciacion(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var pote = Math.pow(a,b);
		alert("La potenciación es: "+pote);
}
function radicacion(a,b){
	a=parseInt(prompt("Ingrese numero uno: "))
	b=parseInt(prompt("Ingrese numero dos: "))
		var radi = Math.pow(a,1/b);
		alert("La radicación es: "+radi);
}	