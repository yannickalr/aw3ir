// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur



  var formValid = document.getElementById('bouton_envoi');
  var nom = document.getElementById('nom');
  var missNom = document.getElementById('missNom');

  formValid.addEventListener('click', validation );
  function validation(event)


function validation()

{
  //pour un champs vide
  if (nom.validity.valueMissing){
      event.preventDefault();
      missNom.textContent = 'Le nom doit contenir au moins 5 caractere';
      missNom.style.color = 'red';
  //si le format est incorrect
}  else if (nom.validity.test(prenom.value) == false ){
      event.preventDefault();
      missNom.textContent = 'format pas correct';
      missNom.style.color = 'green';

  }
  else{

  }
}
