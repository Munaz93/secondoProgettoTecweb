// Script che controlla la form di inserimento dei libri

//funzione che cancella il testo delle form al focus
function delTextFocus(el){
	if(el.value == el.defaultValue){
		el.value="";
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//funzione che va a riempire i campi della form con esempi
function controlli(){
	//array delli controlli
	var controll = [["form_titolo", "Titolo Del Libro"],
	["form_autore", "Nome Cognome (e sigle es J.K.)"],
	["form_data", "YYYY"],
	["form_collana", "Nome Della Collana"],	
	["form_numero", "es 23"],
	["form_editore", "Nome Editore"],
	["form_voto", "0-5"]];
	//Inserimento aiuti
	for (i = 0; i < 7; i++){
		var elem = document.getElementById(controll[i][0]);
		elem.defaultValue = controll[i][1];
		elem.style.color = "#515151";
	}

	document.getElementById("form_descrizione").innerHTML = "Inserire una descrizione.";
	document.getElementById("form_recensione").innerHTML = "Inserire una breve recensione.";
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//funzione per il controllo della correttezza del campi
function valida_libro(){
	var titolo_re = /^([A-Z][a-z]*|[0-9]+)([[:space:]]([A-Z][a-z]*|[0-9]+))*/;
	var autore_re = /^([A-Za-z]\.+|[A-Za-z]+)([[:space:]]([A-Za-z]\.*|[A-Za-z]*))*/;
	var data_re = /^(19|20)[0-9][0-9]/;
	var numero_re = /^[1-9][0-9]*/;
	var collana_re = /^([A-Z][a-z]*|[0-9]+)([[:space:]]([A-Z][a-z]*|[0-9]+))*/;
	var voto_re = /^[0-5]/;
	var editore_re = /^([A-Z][a-z]*|[0-9]+)([[:space:]]([A-Z][a-z]*|[0-9]+))*/;

	var vettore = ["err_autore", "err_titolo", "err_editore", "err_data", "err_collana", "err_numero",
					"err_descrizione", "err_recensione", "err_voto"];

	//se settati svuoto gli span di errore
	for (i=0; i<9; i++) {
		if (document.getElementById(vettore[i]) != "") {
			document.getElementById(vettore[i]).innerHTML = "";
		}
	}

	var img = document.getElementById("form_img").value;
	var titolo = document.getElementById("form_titolo").value;
	var autore = document.getElementById("form_autore").value;
	var editore = document.getElementById("form_editore").value;
	var data = document.getElementById("form_data").value;
	var collana = document.getElementById("form_collana").value;
	var numero = document.getElementById("form_numero").value;
	var descrizione = document.getElementById("form_descrizione").value;
	var recensione = document.getElementById("form_recensione").value;
	var voto = document.getElementById("form_voto").value;
	//se la collana non viene inserita, come valore ottiene "nessuna"
	//e numero in collana 0
	

	//Effettua il controllo sul campo titolo
	if ((titolo == "") || (titolo == "undefined") || (titolo == "Titolo Del Libro")) {
		document.getElementById("err_titolo").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_titolo").focus();
	    document.getElementById("form_titolo").select();
	    return false;
	}
	else if (!titolo_re.test(titolo)) {
	   	document.getElementById("err_titolo").innerHTML = "Inserire il campo in modo corretto.";
	  	document.getElementById("form_titolo").focus();
	   	document.getElementById("form_titolo").select();
	   	return false;
	
	}//Effettua il controllo sul campo autore
	else if ((autore == "") || (autore == "undefined") || (autore == "Nome Cognome (e sigle es J.K.)")) {
		document.getElementById("err_autore").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_autore").focus();
	    document.getElementById("form_autore").select();
	    return false;
	}
	else if (!autore_re.test(autore)) {
	   	document.getElementById("err_autore").innerHTML = "Inserire il campo in modo corretto.";
	  	document.getElementById("form_autore").focus();
	   	document.getElementById("form_autore").select();
	   	return false;
	}//Effettua il controllo sul campo data
	else if ((data == "") || (data == "undefined") || (data == "YYYY")) {
	    document.getElementById("err_data").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_data").focus();
	    document.getElementById("form_data").select();
	    return false; 
	}
	else if (!data_re.test(data)) {
	   	document.getElementById("err_data").innerHTML = "Inserire il campo in modo corretto.";
	   	document.getElementById("form_data").focus();
	   	document.getElementById("form_data").select();
	   	return false;
	}//Effettua il controllo sul campo editore
	else if ((editore == "") || (editore == "undefined") || (editore == "Nome Editore")) {
	    document.getElementById("err_editore").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_editore").focus();
	    document.getElementById("form_editore").select();
	    return false; 
	}
	else if (!editore_re.test(editore)) {
	   	document.getElementById("err_editore").innerHTML = "Inserire il campo in modo corretto.";
	   	document.getElementById("form_editore").focus();
	   	document.getElementById("form_editore").select();
	   	return false;
	}//Effettua il controllo sul campo descrizione
	else if ((descrizione == "") || (descrizione == "undefined") || (descrizione == "Inserire una descrizione.")) {
	    document.getElementById("err_descrizione").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_descrizione").focus();
	    document.getElementById("form_descrizione").select();
	    return false; 
	}
	//Effettua il controllo sul campo recensione
	else if ((recensione == "") || (recensione == "undefined") || (recensione == "Inserire una breve recensione.")) {
	    document.getElementById("err_recensione").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_recensione").focus();
	    document.getElementById("form_recensione").select();
	    return false; 
	}//Effettua il controllo sul campo voto
	else if ((voto == "") || (voto == "undefined") || (voto == "0-5")) {
	    document.getElementById("err_voto").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_voto").focus();
	    document.getElementById("form_voto").select();
	    return false; 
	}
	else if (!voto_re.test(voto)) {
	   	document.getElementById("err_voto").innerHTML = "Inserire il campo in modo corretto.";
	   	document.getElementById("form_voto").focus();
	   	document.getElementById("form_voto").select();
	   	return false;
	}
	//Effettua il controllo sul campo collana e numero
	else if ((collana == "") || (collana == "undefined") || (collana == "Nome Della Collana")) {
	    document.getElementById("form_collana").value = "nessuna";
	    document.getElementById("form_numero").value = "0";
	    //invio i dati
	    var form = document.getElementById("form_new_libro");
	  	form.action = "insert_libro.cgi";// qui ci va l'indirizzo del file cgi che gestirà l'accesso
		form.submit();
	}
	else if (!collana_re.test(collana)) {
	   	document.getElementById("err_collana").innerHTML = "Inserire il campo in modo corretto.";
	   	document.getElementById("form_collana").focus();
	   	document.getElementById("form_collana").select();
	   	return false;
	}
	else if ((numero == "") || (numero == "undefined") || (numero == "es 23")) {
	    document.getElementById("form_collana").innerHTML = "nessuna";
	    document.getElementById("form_numero").innerHTML = "0";
	    //invio i dati
	    var form = document.getElementById("form_new_libro");
	  	form.action = "insert_libro.cgi";// qui ci va l'indirizzo del file cgi che gestirà l'accesso
		form.submit();
	}
	else if (!numero_re.test(numero)) {
	   	document.getElementById("err_numero").innerHTML = "Inserire il campo in modo corretto.";
	   	document.getElementById("form_numero").focus();
	   	document.getElementById("form_numero").select();
	   	return false;
	}
	else { //Finiti i controlli se tutto ok invio i dati
	  	var form = document.getElementById("form_new_libro");
	  	form.action = "insert_libro.cgi";// qui ci va l'indirizzo del file cgi che gestirà l'accesso
		form.submit();
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++