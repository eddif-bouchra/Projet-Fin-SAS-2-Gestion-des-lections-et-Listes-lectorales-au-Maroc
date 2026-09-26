const prompt = require('prompt-sync')();
const candidates = []
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

function Ajouter_Canditas(){
	const number = Number(prompt("combien des candidas tu peux ajouter ?: "));
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
Ajouter_Canditas()
console.log(candidates)


function affiche_Candidates(candidates){
	for(let i = 0;i < candidates.length;i++){
		console.log("candidat " + i + 1 + ":")
		console.log("CIN :",candidates[i].cin)
		console.log("Nom :",candidates[i].nom)
		console.log("Prenom :",candidates[i].prenom)
		console.log("Parti :",candidates[i].partiPolitique)
		console.log("Age :",candidates[i].age)
		console.log("Nombre de votes :",candidates[i].electeurs.length)
		console.log("-------------------------------")
	}
}
affiche_Candidates(candidates)