function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	//ejercicio 7
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else if(telefono.length>10){
		alert("El telefono es muy largo");
		return false;
	}
	else if(telefono.length<10){
		alert("El telefono es muy corto");
		return false;
	}
	else{
		return true;
	}
	
}
function checkSubmit() {
    if(validar()){
    	document.getElementById("btnEnviar").value = "Enviando..."; 
    document.getElementById("btnEnviar").disabled = true;
    	alert("DATOS ENVIADOS CORRECTAMENTE");
	    window.location="../index.html";
    }
    return true;
}
