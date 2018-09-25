liensPages=["pageSystemOfADown.html", "pageMika.html","pageMuse.html","pageAiden.html","pageTheBeatles.html","pageBooba.html"];
nomColonnes=[["Nom", "Chanteur","Origine","Genre", "Lien vers les albums"],
["Nom", "Pistes","Sortie", "Genre"] 
];
ajaxGet("http://145.239.32.254:8081/music/albums", miseEnObjetGroupes);


function miseEnObjetGroupes(objet){
	var objetJS= JSON.parse(objet);
	nomsTableau(1 );
	miseEnFormeTableau(objetJS, 5);
}

function nomsTableau( groupes){

//caption??
//retour aux groupes pour albums
	var tableauElt=document.getElementById("tableau");
	var ligneElt=document.createElement("tr");
	console.log(nomColonnes[groupes].length);
	for(var tour =0; tour!==nomColonnes[groupes].length; tour++){
		console.log(tour);
		var colonne111=document.createElement("th");
		colonne111.id="0.0."+tour;
		colonne111.textContent=nomColonnes[groupes][tour];
		ligneElt.appendChild(colonne111);
	}
	ligneElt.id="0.0";
	tableauElt.appendChild(ligneElt);


}
function miseEnFormeTableau(objet,artiste){
	console.log("dedans");
	var tableauElt=document.getElementById("tableau");


	console.log(tableauElt);
	for(var tour=0; tour!==objet.length; tour++){
		if (objet[tour].artiste===artiste){
			var ligneElt=document.createElement("tr");
			var colonne111=document.createElement("th");
			var colonne112=document.createElement("th");
			var colonne113=document.createElement("th");
			var colonne114=document.createElement("th");
			var imgElt=document.createElement("img");

			colonne111.id="1."+tour+".1";
			colonne112.id="1."+tour+".2";
			colonne113.id="1."+tour+".3";
			colonne114.id="1."+tour+".4";
			imgElt.id="1."+tour+".4.1";
			imgElt.src= objet[tour].couverture;	
			
			colonne111.textContent=objet[tour].nom;
			colonne112.textContent=objet[tour].pistes;
			colonne113.textContent=objet[tour].sortie;

			colonne114.appendChild(imgElt);
			ligneElt.appendChild(colonne111);
			ligneElt.appendChild(colonne112);
			ligneElt.appendChild(colonne113);
			ligneElt.appendChild(colonne114);

			ligneElt.id="1."+tour;
			tableauElt.appendChild(ligneElt);
		}
	}

}


