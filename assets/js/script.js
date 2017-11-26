$(function(){
    //Efeito input Email Login label / Border
    $("#email").on('focus', function(){
        $("#labelLogin").css({
            transform: 'translateY(-25px)',
            transition: "all .2s ease-out",
            fontWeight: "900",
        });
        
        $("#barEmail").css({
            display: 'block',
            backgroundColor: 'red',
        });


        $("#barEmail").animate({
            height: '3px',
            width: '100%',
            borderRadius: "3px",
        },200);
      
    });

    $("#email").on('focusout', function(){

        if($("#email").val()){
            return;
        }
        $("#labelLogin").css({
            transform: 'translateY(0)',
            transition: "all .2s ease-out",
            opacity: "0.87",
            fontWeight: "400",
        });

        $("#barEmail").animate({
            height: '0',
            width: '0',
        },200);
    });


    //Efeito input Password Login label / Border


    $("#pass").on('focus', function(){
        $("#labelPass").css({
            transform: 'translateY(-25px)',
            transition: "all .2s ease-out",
            fontWeight: "900",
        });
        if($("#pass").val() == ''){
            $("#barPass").css({
                display: 'block',
                backgroundColor: 'red',
            });
    
            $("#barPass").animate({
                height: '3px',
                width: '100%',
                borderRadius: "3px",
            },200);
        }
        
        
    });


    $("#pass").keyup(function(){
            $("#barPass").css({
                backgroundColor: '#15d415',
            }, 200);
        
    });

    $("#pass").on('focusout', function(){

        if($("#pass").val()){
            return;
        }
        $("#labelPass").css({
            transform: 'translateY(0px)',
            transition: "all .2s ease-out",
            opacity: "0.87",
            fontWeight: "400",
        });

        $("#barPass").animate({
            height: '0',
            width: '0',
        },200);
    });





    //Cadastro

    $("#cadastro").on("click", function(e){
        e.preventDefault();
        $("#formRegister").css({
            display: 'block', 
         });

        $("#formLogin").fadeOut(".2s");
        
        setTimeout(function(){$("#formLogin").css({
            display: "none",
        })},200);
        
     }); 

});