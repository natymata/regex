var btn=document.getElementById("btn"),
	txt=document.getElementById("txt");

	btn.addEventListener("click", validar);

	function validar () {
		patron=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/;
			   
		cadena=txt.value;

		if(patron.test(cadena)){
			alert("Esta correcto");
		}else{ 
			alert("esta incorrecto");
		}
	}


///^[A-Z|a-z]\s\d$/
/*

//FINALES
/^([A-Za-z0-9_-\s\&]*)$/,   //cadenas de texto con espacios, mayusculas y minisculas numeros y _ -
/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/,    //formato de timepo de 24 horas
/^([A-Za-z0-9_-\s\/\.]*)$/,     //validar formatos de subida de archivos para las direcciones de imagen
/^([A-Za-z0-9_=:%-\/\?\#\&\.]*)$/,    //valiadr links de youtube por ejemplo
/^([A-Za-z0-9_=:%@-\s\/\?\#\&\$\.]*)$/,    //alfanumericos y todos esos simbolos
/^\d*\s[A-Z|a-z]{2,15}$/      //cadenas que tengan una cantidad un espacio despues y una palabra de 2 a 15 letras al final
/^\d*\s\°[A-Z|a-z]{1,15}$/;      ///validar temperaturas 45 °C por ejemplo
/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/   //dd/mm/aaaa  o dd-mm-aaaa   fechas
/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])$/     //dd/mm  o dd-mm  fehas de dia y mes
*/

//FUNCION PARA CONTAR EL NUMERO DE OCURRENCIAS DE UN CARACTER O STRING DENTRO DE OTRO STRING
	// var string = "This i:::s a IS IS string that:contains:3: is.";

// the g in the regular expression says to search the whole string 
// rather than just find the first occurrence
//the i in the regular expresion search case insensitive
	// var count = (string.match(/is/gi) || []).length;
	// alert(count);


	/*album: duracion total album
			 duracion promedio canciones*/
	/*artista: duracion promedio canciones artista*/