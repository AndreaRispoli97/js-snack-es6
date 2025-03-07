console.log('Andrea');

// Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


//Creo un array di 4 oggetti
const bikes = [
    {
        nome : 'bici di Andrea',
        peso : 5.8 ,
    },
    {
        nome : 'bici di Alessio',
        peso : 3.9 ,
    },
    {
        nome : 'bici di Stefano',
        peso : 5.5 ,
    },
    {
        nome : 'bici di Gaetano',
        peso : 5 ,
    }
]

//Stampo l'array
console.log(bikes);

//Creo una variabile dove andrò a salvare la bici più leggera

let lightBike = bikes[0];

//Creo un ciclo per confrontare il peso delle bici

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso < lightBike.peso) {
        lightBike = bikes[i];
    }
    
}

//Stampo la bici più leggera col peso

console.log(lightBike.peso);

// Stampo il nome del proprietario della bici più leggera

console.log(lightBike.nome);