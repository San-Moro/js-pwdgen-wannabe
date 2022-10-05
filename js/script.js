// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// Input: chiedere nome all'utente
const userName = prompt("Come ti chiami?");
console.log(userName);

// Input: chiedere cognome all'utente
const userLastName = prompt("Il tuo cognome?");
console.log(userLastName);

// Input: chiedere colore preferito all'utente
const userColor = prompt("Il tuo colore preferito?");
console.log(userColor);


// Elaborazione: comporre la password
const password = `La tua password: ${userName}${userLastName}${userColor}21`;
console.log(password);


// Output: mostrare nella pagina la password generata
document.getElementById("password").innerHTML = password;