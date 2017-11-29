$(function(){
    $("#loading").remove();

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })
    
    //Transição de Formulário para Cadastro/Login

    //Login para Cadastro

    $("#btnCadastro").on("click", function(e){
        e.preventDefault();
        console.log("oi");
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

$("#telaLogin").on("click", function(e){
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
                console.log(position);
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
    

   


    



