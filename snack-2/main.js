console.log('Andrea');

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un array di oggetti di squadre di calcio con diverse proprietà

const team = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0,
    },
]

//Stampo l'array con oggetti

console.log(team);

//Vado a creare dei numeri random per le riempire le proprietà punti e falli

//Creo una funzione che mi restituisce un numero random

const random = function(){
    return Math.floor(Math.random() * 50) + 1;
}

//Stampo il numero random per controllare

console.log(random());

//Vado ad inserire i numeri nelle proprità dell'oggetto

for (let i = 0; i < team.length; i++){
    team[i].punti = random();
    team[i].falli = random();
}

//Stampo l'array con i numeri random inclusi

console.log(team);

// Creiamo un nuovo array che includerà solo il nome e i falli

const newTeam = [];

for (let i = 0; i < team.length; i++){
    let {nome, falli} = team[i];
    newTeam.push({nome, falli});
}

console.log(newTeam);