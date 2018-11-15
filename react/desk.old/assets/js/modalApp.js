$(function(){

    //Modal Delivery App
    $("#delivery").on("click", function(){        
        appDelivery();
    });

    //Fechar Modal
    $(".close-modal-app").on('click', function(){
       closeModal();
    });

    //Select Empresa
    $("#storeName").on("change", function(){
        if($("#storeName").val() == "register"){
       CadastroEmpresa();
        } else if($("#storeName").val() == "1"){
            $("#boxCadastro").addClass("box-cadastro-off");
            $(".box-delivery").removeClass("box-cadastro-off");
            $(".box-delivery").animate({
                opacity: "1",
            },700);
            appDelivery();
        }
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
        $("#boxCadastro").addClass("box-cadastro-off");
        $(".box-delivery").removeClass("box-cadastro-off");
        $(".box-delivery").addClass("box-cadastro");

        $(".black-window").css({
            display: "block",
            
        });

        $(".black-window").animate({
            height: "100%",
            backgroundColor: "rgba(0,0,0,.2)",
        },700);

        $(".black-window").css({
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
        $(".box-delivery").addClass("box-cadastro-off");
        $("#boxCadastro").removeClass("box-cadastro-off");
        $("#boxCadastro").addClass("box-cadastro");
        $(".box-cadastro").animate({
            opacity: "1",
        },680);

        // $(".box-body-modal-app").css({
        //     height: "100%",
        // });

        $(".black-window").css({
            height: "100%",
        });
    },682);

}


    //Fechar Aplicativo
    function closeModal(){
        $("#address").val("");
        
        

        
        $("#deliveryApp").animate({
            opacity: 0,
        },700);
        setTimeout(function(){
            
        $(".black-window").animate({
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
