const ulEl = document.createElement("ul");
//Creo, solo in memoria, il nodo <ul>
const mail_box = document.getElementById("mail");
//seleziono il nodo dove inserire la lista
const btn_list = document.getElementById("btn-list");

btn_list.addEventListener("click", function () {
  for (let i = 0; i < 10; i++) {
    //Ciclo for che vanza 10 volte
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      //interrogazione dell'API
      .then(function (response) {
        //-.then si attiva solo se la promise dell'interrogazione è risolta
        const mail = response.data.response;
        /*Response contiene un oggetto, risultato dell'interrogazione, passato a lui da -.then.
        All'interno dell'oggetto estraggo ciò che serve
      */
        const liEl = document.createElement("li");
        //Creo un nodo <li>
        liEl.innerText = mail;
        //Muto l'innerText del nodo <li>
        ulEl.appendChild(liEl);
        //Assegno il nodo <li> come figlio del nodo <ul>
      });
    mail_box.appendChild(ulEl);
    //Appendo il nodo <ul>, e relativi figli, al documento
  }
});
