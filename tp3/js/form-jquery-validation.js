function validation() {
var nomValue = document.querySelector("#name").value;
var prenomValue = document.querySelector("#surname").value;
var dateValue = document.querySelector("#birthday").value;
var mailValue = document.querySelector("#mail").value;
var addressValue = document.querySelector("#address").value;


      if (nomValue.length==0){
                   document.querySelector("#error").textContent="le champs nom est vide";
                   document.querySelector("#result").textContent="";
                }
      else

      if (nomValue.length<5){
                   document.querySelector("#error").textContent="le nom doit contenir au moins 5 caracteres";
                   document.querySelector("#result").textContent="";
                }

      else if  (prenomValue.length==0){
                   document.querySelector("#error").textContent="le champs prenom est vide";
                   document.querySelector("#result").textContent="";
                }
      else if (prenomValue.length<5){
                   document.querySelector("#error").textContent="le prenom doit contenir au moins 5 caracteres";
                   document.querySelector("#result").textContent="";
                }

     else if(dateValue.length==0){
                                 document.querySelector("#error").textContent="le champs date est vide";
                                 document.querySelector("#result").textContent="";
                              }

     else if (mailValue.length==0){
                   document.querySelector("#error").textContent="le champs mail est vide";
                   document.querySelector("#result").textContent="";
                }
     else if (mailValue.length<5){
                   document.querySelector("#error").textContent="le mail doit contenir au moins 5 caracteres";
                   document.querySelector("#result").textContent="";
                }

     else if (addressValue.length==0){
                   document.querySelector("#error").textContent="le champs address est vide";
                   document.querySelector("#result").textContent="";
                }
     else if (addressValue.length<5){
                   document.querySelector("#error").textContent="l'addresse doit contenir au moins 5 caracteres";
                   document.querySelector("#result").textContent="";
                }
                else

                if (nomValue.length>=5
                  && prenomValue.length>=5
                  && dateValue.length !==0
                  && mailValue.length>=5
                  && addressValue.length>=5)
                  {
                   document.querySelector("#result").textContent="Bienvenue" + "  " + document.querySelector("#name").value + "  " + document.querySelector("#surname").value;
                   document.querySelector("#error").textContent="";
                }

}
$('#myModal').modal("show");
$('#datepicker').datepicker({
     changeMonth: true,
     changeYear: true,
     showButtonPanel: true,
     dateFormat: 'M yy',
     maxDate: '0',
     onClose: function() {
          var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
          var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
          var date = new Date("2010-01-01");
          var currentMonth = date.getMonth();
          var currentDate = date.getDate();
          var currentYear = date.getFullYear();
    $("#datepicker" ).datepicker( "option", "maxDate", new Date(currentYear, currentMonth, currentDate));
    $(this).datepicker('setDate', new Date(iYear, iMonth, 1));
    },
     beforeShow: function(input, inst) {
          $(inst.dpDiv).addClass('calendar-off');
     }
});
