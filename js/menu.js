$(()=>{

    // functions 
    // loading();

    // Page Load 
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

    //getJson transkript.json
    $("#transkript").click(()=> {
        $.getJSON("./json/transkript.json", 
        (data) => {

            var str = "";
            $.each(data,(key,value)=> {
                // console.log(value.name, value.subjects[0].courseName);

                if(value.name == "Anar"){
                    for (let i = 0; i < value.subjects.length; i++) {
                        console.log(value.name, value.subjects[i].courseName,"str =>", str);
                        str += `<tr>`;
                        str += `<td>`;
                        str += value.subjects[i].courseName; 
                        str += `</td>`;
                        str += `</tr>`;
                    }
                }

                console.log($("div#result").html());
                $("div#result table tbody").html(str);
            })
        }
    );
    });
  

  

    // $(window).on('load', function () {
    //     $(".Loading").hide();
    // });
    // window.onbeforeunload = Call();

    // function Call() {
    //     $(".Loading").show();

        //$(document).ready(function () {
            //window.location = "/cikis-yap";
        //});

    // }

      //function LogOff() {




        //    $.ajax({
        //        url: "/cikis-yap",
        //       success: function (result) {
        //           window.location = "/Security/Login";

        //        }
        //    });

        //}

        //window.addEventListener('beforeunload', function (e) {
        //    e.preventDefault();
        //    e.returnValue = '';

        //});

    // sidebar OBIS toggle 
    $("#sidebarMenuToggle").on({
        "click": function(){
            $("#sidebarMenu").toggle(),
            $("#sidebarMenu").addClass("absolute");
        } 
        });

    // sidebar menu link

   $("#timeTable").click(()=> {
    $(".mainContentTop").load("../pages/timeTable.html")
   })

   $("#gradeComp").click(()=> {
    $(".mainContentTop").load("../pages/gradeComplation.html")
   })

   $("#gradeUpgrade").click(()=> {
    $(".mainContentTop").load("../pages/gradeUpgrade.html")
   })

   $("#semestrGrades").click(()=> {
    $(".mainContentTop").load("../pages/semestrGrades.html")
   })

   $("#objectApp").click(()=> {
    $(".mainContentTop").load("../pages/objectApp.html")
   })

   $("#appMake").click(()=> {
    $(".mainContentTop").load("../pages/appMakeUpExam.html")
   })

   $("#deansApp").click(()=> {
    $(".mainContentTop").load("../pages/deansApp.html")
   })

   $("#transkript").click(()=> {
    $(".mainContentTop").load("../pages/transkript.html")
   })


   //after click another place when open menu link
    $("#sidebarMenu > a , .mainContentTop").click(function(){
        $("#sidebarMenu").hide(100)
    })
    

   // sidebar button at bottom
    $("#sidebarBtnToggle").click(function () {  
        $("#sidebarMenu").removeClass("absolute");
        $("div.main__content").toggleClass("smallContent");
        $("#sidebarMenu").toggle();
    })

    //Log Out 
    // $("#logOut").click(function(){
    //     $(".shadow__box").show(100);
    //     $("#forgetBox").show();
        
    //     $("#yesBtn").click(function () {
    //         $(".shadow__box").hide(100);
    //         $("#forgetBox").hide();
    //         window.location.href = "login.html";
    //     })
    //     $("#noBtn").click(function () {
    //         $(".shadow__box").hide(100);
    //         $("#forgetBox").hide();
    //         $("#userNameAtNav").text("Tamam");
    //     })
    // })


    // Application makeUp Exam 

    // $('#treeList :checkbox').change(function () {
    //     $(this).siblings('ul').find(':checkbox').prop('checked', this.checked);
    //     if (this.checked) {
    //         $(this).parentsUntil('#treeList', 'ul').siblings(':checkbox').prop('checked', true);
    //     } else {
    //         $(this).parentsUntil('#treeList', 'ul').each(function () {
    //             var $this = $(this);
    //             var childSelected = $this.find(':checkbox:checked').length;
    //             if (!childSelected) {
    //                 $this.prev(':checkbox').prop('checked', false);
    //             }
    //         });
    //     }
    // });

    // $('.parent-menu ul').hide();
    // $('.parent-menu span').click(function () {
    //     $(this).parent().find('ul').slideToggle();
    // });

})