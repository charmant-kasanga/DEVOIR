function creation_du_tableau() {
    var tableau_vide = [];

    while(true) {
     var element_ajoute = prompt ("saisir un element a ajouter dans le tableau");
     if (element_ajoute === null){
         break;
     }
     tableau_vide.push(element_ajoute);
    }
    return tableau_vide;
 }
 var tableau_deja_complete = creation_du_tableau();
 console.log(tableau_deja_complete);