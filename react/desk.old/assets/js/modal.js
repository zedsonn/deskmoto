//Modal Guia Rápido
$(function(){
    $("#loading").remove();
    
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

    $(".closeModal, #btnXModal").on('click', function(){
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

    $(".closeModal, #btnXModal").on('click', function(){
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


    //Modal Termos de Registro e Privacidade
    $(".setModalPolicy").on("click", function(){
        
        //Modal Termos de Registro

        if(this.id == 'termRegisterModal' || (this).id == 'termModal'){
            $("#termsRegisterModal").css({
                zIndex: '3500',
                opacity: '1',
            });
            $("#termsRegisterModal").animate({
                height: '65vh',
                width: '75%',
    
            },700);
    
        $(".closeModal , #btnXModal").on('click', function(){
            $("#termsRegisterModal").animate({
                height: '0',
                width: '0',
            },700);
            setTimeout(function(){
                $("#termsRegisterModal").css({
                    opacity: '0',
                    zIndex: '-100',
                })
            }, 680);
        });
    } else if(this.id == 'policyModal' || this.id == 'policyRegisterModal'){
        $("#policyRegisterModal").css({
            zIndex: '3500',
            opacity: '1',
        });
        $("#policyRegisterModal").animate({
            height: '65vh',
            width: '75%',

        },700);

    $(".closeModal, #btnXModal").on('click', function(){
        $("#policyRegisterModal").animate({
            height: '0',
            width: '0',
        },700);
        setTimeout(function(){
            $("#policyRegisterModal").css({
                opacity: '0',
                zIndex: '-100',
            })
        }, 680);
    });
}
    
     //Modal de Politica de Privacidade
     $("#policyRegister").on("click", function(){
        $("#policyRegisterModal").css({
            zIndex: '3500',
            opacity: '1',
        });
        $("#policyRegisterModal").animate({
            height: '65vh',
            width: '75%',

        },700);
    });

    //Modal Simulador de justiça
    $("#boxDireito").on("click", function(){
        console.log("oi");
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

    //Fechar Modal
    $(".closeModal, #btnXModal").on('click', function(){
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

    $(".closeModal , #btnXModal").on('click', function(){
        $("#policyRegisterModal").animate({
            height: '0',
            width: '0',
        },700);
        setTimeout(function(){
            $("#policyRegisterModal").css({
                opacity: '0',
                zIndex: '-100',
            })
        }, 680);

    });
});


});