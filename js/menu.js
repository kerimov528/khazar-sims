$(()=>{
    // sidebar OBIS toggle 
    $("#sidebarMenuToggle").click(function(){
        $("#sidebarMenu").toggle();
        $("#sidebarMenu").addClass("absolute");
    });

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