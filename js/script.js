// Chiedere all'utente nome,cognome e colore preferito

const UserName = prompt('Come ti chiami?')
const UserUsername = prompt('Qual è il tuo cognome?')
const UserColor = prompt('Qual è il tuo colore preferito?')

console.log(UserName);
console.log(UserUsername);
console.log(UserColor);

// Combiniamo le risposte in una password aggiungendo il numero 21 finale
const UserPassword = UserName + UserUsername + UserColor + '21'
console.log(UserPassword);

// Stampare il risultato
document.getElementById('user-password').innerHTML = `La tua password è ${UserPassword}`