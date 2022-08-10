$(() => {

    // Login Animation 
    $("input:first").on({
        "focusin": function () {
            $("#icon1").addClass("iconAtFocus");
        },
        "focusout": function () {
            $("#icon1").removeClass("iconAtFocus");

        }
    })
    $("input#loginPassword").on({
        "focusin": function () {
            $("#icon2").addClass("iconAtFocus");
        },
        "focusout": function () {
            $("#icon2").removeClass("iconAtFocus");
        }
    })


    // Login Validation 

    $(".form__input__btn button").click(function (event) {
        event.preventDefault();
            $.getJSON("./json/login.json",
            (data) => {
                    var count = 0, num = 0;
                    $.each(data, function (key, value) {
                        num++;
                        if ($("#username").val() == value.username && $("#loginPassword").val() == value.password) {

                            window.location.href = "menu.html";
                        } else {
                            count++;
                        }
                    });
                    if (count == num && $("#username").val() != "") {
                        $(".error__info").show();
                        setTimeout(() => {
                            $(".error__info").hide();
                        }, 4000);
                    }
                }
        );
    })

    // Sifreni Unutdun 

    $("#forgetPass").click(function () { 
        $(".shadow__box").show(100);
        $("#forgetBox").show(200);
     })

    $("#mailBtn").click(function(){
        $.getJSON("./json/login.json",
            function (data) {
                var count = 0,
                    num = 0;
                $.each(data, function (key, value) {
                    num++;
                    if ($("#username1").val() != value.username) {
                        count++;
                    }
                    else {
                        closeForgetBox();
                    }
                })
                if($("#username1").val() == ""){
                    $("#forgetBox .box__content").hide();
                    $("#forgetBox .box__error").show(100);
                    $("#forgetBox .box__error h2").text("İstifadəçi adı tələb olunur");
                }
                else if (count == num) {
                    $("#forgetBox .box__content").hide();
                    $("#forgetBox .box__error").show(100);
                    $("#forgetBox .box__error h2").text("İstifadəçi adı tapılmadı");
                }
            }
        );
    })

    function closeForgetBox(){
        $(".shadow__box").hide(100);
        $("#forgetBox").hide(100);
    }
    $("#cancelBtn").click(function () { 
        closeForgetBox();
     })
    $("#okBtn").click(function () { 
        setTimeout(() => {
            $("#forgetBox .box__content").show();
            $("#forgetBox .box__error").hide();
        }, 1000);
        closeForgetBox();
    })
})