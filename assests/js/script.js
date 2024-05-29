
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


$(".enviar-correo").dblclick(function(){
    alert("Correo enviado");
})

 $(document).ready(function() {
    $(".card").click(function() {
      $(".card-text").toggle();
    });
  });

$(document).ready(function () {

    $(".p").dblclick(function () {
        $(this)();
    });


    $(".p").click(function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });



});
