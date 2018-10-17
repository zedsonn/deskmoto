$(function(){
   
    //Transição de Formulário para Cadastro/Login

    //Login para Cadastro

    $("#btnCadastro").on("click", function(e){
        e.preventDefault();
        $("#formLogin").animate({
            opacity: 0,
        }, 200);

        $(".box-form-register").css({
            display: 'block',
        });


        $(".box-form-register").animate({
        opacity: 1,
        }, 250);  

        setTimeout(function(){
            $("#formLogin").css({
                display: 'none',
            });  
    
          
            //Posicionamento automatico da Tela
            var position = 0;
            var scrollForm = setInterval(function(){
                position = position + 10;
                window.scrollTo(0, position);

                if(position > 430){
                    clearInterval(scrollForm);
                }
            },10);
        },200);
        
    });

    //Cadastro para Login

$("#telaLogin, #loginNav").on("click", function(e){
    e.preventDefault();
    $(".box-form-register").animate({
        opacity: 0,
    }, 200);

    setTimeout(function(){
        $(".box-form-register").css({
            display: 'none',
        });

        //Posicionamento automatico da Tela
        var position = 0;
        var scrollForm = setInterval(function(){
            position = position + 10;
            console.log(position);
            window.scrollTo(0, position);

            if(position > 430){
                clearInterval(scrollForm);
            }
        },10);


    },200);


    $("#formLogin").css({
        display: 'block',
    });

    $("#formLogin").animate({
        opacity: 1,
    }, 250);    
});

    

});
    

   


    



