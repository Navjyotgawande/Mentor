AOS.init();
// aos end


// toggle navigation
// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
    
//     });
//     });
var a=1;
$(document).ready(function(){
$("#ghar").click(function(){
$("#links").hide();
a=1;
});
$("#ghars").click(function(){
    $("#links").hide();
    a=1;
    });
$("#abt").click(function(){
    $("#links").hide();
    a=1;
    });
    $("#corse").click(function(){
        $("#links").hide();
        a=1;
        });
        $("#contt").click(function(){
            $("#links").hide();
            a=1;
            });  
            $("#train").click(function(){
                $("#links").hide();
                a=1;
                });   
              
                $("#event").click(function(){
                    $("#links").hide();
                    a=1;
                    });   
                    $("#why-us").click(function(){
                        $("#links").hide();
                        a=1;
                        });   
    
$("#icon").click(function(){
            $("#links").slideToggle();
// if (a==1){
//          $("#links").animate({"right":"0"});
//          a=2;
// }
// else{
//          $("#links").animate({"right":"-100%"});
// } 
});
});




//toggle navigation end    