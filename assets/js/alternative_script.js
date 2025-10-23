/*
    In questo script alternativo si è esplorata la possibillita di gestire tutte le interrogazioni API
    Si è usato il comando Promise.All(indagato piu in basso in commenti)
*/

const mainEL = document.querySelector("main");
//Seleziono il nodo <main> del DOM
const ulEL = document.createElement("ul");
//Creo il nodo <ul>

//--//COMMIT 1

const array_promises = [];
//conterrà tutte le 10 promesse che richiederò all'API, una voltà riempito estrarrò e gestirò ciò che mi serve

//conterrà le mail estratte da "responses", a cui a sua volta sono state passate, all'interno di oggetti, da -Promise.all

for (let i = 0; i < 10; i++) {
  array_promises.push(
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  );
  //Ogni interrogazione dell'API ritorna un oggetto, tra le cui coppie chiavi-valori, c'è quella con l'oggeto cercato(i dati)
}

//--//COMMIT 2

/*
    Promise.all è un comando che accetta diverse promesse. Quando tutte le promesse, in questo caso dentro "array_promises",
    sono risolte(passano da "panding" a "Fullfill"), allora -Promise.all risolve la sua di promessa ed impachetta i risultati delle promesse in un'unico array.
    Tale array viene passato, grazie a -.then, come argomento al parametro "responses"
    Responses sarà quindi un array di oggetti e va selezionato l'oggetto "data", nello specifico il "response" di data: esso contiene la mail"
*/

Promise.all(array_promises).then(function (responses) {
  //Passo a -Promise.all l'array di promesse; poi chiaom -.then che in caso di risoluzione di tutte le richieste si avvia
  const mails = responses.map(function (r) {
    return r.data.response;
  });

  //--//COMMIT 3

  mails.forEach(function (mail) {
    //mails ora è un array di sole email

    const liEL = document.createElement("li");
    //creo nodo <li>

    liEL.innerText = mail;
    //Inserisco nell'innerText del nodo <li> la stringa contenuta di volta in volta in mail(la stringa continene proprio una email)

    ulEL.appendChild(liEL);
    //Aggiungo il nodo <li> al nodo <ul>

    mainEL.appendChild(ulEL);
    //Aggiungo <ul> al <main>
  });
});
