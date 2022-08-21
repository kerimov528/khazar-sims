$(() => {

    // functions 
    loading();
    getName();
    loadMenuLinks();

    // Page Load 
    function loading() {
            $("div.logoAnimationBox").css("display", "flex");
            setTimeout(() => {
                $("div.logoAnimationBox").hide();
            }, 3000);
    }

    //Getting Your Name to Navbar section
    function getName() {
        setTimeout(() => {
            $("span#userNameAtNav").html(localStorage.getItem("nameOfStudent"));
        }, 1000);
    }

    // sidebar OBIS toggle 
    $("#sidebarMenuToggle").on({
        "click": function () {
            $("#sidebarMenu").toggle(),
                $("#sidebarMenu").addClass("absolute");
        }
    });


    // sidebar menu link
    function loadMenuLinks() {
        let menuLinks = [
            'timeTable',
            'gradeComplation',
            'gradeUpgrade',
            'semestrGrades',
            'objectApp',
            'appMakeUpExam',
            'deansApp',
            'transkript',
            'menu',
            'profile'
        ]

        menuLinks.forEach(menuLink => {
            $("#" + menuLink).click(() => {
                (menuLink == "menu") ? (window.location = "menu.html") : 
                (menuLink == "transkript") ? 
                (
                    loading(),
                    setTimeout(() => {
                        (
                            $(".mainContentTop").load("../pages/" + menuLink + ".html")
                        )
                    }, 2000)
                ) : (
                    $(".mainContentTop").load("../pages/" + menuLink + ".html")
                )
                 
            })
        });
    }

    //after click another place when open menu link
    $("#sidebarMenu > a , .mainContentTop").click(function () {
        $("#sidebarMenu").hide(100)
    })


    // sidebar button at bottom
    $("#sidebarBtnToggle").click(function () {
        $(".sidebar").toggleClass("clickBtn");
    })

$("#sidebarToggleTop").click(()=> {
    console.log("tiklandi");
    $(".sidebar").toggle();
});

    // Log Out 
    $("a#logOut").click(function () {
        Swal.fire({
            title: 'From Automation System',
            text: "Are You Sure You Want To Quit?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = 'login.html';
            }
        })
    })

    // When the user scrolls down 100px from the top of the document, show the button
    $(window).scroll(()=> {
        scrollFunction();
    });

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    }

})