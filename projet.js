const prompt = require('prompt-sync')();
const candidates = [
	{
		cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independent", age: 40,
		electeurs: []
	},
	{
		cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
		electeurs: ["AB123456", "GH456789", "KL678901"]
	},
	{
		cin: "EF345678", nom: "Chraibi", prenom: "Younes", partiPolitique: "RNI", age: 45,
		electeurs: []
	},
	{
		cin: "GH456789", nom: "Bennani", prenom: "Salma", partiPolitique: "PAM", age: 29,
		electeurs: ["IJ567890"]
	},
	{
		cin: "IJ567890", nom: "Ouahbi", prenom: "Karim", partiPolitique: "Istiqlal", age: 52,
		electeurs: []
	},
	{
		cin: "KL678901", nom: "Ziani", prenom: "Nadia", partiPolitique: "Independent", age: 33,
		electeurs: []
	},
	{
		cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
		electeurs: ["QR901234"]
	},
	{
		cin: "OP890123", nom: "Idrissi", prenom: "Meryem", partiPolitique: "PJD", age: 27,
		electeurs: []
	},
	{
		cin: "QR901234", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
		electeurs: ["CD234567", "EF345678", "MN789012"]
	},
	{
		cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
		electeurs: []
	},
];
function ajouter_Candidates(){
	console.log("Ajouter un nouveau candidat");
	let cin = prompt("Entre le cin candidat: ");
	 let cinExist = false;
    for(let i = 0 ; i<candidates.length ; i++){
        if (candidates[i].cin === cin){
            cinExist = true;
        }
    }

    if(cinExist || cin.trim() === ""){
        console.log("le cin existe déjà ou le champ est vide");
        return;
    }
	let nom = prompt("entre le nom du candidat: ");
    if(nom.trim() === ""){
        console.log("tu n'as pas entrer un nom ");
        return;
    }
    let prenom = prompt("entre le prenom du candidat: ");
    if(prenom.trim() === ""){
        console.log("le champ est vide");
        return;
    }
	let age = Number(prompt("entre l'age du candidat: "));
    if(age < 18 ){
        console.log("l'age est moins que 18 ans ou tu n as pas entrer un age");
        return;
    }
	 let partiPolitique = prompt("entre la parti_politique du candidat: ");

    if(partiPolitique === ""){
        partiPolitique = "indépendant";
    }
	const candidas = {
		cin : cin,
		nom: nom,
		prenom: prenom,
		partiPolitique: parPartiPolitique, 
		age: age,
		electeurs : []
	};
	candidates.push(candidas)
	console.log("le candidat ajouté avec succes")
}
//ajouter_Candidates()
function Ajouter_Candidates(candidates, number) {
	console.log("Ajouter plusieurs candidates a la fois")
	number = Number(prompt("combien des candidas tu peux ajouter : "));
	for (let i = 1; i <= number; i++) {
		console.log("Candidats[" + i + "] : ")

		ajouter_Candidates();

	}
}
//console.log(Ajouter_Candidates())

function affiche_Candidates(candidates) {
	for (let i = 0; i < candidates.length; i++) {
		console.log("candidat " + (i + 1) + ":")
		console.log("CIN :", candidates[i].cin)
		console.log("Nom :", candidates[i].nom)
		console.log("Prenom :", candidates[i].prenom)
		console.log("partiPlitique :", candidates[i].partiPolitique)
		console.log("age :", candidates[i].age)
		console.log("nombre de vaoute :", candidates[i].electeurs.length)
		console.log("-------------------------------")
	}
}
//affiche_Candidates(candidates)

function tri_candidat(candidates) {
	for (let i = 0; i < candidates.length - 1; i++) {
		for (let j = 0; j < candidates.length - 1 - i; j++) {
			if (candidates[j].electeurs.length < candidates[j + 1].electeurs.length) {
				let tmp = candidates[j]
				candidates[j] = candidates[j + 1]
				candidates[j + 1] = tmp
			}
		}
	}
}

//tri_candidat(candidates)
//affiche_Candidates(candidates)



function Filtrer(candidates, partiPolitique) {
	let arr = [];
	for (let i of candidates) {
		if (i.partiPolitique.toLowerCase() === partiPolitique.toLowerCase()) {
			arr.push(i);
		}
	}
	affiche_Candidates(arr)

	//candidates = candidates.filtrer(partiPolitique)
}
//Filtrer(candidates,"PJD")
function Electeure() {
	let cin_electeur = prompt("saisir votre cin: ")
	let cin_candidatse = (prompt("entrer le cin de candidat sur lequel tu veux voter: "))
	//Vérifier si l'électeur a le droit de voter (si sa CIN n'existe dans aucune des listes de votes d'un candidat)
	for (let i of candidates) {
		if (i.cin === cin_candidatse) {
			i.electeurs.push(cin_electeur)
		}
	}
}



function Modifier_info_partipolitique() {
	let partiPolitique_candidat = (prompt("Donner le CIN de candidates tu veux modifies : "))
	let partiPlitique = (prompt("Donner nouvelle partiPolitique: "))
	for (let i = 0; i < candidates.length; i++) {
		if (candidates[i].cin === partiPolitique_candidat) {
			candidates[i].partiPolitique = partiPlitique
		}
	}
}
function Modifier_info_age() {
	let info_candidat = (prompt("Donner le CIN de candidates tu veux modifies : "))
	let Nage = (prompt("Donner nouvelle age: "))
	for (let i = 0; i < candidates.length; i++) {
		if (candidates[i].cin === info_candidat) {
			candidates[i].age = Nage
		}
	}
}

function Supprimer_un_candidat() {
	let supreme_Cin = (prompt("entrer le  cin de candidat tu vuex supprimer: "))
	for (let i = 0; i < candidates.length; i++) {
		if (candidates[i].cin === supreme_Cin) {
			for(let j = i ;j < candidates.length - 1 ;j++){
				candidates[j] = candidates[j + 1]
		}
		candidates.pop()
	}
	//candidates.pop()
}
}


function recherche_candidates(){
	let recherche_nom = prompt("Saisir le Nom de candidate tu veux cherché: ")
	for(let i = 0;i < candidates.length;i++){
		if(candidates[i].nom.toLowerCase() === recherche_nom.toLowerCase()){
			return candidates[i]
		}
}
}
//console.log(recherche_candidates())
function afficher_nombre(){
	console.log("nombre totel de candidats: " ,candidates.length)
}

function afficher_nombre_votes(){
	let count = 0
	for(let i = 0;i<candidates.length;i++){
		count += candidates[i].electeurs.length 
}
	console.log("le nombre total de votes est: " ,count)
}
//afficher_nombre_votes()

function Top3(){
	tri_candidat(candidates)
	if(candidates === 0 ){
		console.log("aucun candidat")
		return
	}
	if(candidates.length < 3){
		 let limite = candidates.length
	}
	else
	limite = 3
	for(let i = 0;i < limite ;i++){
		console.log((i+1) + "- " + candidates[i].nom + " " + candidates[i].prenom + " " + candidates[i].partiPolitique + " "+candidates[i].electeurs.length)
	
	}	
}
//Top3()
function parPartiPolitique(){
    console.log("Le nombre de candidat par partiPolitique :");
    const nbrCandidatParParti = {};
    for(let i = 0 ; i < candidates.length ; i++){
        let elem = candidates[i].partiPolitique;
        if(! (elem in nbrCandidatParParti)){
            nbrCandidatParParti[elem] = 1 ; 
        }else{
            nbrCandidatParParti[elem] += 1 ;
        }
    }
    for(let parti in nbrCandidatParParti){
        console.log(parti , nbrCandidatParParti[parti])
    }
}
//parPartiPolitique()
function Statistiques_élection() {
	afficher_nombre()
	afficher_nombre_votes()
	Top3()
	parPartiPolitique()
}
//Statistiques_élection()