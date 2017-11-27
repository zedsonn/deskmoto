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
        $("#formLogin").animate({
            opacity: 0,
        }, 200);

        setTimeout(function(){
            $("#formLogin").css({
                display: 'none',
            });
        },200);


        $(".box-form-register").css({
            display: 'block',
        });

        $(".box-form-register").animate({
            opacity: 1,
        }, 250);    
    });


//Form Cadastro

//Efeito input Email Register label / Border

$("#emailRegister").on('focus', function(){
    $("#labelEmailRegister").css({
        transform: 'translateY(-25px)',
        transition: "all .2s ease-out",
        fontWeight: "900",
        color: 'white',
    });
    
    $("#barEmailRegister").css({
        display: 'block',
        backgroundColor: 'red',
    });


    $("#barEmailRegister").animate({
        height: '3px',
        width: '100%',
        borderRadius: "3px",
    },200);
  
});

$("#emailRegister").on('focusout', function(){

    if($("#emailRegister").val()){
        return;
    }
    $("#labelEmailRegister").css({
        transform: 'translateY(0)',
        transition: "all .2s ease-out",
        opacity: "0.87",
        fontWeight: "400",
        color: 'black',
    });

    $("#barEmailRegister").animate({
        height: '0',
        width: '0',
    },200);
});

//Confirm Email

$("#emailConfirmRegister").on('focus', function(){
    $("#labelEmailConfirmRegister").css({
        transform: 'translateY(-25px)',
        transition: "all .2s ease-out",
        fontWeight: "900",
        color: 'white',
    });
    
    $("#barEmailConfirmRegister").css({
        display: 'block',
        backgroundColor: 'red',
    });


    $("#barEmailConfirmRegister").animate({
        height: '3px',
        width: '100%',
        borderRadius: "3px",
    },200);
  
});

$("#emailConfirmRegister").on('focusout', function(){

    if($("#emailConfirmRegister").val()){
        return;
    }
    $("#labelEmailConfirmRegister").css({
        transform: 'translateY(0)',
        transition: "all .2s ease-out",
        opacity: "0.87",
        fontWeight: "400",
        color: 'black',
    });

    $("#barEmailConfirmRegister").animate({
        height: '0',
        width: '0',
    },200);
});


//Efeito input Password Login label / Border

$("#passRegister").on('focus', function(){
    $("#labelPassRegister").css({
        transform: 'translateY(-25px)',
        transition: "all .2s ease-out",
        fontWeight: "900",
        color: 'white',
    });
    if($("#passRegister").val() == ''){
        $("#barPassRegister").css({
            display: 'block',
            backgroundColor: 'red',
        });

        $("#barPassRegister").animate({
            height: '3px',
            width: '100%',
            borderRadius: "3px",
        },200);
    }
    
    
});


$("#passRegister").keyup(function(){
        $("#barPassRegister").css({
            backgroundColor: '#15d415',
        }, 200);
    
});

$("#passRegister").on('focusout', function(){

    if($("#passRegister").val()){
        return;
    }
    $("#labelPassRegister").css({
        transform: 'translateY(0px)',
        transition: "all .2s ease-out",
        opacity: "0.87",
        fontWeight: "400",
        color: 'black',
    });

    $("#barPassRegister").animate({
        height: '0',
        width: '0',
    },200);
});


$("#passConfirmRegister").on('focus', function(){
    $("#labelPassConfirmRegister").css({
        transform: 'translateY(-25px)',
        transition: "all .2s ease-out",
        fontWeight: "900",
        color: 'white',
    });
    if($("#passConfirmRegister").val() == ''){
        $("#barPassConfirmRegister").css({
            display: 'block',
            backgroundColor: 'red',
        });

        $("#barPassConfirmRegister").animate({
            height: '3px',
            width: '100%',
            borderRadius: "3px",
        },200);
    }
    
    
});


$("#passConfirmRegister").keyup(function(){
        $("#barPassConfirmRegister").css({
            backgroundColor: '#15d415',
        }, 200);
    
});

$("#passConfirmRegister").on('focusout', function(){

    if($("#passConfirmRegister").val()){
        return;
    }
    $("#labelPassConfirmRegister").css({
        transform: 'translateY(0px)',
        transition: "all .2s ease-out",
        opacity: "0.87",
        fontWeight: "400",
        color: 'black',
    });

    $("#barPassConfirmRegister").animate({
        height: '0',
        width: '0',
    },200);
});

//Voltar Menu Login

//Cadastro

$("#telaLogin").on("click", function(e){
    e.preventDefault();
    $(".box-form-register").animate({
        opacity: 0,
    }, 200);

    setTimeout(function(){
        $(".box-form-register").css({
            display: 'none',
        });
    },200);


    $("#formLogin").css({
        display: 'block',
    });

    $("#formLogin").animate({
        opacity: 1,
    }, 250);    
});

});
    

   


    



