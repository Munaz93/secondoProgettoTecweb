// Script che controlla la form di accesso

// scripr che controlla i cookies nella pagina index
//=======================================================================
//=======================================================================
// funzione che legge il cookie con nome nomeCookie
function leggiCookie(nomeCookie)
{
  if (document.cookie.length > 0)
  {
    var inizio = document.cookie.indexOf(nomeCookie + "=");
    if (inizio != -1)
    {
      inizio = inizio + nomeCookie.length + 1;
      var fine = document.cookie.indexOf(";",inizio);
      if (fine == -1) fine = document.cookie.length;
      return unescape(document.cookie.substring(inizio,fine));
    }else{
       return false;
    }
  }
  return false;
}
//=======================================================================
// funzione che mostra il bottone d'accesso se non c'è il cookie desiderato
// altrimenti mostra il nome dell'utente e il bottone logout
function cookie_control()
{
	if(navigator.cookieEnabled){ // i cookie sono attivi
		var username = leggiCookie('LDV');
	
		if(username){
			document.getElementById("acces").innerHTML = "";
	
			document.getElementById("loggato").innerHTML = "<p>Benvenuto <strong>" + username + "</stong> </p><a href=\"cgi-bin/logout_control.cgi\">Logout</a>";
			
			var tipo = leggiCookie('LDVtype');
			if(tipo == "admin"){
				var newli = document.createElement('li');
				newli.innerHTML = "<a href=\"cgi-bin/admin.cgi\">Amministrazione</a>";
				document.getElementById("navul").appendChild(newli);
			}
		}
	}
	else{ // i cookie non sono attivi
		window.alert("Per una navigazione corretta abilitare i cookies!"); // crea pop-up di avvertimento
	}
}
//=======================================================================
//=======================================================================

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
var controll = [["form_autore", "J.K. Rowling, Rowling"],
["form_titolo", "Titolo del libro"],
["form_collana", "Nome della collana"]];
//Inserimento aiuti
for (i = 0; i < 3; i++){
var elem = document.getElementById(controll[i][0]);
elem.defaultValue = controll[i][1];
elem.style.color = "#515151";
}

//document.getElementById("form_useremail").focus();
//document.getElementById("form_useremail").select();
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//funzione per il controllo della correttezza dei campi delle 3 form
function field_control(el)
{
	var selected = document.getElementById(el).value;
	
	//creo le espressioni regolari
	var autore_re = /^([A-Za-z]\.+|[A-Za-z]+)([[:space:]]([A-Za-z]\.*|[A-Za-z]*))*/;

	//array degli id span
	var vettore = ["author_err", "title_err", "collana_err"];

	//se settati svuoto gli span di errore
	for (i=0; i<3; i++) {
		if (document.getElementById(vettore[i]) != "") {
			document.getElementById(vettore[i]).innerHTML = "";
		}
	}

	
	if (el == "form_autore"){
		//Effettua il controllo sul campo autore
		if (( selected == "") || (selected == "undefined") || (selected == "J.K. Rowling, Rowling")) {
			document.getElementById(vettore[0]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_autore").focus();
			document.getElementById("form_autore").select();
			return false;
		}else if (!autore_re.test(selected)) {
			document.getElementById(vettore[0]).innerHTML = "Inserire il campo in modo corretto.";
			document.getElementById("form_autore").focus();
			document.getElementById("form_autore").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_autore");
			form.action = "cgi-bin/src_control.cgi";
			form.submit();
		}

	}
	else if (el == "form_titolo"){
		//Effettua il controllo sul campo titolo
		if ((selected == "") || (selected == "undefined") || (selected == "Titolo del libro")) {
			document.getElementById(vettore[1]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_titolo").focus();
			document.getElementById("form_titolo").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_titolo");
			form.action = "cgi-bin/src_control.cgi";
			form.submit();
		}
	}
	else{
		//Effettua il controllo sul campo collana
		if ((selected == "") || (selected == "undefined") || (selected == "Nome della collana")) {
			document.getElementById(vettore[2]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_collana").focus();
			document.getElementById("form_collana").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_collana");
			form.action = "cgi-bin/src_control.cgi";
			form.submit();
		}
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//funzione per il controllo della correttezza dei campi delle 3 form riservta alla ricerca libri dell'amministratore
function field_control_admin(el)
{
	var selected = document.getElementById(el).value;
	
	//creo le espressioni regolari
	var autore_re = /^([A-Za-z]\.+|[A-Za-z]+)([[:space:]]([A-Za-z]\.*|[A-Za-z]*))*/;

	//array degli id span
	var vettore = ["author_err", "title_err", "collana_err"];

	//se settati svuoto gli span di errore
	for (i=0; i<3; i++) {
		if (document.getElementById(vettore[i]) != "") {
			document.getElementById(vettore[i]).innerHTML = "";
		}
	}

	
	if (el == "form_autore"){
		//Effettua il controllo sul campo autore
		if (( selected == "") || (selected == "undefined") || (selected == "J.K. Rowling, Rowling")) {
			document.getElementById(vettore[0]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_autore").focus();
			document.getElementById("form_autore").select();
			return false;
		}else if (!autore_re.test(selected)) {
			document.getElementById(vettore[0]).innerHTML = "Inserire il campo in modo corretto.";
			document.getElementById("form_autore").focus();
			document.getElementById("form_autore").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_autore");
			form.action = "elimina_libro_control.cgi";
			form.submit();
		}

	}
	else if (el == "form_titolo"){
		//Effettua il controllo sul campo titolo
		if ((selected == "") || (selected == "undefined") || (selected == "Titolo del libro")) {
			document.getElementById(vettore[1]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_titolo").focus();
			document.getElementById("form_titolo").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_titolo");
			form.action = "elimina_libro_control.cgi";
			form.submit();
		}
	}
	else{
		//Effettua il controllo sul campo collana
		if ((selected == "") || (selected == "undefined") || (selected == "Nome della collana")) {
			document.getElementById(vettore[2]).innerHTML = "Inserire il parametro!";
			document.getElementById("form_collana").focus();
			document.getElementById("form_collana").select();
			return false;
		}//Finiti i controlli se tutto ok invio i dati
		else {
			var form = document.getElementById("ricerca_collana");
			form.action = "elimina_libro_control.cgi";
			form.submit();
		}
	}
}
