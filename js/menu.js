$(()=>{

    // Page Load 
    loading();
    function loading() {
        window.onload = function(){
            $(".shadow__box").css("display","block");  
            $(".logoAnimation").css("display","flex");
            setTimeout(() => {
                $(".shadow__box").hide();  
                $(".logoAnimation").hide()
            }, 3000);
        }
    }

    // sidebar OBIS toggle 
    $("#sidebarMenuToggle").on({
        "click": function(){
            $("#sidebarMenu").toggle(),
            $("#sidebarMenu").addClass("absolute");
        } 
        });

    // sidebar menu link

   $("#timeTable").click(()=> {
    $(".mainContentTop").load("./timeTable.html")
   })

   $("#gradeComp").click(()=> {
    $(".mainContentTop").load("./gradeComplation.html")
   })

   $("#gradeUpgrade").click(()=> {
    $(".mainContentTop").load("./gradeUpgrade.html")
   })

   $("#semestrGrades").click(()=> {
    $(".mainContentTop").load("./semestrGrades.html")
   })

   $("#objectApp").click(()=> {
    $(".mainContentTop").load("./objectApp.html")
   })

   $("#appMake").click(()=> {
    $(".mainContentTop").load("./appMakeUpExam.html")
   })

   $("#deansApp").click(()=> {
    $(".mainContentTop").load("./deansApp.html")
   })

   $("#transkript").click(()=> {
    $(".mainContentTop").load("./transkript.html")
   })


   //after click menu link
    $("#sidebarMenu > a").click(function(){
        $("#sidebarMenu").hide(100)
    })
    

    // sidebar button at bottom
    $("#sidebarBtnToggle").click(function () {  
        $("#sidebarMenu").removeClass("absolute");
        $("div.main__content").toggleClass("smallContent");
        $("#sidebarMenu").toggle();
    })

    //Log Out 
    $("#logOut").click(function(){
        $(".shadow__box").show(100);
        $("#forgetBox").show();
        
        $("#yesBtn").click(function () {
            $(".shadow__box").hide(100);
            $("#forgetBox").hide();
            window.location.href = "login.html";
        })
        $("#noBtn").click(function () {
            $(".shadow__box").hide(100);
            $("#forgetBox").hide();
            $("#userNameAtNav").text("Tamam");
        })
    })
})