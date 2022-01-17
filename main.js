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

    for(let key in arrayStudenti[i]){
        console.log(arrayStudenti[i][key])
    }

    //console.log(arrayStudenti[i].nome + " " + arrayStudenti[i].cognome  + " " + arrayStudenti[i].età )
  
};
//console.log(primoStudente.nome);