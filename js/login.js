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
                var count = 0,
                    num = 0;
                $.each(data, function (key, value) {
                    num++;
                    if ($("#username").val() == value.username && $("#loginPassword").val() == value.password) {
                        passValues(value.fullName);
                        window.location.href = "./pages/menu.html";
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


    // pass fullname to localStorage 

    function passValues(name) {
        localStorage.setItem("nameOfStudent", name);
        return false;
    }

    // Sifremi Unutdum

    $("#forgetPass").click(function () {
        Swal.fire({
            html: '<label for="username" class="d-inline-block text-center fs-3 mb-3">User name</label>' +
                ' <input type="text" id="username1" class="d-block text-center rounded form-control mb-4" required>' +
                '<label for="date" class="d-inline-block text-center fs-3 mb-3">Date of Birth</label>' +
                '<input type="date" id="date" class="d-block text-center rounded form-control mb-4" required></input>',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Poçt göndərin',
            confirmButtonColor: '#2778c4',
            cancelButtonText: 'Ləğv et'
        }).then((result) => {
            if (result.isConfirmed) {
                $.getJSON("./json/login.json",
                    function (data) {
                        var count = 0,
                            num = 0;
                        $.each(data, function (key, value) {
                            num++;
                            if ($("#username1").val() != value.username) {
                                count++;
                            } else {
                                closeForgetBox();
                            }
                        })
                        if ($("#username1").val() == "") {
                            Swal.fire(
                                'İstifadəçi adı tələb olunur',
                                '',
                                'error'
                            )
                        } else if (count == num) {
                            Swal.fire(
                                'İstifadəçi adı tapılmadı',
                                '',
                                'error'
                            )
                        }
                    }
                );
            }
        })
    })
})