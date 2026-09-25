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
	for(let i = 1;i<= Number;i++){
		console.log("Candidats[" + i +"] : ");
		const getCin = prompt("ajouter votre cin: ")
		const getNom = prompt("ajouter votre nom: ")
		const getPrenom = prompt("ajouter votre prenom: ")
		let getPartiPolitique = prompt("ajouter votre partiPolitique: ")
		if(getPartiPolitique === "")
			getPartiPolitique = "Indépendant"
		const getAge = Number(prompt("ajouter votre age: "))
		if(Age <= 18)
			console.log(minur)
		const getelecteurs = [] = prompt("ajouter votre electeur")
	}
	Ajoute(getCin,getNom,getPrenom,getPartiPolitique,getAge);

}
console.log(Ajouter_Canditas())