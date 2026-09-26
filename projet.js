const prompt = require('prompt-sync')();
const candidates = [
  { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independent", age: 40,
    electeurs: [] },
  { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", nom: "Chraibi", prenom: "Younes", partiPolitique: "RNI", age: 45,
    electeurs: [] },
  { cin: "GH456789", nom: "Bennani", prenom: "Salma", partiPolitique: "PAM", age: 29,
    electeurs: ["IJ567890"] },
  { cin: "IJ567890", nom: "Ouahbi", prenom: "Karim", partiPolitique: "Istiqlal", age: 52,
    electeurs: [] },
  { cin: "KL678901", nom: "Ziani", prenom: "Nadia", partiPolitique: "Independent", age: 33,
    electeurs: [] },
  { cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },
  { cin: "OP890123", nom: "Idrissi", prenom: "Meryem", partiPolitique: "PJD", age: 27,
    electeurs: [] },
  { cin: "QR901234", nom: "Berrada",prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
    electeurs: [] },
];
//ajouter candidates
function Ajoute(cin,nom,prenom,partiPolitique,age,electeurs){
	const candidas = {
		cin,
		nom,
		prenom,
		partiPolitique,
		age,
		electeurs
	};
	candidates.push(candidas)
}
// ajouter plusiers candidates


function Ajouter_Canditas(candidates ,number){
	number = Number(prompt("combien des candidas tu peux ajouter ?: "));
	for(let i = 1;i<= number;i++){
		console.log("Candidats[" + i +"] : ");
		const getCin = prompt("ajouter votre cin: ")
		const getNom = prompt("ajouter votre nom: ")
		const getPrenom = prompt("ajouter votre prenom: ")
		let getPartiPolitique = prompt("ajouter votre partiPolitique: ")
		if(getPartiPolitique === "")
			getPartiPolitique = "Indépendant"
		const getAge = Number(prompt("ajouter votre age: "))
		if(getAge < 18)
			console.log(mineur)
		const getelecteurs = [] =prompt("")
	
	Ajoute(getCin,getNom,getPrenom,getPartiPolitique,getAge,getelecteurs);
	
}
}

//Ajouter_Canditas()
//console.log(candidates)

//afficher candidates
function affiche_Candidates(candidates){
	for(let i = 0;i < candidates.length;i++){
		console.log("candidat " + (i + 1 )+ ":")
		console.log("CIN :",candidates[i].cin)
		console.log("Nom :",candidates[i].nom)
		console.log("Prenom :",candidates[i].prenom)
		console.log("partiPlitique :",candidates[i].partiPolitique)
		console.log("nombre de vaoute :",candidates[i].electeurs.length)
		console.log("-------------------------------")
	}
}
//affiche_Candidates(candidates)

function tri_candidat(candidates){
	for(let i = 0; i < candidates.length - 1;i++){
		for(let j = 0;j < candidates.length - 1 - i;j++){
			if(candidates[j].electeurs.length < candidates[j + 1].electeurs.length){
			let tmp = candidates[j]
			candidates[j] = candidates[j + 1]
			candidates[j + 1] = tmp
		}
	}
}
affiche_Candidates(candidates)
}


function Filtrer(candidates,partiPolitique){
	let arr = [];
	for(let i of candidates){
		if(i.partiPolitique === partiPolitique){
			arr.push(i);
		}
	}
	affiche_Candidates(arr)

	//candidates = candidates.filtrer(partiPolitique)
}

