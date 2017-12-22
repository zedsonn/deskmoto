$(function(){
    //Modal Delivery App
    $("#delivery").on("click", function(){        
        appDelivery();
    });

    //Fechar Modal
    $(".close-modal-app").on('click', function(){
       closeModal();
    });

    //Cadastrar Empresa
    $("#cadastroEmpresa").on("click", function(){
       CadastroEmpresa();
    });

    //Fechar Cadastrar Empresa e voltar para a tela do app
    $("#voltarMenu").on("click", function(){
        $("#boxCadastro").addClass("box-cadastro-off");
        $(".box-delivery").css({
            display: "block",
        })
        $(".box-delivery").animate({
            opacity: "1",
        },680);
        $("#storeName").val(1);
    });

    $("#addTaxa").on("click", function(){
        var taxa = $("#cadastroTaxa").clone();
        $("#bairroCadastro").val("");
        $("#taxaCadastro").val("");
    
        $("#addBairro").append(taxa);
        
    });

    $("#removeTaxa").on("click", function(){
        
    });

});

   //Mostrar Aplicativo de Entrega
    function appDelivery(){
        window.scrollTo(0, 0);
        $("#storeName").val(1);

    $(".box-modal-app").animate({
        height: '100%',
        backgroundColor: "rgba(0,0,0,.2)",
    },700);

    $(".box-modal-app").css({
        zIndex: '350',
    });

    setTimeout(function(){
        $("#deliveryApp").animate({
            opacity: 1,
        },700);
        $("#deliveryApp").css({
            zIndex: '400',
        });
    }, 680);
    }

   //Mostrar tela de Cadastro de Empresa 
   function CadastroEmpresa(){
    $(".box-delivery").animate({
        opacity: "0",
    },680);
    
    setTimeout(function(){
        $("#boxCadastro").removeClass("box-cadastro-off");
        $("#boxCadastro").addClass("box-cadastro");
        $(".box-cadastro").animate({
            opacity: "1",
        },680);
    },682);


    $(".box-delivery").css({
        display: "none",
    });
}


    //Fechar Aplicativo
    function closeModal(){
        $("#address").val(""); 
        $("#deliveryApp").animate({
            opacity: 0,
        },700);
        setTimeout(function(){
            
        $(".box-modal-app").animate({
            height: '0',
            backgroundColor: "rgba(0,0,0,.2)",
            zIndex: "0",

        },700);
            $("#deliveryApp").css({
                zIndex: '-100',
                display: 'none',
            });
        }, 680);
    }
