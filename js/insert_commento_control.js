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
	var controll = ["form_commento", "Inserisci un commento"]
	//Inserimento aiuti
	var elem = document.getElementById(controll[0]);
	elem.innerHTML = controll[1];
	elem.style.color = "#515151";
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//funzione per il controllo della correttezza del campi
function valida_commento(){

	var errore = "err_commento";

	//se settati svuoto gli span di errore
	if (document.getElementById(errore) != "") {
	    document.getElementById(errore).innerHTML = "";
	}

	var commento = document.getElementById("form_commento").value;	

	//Effettua il controllo sul campo titolo
	if ((commento == "") || (commento == "undefined") || (commento == "Inserisci un commento")) {
		document.getElementById("err_commento").innerHTML = "Il campo è obbligatorio.";
	    document.getElementById("form_commento").focus();
	    document.getElementById("form_commento").select();
	    return false;
	}
	else { //Finiti i controlli se tutto ok invio i dati
	  	var form = document.getElementById("form_new_commento");
	  	form.action = "insert_commento.cgi";// qui ci va l'indirizzo del file cgi che gestirà l'accesso
		form.submit();
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++