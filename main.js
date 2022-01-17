const primoStudente = {
    nome : 'Luca',
    cognome : 'Bianchi',
    età : 30
};

for(let key in primoStudente) {
    console.log(primoStudente[key]);
};


const secondoStudente = {
    nome: 'Marco',
    cognome :'Rossi',
    età : 5
};

const terzoStudente = {
    nome: 'Carlo',
    cognome:'verdi',
    età:70 
};

let arrayStudenti = [primoStudente , secondoStudente , terzoStudente];

for (let i = 0; i < arrayStudenti.length ;i++){

 

    console.log(arrayStudenti[i].nome + " " + arrayStudenti[i].cognome )
  
};

let nomeQuartoStudente = prompt("Inserisci il  nome dello studente");
let cognomeQuartoStudente = prompt("Inserisci il  cognome dello studente");
let etàQuartoStudente = prompt("Inserisci l'età dello studente");

const quartoStudente = {
    nome : nomeQuartoStudente,
    cognome : cognomeQuartoStudente,
    età : etàQuartoStudente
};

arrayStudenti.push({
    nome : nomeQuartoStudente,
    cognome : cognomeQuartoStudente,
    età : etàQuartoStudente
})

for (let i = 0; i < arrayStudenti.length ;i++){
    for(let key in arrayStudenti[i]){
        console.log(arrayStudenti[i][key])
    };
}

   // for(let key in arrayStudenti[i]){
    //     console.log(arrayStudenti[i][key])
    // };
//console.log(primoStudente.nome);