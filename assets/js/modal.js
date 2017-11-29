//Modal Guia Rápido
$(function(){
    //Modal Guia Rápido
    $("#guiaRapido").on("click", function(){
        $("#boxModalRapido").css({
            display: "block",
        });

        $("#modalGuiaRapido").css({
            zIndex: '3500',
            opacity: '1',
        });


        $("#modalGuiaRapido").animate({
            height: '65vh',
            width: '75%',

        },700);
    });

    $(".closeModal").on('click', function(){
        $("#modalGuiaRapido").animate({
            height: '0',
            width: '0',
        },700);
        setTimeout(function(){
            $("#modalGuiaRapido").css({
                opacity: '0',
                zIndex: '-100',
            })

            $("#boxModalRapido").css({
                display: "none",
            });
        }, 680);
    });


    //Modal Guia Completo
    $("#guiaCompleto").on("click", function(){
        $("#modalGuiaCompleto").css({
            zIndex: '3500',
            opacity: '1',
        });
        $("#modalGuiaCompleto").animate({
            height: '65vh',
            width: '75%',

        },700);
    });

    $(".closeModal").on('click', function(){
        $("#modalGuiaCompleto").animate({
            height: '0',
            width: '0',
        },700);
        setTimeout(function(){
            $("#modalGuiaCompleto").css({
                opacity: '0',
                zIndex: '-100',
            })
        }, 680);
    });


});