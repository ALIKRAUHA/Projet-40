
liensPages=["pageSystemOfADown.html", "pageMika.html","pageMuse.html","pageAiden.html","pageTheBeatles.html","pageBooba.html"];
nomColonnes=[["Nom", "Chanteur","Origine","Genre", "Lien vers les albums"],
["Nom", "Pistes","Sortie", "Genre"] 
];
ajaxGet("http://145.239.32.254:8081/music/groupes", miseEnObjetGroupes);


function miseEnObjetGroupes(objet){
	var objetJS= JSON.parse(objet);
	nomsTableau( 0);
	miseEnFormeTableau(objetJS);
}
function nomsTableau( groupes){

//caption??
//retour aux groupes pour albums
	var tableauElt=document.getElementById("tableau");
	var ligneElt=document.createElement("tr");
	for(var tour =0; tour!==nomColonnes[groupes].length; tour++){
		var colonne111=document.createElement("th");
		colonne111.id="0.0."+tour;
		colonne111.textContent=nomColonnes[groupes][tour];
		ligneElt.appendChild(colonne111);
	}
	ligneElt.id="0.0";
	tableauElt.appendChild(ligneElt);


}
function miseEnFormeTableau(objet){
	console.log("dedans");
	var nombreDeColonnes=objet[0].length;
	var tableauElt=document.getElementById("tableau");


	console.log(tableauElt);
	for(var tour=0; tour!==objet.length; tour++){
		var ligneElt=document.createElement("tr");
		var colonne111=document.createElement("th");
		var colonne112=document.createElement("th");
		var colonne113=document.createElement("th");
		var colonne114=document.createElement("th");
		var colonne115=document.createElement("th");
		var aElt=document.createElement("a");


		colonne111.id="1."+tour+".1";
		colonne112.id="1."+tour+".2";
		colonne113.id="1."+tour+".3";
		colonne114.id="1."+tour+".4";
		colonne115.id="1."+tour+".5";
		aElt.href=liensPages[tour];
		aElt.textContent=objet[tour].nom;

		
		
		colonne111.textContent=objet[tour].nom;
		colonne112.textContent=objet[tour].chanteur;
		colonne113.textContent=objet[tour].origin;
		colonne114.textContent=objet[tour].genre;
		colonne115.appendChild(aElt);

		ligneElt.appendChild(colonne111);
		ligneElt.appendChild(colonne112);
		ligneElt.appendChild(colonne113);
		ligneElt.appendChild(colonne114);
		ligneElt.appendChild(colonne115);

		ligneElt.id="1."+tour;
		tableauElt.appendChild(ligneElt);
	}

}


