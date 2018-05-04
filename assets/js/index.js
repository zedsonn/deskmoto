$(function(){
        //Manual
        $("#btnManual").hover(function(){	
        	
            $(".menu").css({
                borderBottomWidth: "0",
            });

            $("#menuDireito, #menuFala, #menuConfig").hide().addClass("removeElement");
            $("#menuManual").css({
                width: "0",
                height: "0",
                opacity: 0,
                display: "none",
            });

            $("#menuManual").removeClass("removeElement");

            $(".menu").animate({
                borderBottomWidth: "5px",
            },200);
    
            $("#menuManual").show().animate({
                width: "100%",
                height: "100%",
                opacity: 1,
                display: "block",
            },500);
            
            $(".list-menu").show().css({display: "block"});
            
        },function (){
            return;
        });
    
        //Direito
        $("#btnDireito").hover(function(){		
            $(".menu").css({
                borderBottomWidth: "0px",
            });

            $("#menuManual, #menuFala, #menuConfig").hide().addClass("removeElement");
            $("#menuDireito").css({
                width: "0",
                height: "0",
                opacity: 0,
                display: "none",
            });
            
                $("#menuDireito").removeClass("removeElement");
                $(".menu").animate({
                    borderBottomWidth: "5px",
                },200);
                $("#menuDireito").show().animate({
                    width: "100%",
                    height: "100%",
                    opacity: 1,
                    display: "block",
                },500);
                $(".list-menu").show().css({display: "block"});
               
        }, function (){
            return;
        });

         //Fala Comigo
         $("#btnFala").hover(function(){		
            $(".menu").css({
                borderBottomWidth: "0px",
            });

            $("#menuManual, #menuDireito, #menuConfig").hide().addClass("removeElement");
            $("#menuFala").css({
                width: "0",
                height: "0",
                opacity: 0,
                display: "none",
            });
            
                $("#menuFala").removeClass("removeElement");
                $(".menu").animate({
                    borderBottomWidth: "5px",
                },200);
                $("#menuFala").show().animate({
                    width: "100%",
                    height: "100%",
                    opacity: 1,
                    display: "block",
                },500);
                $(".list-menu").show().css({display: "block"});
               
        }, function (){
            return;
        });

        //Config
        $("#btnConfig").hover(function(){		
            $(".menu").css({
                borderBottomWidth: "0px",
            });

            $("#menuManual, #menuDireito, #menuFala").hide().addClass("removeElement");
            $("#menuConfig").css({
                width: "0",
                height: "0",
                opacity: 0,
                display: "none",
            });
            
                $("#menuConfig").removeClass("removeElement");
                $(".menu").animate({
                    borderBottomWidth: "5px",
                },200);
                $("#menuConfig").show().animate({
                    width: "100%",
                    height: "100%",
                    opacity: 1,
                    display: "block",
                },500);
                $(".list-menu").show().css({display: "block"});
               
        }, function (){
            return;
        });

    
});   
