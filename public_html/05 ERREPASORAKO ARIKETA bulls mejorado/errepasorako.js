function tamanoFuente(x){
		var Ps = document.getElementsByName("textop");
				for (var i = 0; i < Ps.length; i ++)
						Ps[i].style.fontSize=x
	

}

function Balidatu(){
	if (CamposLlenos() && IzenaOndo() && AdinaOndo() && BalorazioaOndo())
		{ alert ("Datu zuzenak. Eskerrik asko!!");
			return true;
		}
		else 
		{ 
			return false;
		}
}

function CamposLlenos(){
	var miNombre=document.getElementById("Izena")
	var miEdad=document.getElementById("Adina")
	var miValoracion=document.getElementById("Balorazioa")
	if( miNombre.value==null || miNombre.value.length==0 || miEdad.value==null || miEdad.value.length==0 || miValoracion.value==null || miValoracion.value.length==0)
		{alert("El campo no puede estar vacío");
		return false;
		}
	else
		{ return true; }

}

function IzenaOndo(){
	var miNombre=document.getElementById("Izena")

	if (/^([A-Za-z]+$)/.test(miNombre.value))					//EXPRESION REGULAR ****************
		 return true; 
	else
		return false;
}

function AdinaOndo(){
	var miEdad=document.getElementById("Adina")
	if(/^\d{1,2}$/.test(miEdad.value))
		{if (miEdad.value>0 && miEdad.value<81)
			{return true;}
		else {alert("Adina 0 eta 80 rangoan egon behar da");return false;}}
	else 
		{alert("Adinak bi digito izan behar ditu");return false;}
}

function BalorazioaOndo(){
	var miValoracion=document.getElementById("Balorazioa")
	if(/^\d{1,2}$/.test(miValoracion.value))
		{if (miValoracion.value>=0 && miValoracion.value<11)
			{return true;}
		else {alert("Balorazioa 0 eta 10 rangoan egon behar da");return false;}}
	else 
		{alert("Balorazioak bi digito izan behar ditu");return false;}
}

function bulls(){
	var nireIrudia=document.getElementById("irudia");
	nireIrudia.src="bulls.png"
}
function celtics(){
	var nireIrudia=document.getElementById("irudia");
	nireIrudia.src="celtics.jpg"
}

function CrearBotones(){
   
    var vpalabra=document.getElementById("palabra").value;
    vnumCaracteres=vpalabra.length;  
    
    for(i=0;i<vnumCaracteres;i++)
    {
                boton = document.createElement("button");
                caracter=vpalabra.charAt(i);
                boton.innerHTML = caracter
                boton.setAttribute("id", "btn"+i);
                document.getElementById("ZonaBotones").appendChild(boton);
                        
}

}
