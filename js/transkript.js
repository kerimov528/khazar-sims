$(() => {

    getSubjects();

    //get subjects from transkript.json 
    function getSubjects() {
        $.getJSON("../json/transkript.json",
            (data) => {
                $("tbody#transkriptSubjects").html("");
                $("table#tablo_ortalama1 tbody").html("");
                $.each(data, (key, value) => {

                    if (value.name == "X") {
                        for (let i = 0; i < value.subjects.length; i++) {
                            let str = "";

                            str += "<tr>";
                            str += "<td class='text-center align-middle'>" +
                                value.subjects[i].codeName + "</td>";
                            str += "<td class='text-center align-middle'>" +
                                value.subjects[i].code + "</td>";

                            // checking if a subject took more than one 
                            ((i == 0) ?
                                (value.subjects[i].courseName == value.subjects[i + 1].courseName) :
                                ((value.subjects[i].courseName == value.subjects[i - 1].courseName) && (value.subjects[i].grade > 60) && (value.subjects[i].ECTS != ""))
                            ) ?
                            (
                                (value.subjects[i].grade > value.subjects[i - 1].grade) ?
                                (str += "<td class='align-middle secondChance'>" + value.subjects[i].courseName + "</td>") :
                                (str += "<td class='align-middle bg-aquamarine firstChance'>" + value.subjects[i].courseName + "</td>")
                            ) : (
                                str += "<td class='align-middle'>" + value.subjects[i].courseName + "</td>"
                            );

                            str += "<td class='text-center align-middle'>" + value.subjects[i].lang + "</td>";

                            // checking if credit is exists
                            (value.subjects[i].credit == "") ? 
                            (str += "<td class='text-center align-middle'>" + value.subjects[i].credit + "</td>") :
                            (str += "<td class='text-center align-middle'>" + Number(value.subjects[i].credit).toFixed(1) + "</td>");

                            //checking if ECTS is paid or not
                            (value.subjects[i].ECTS == "") ?
                            (str += "<td class='text-center align-middle bg-dark text-white noEcts'>" + value.subjects[i].ECTS + "</td>") :
                            (str += "<td class='text-center align-middle'>" + value.subjects[i].ECTS + "</td>");


                            // checking if a subject grade under 60 
                            ((value.subjects[i].grade < 60) && (value.subjects[i].ECTS != "")) ? (str += "<td class='text-center align-middle bg-aquamarine failGrade'>" + value.subjects[i].grade + "</td>") : (str += "<td class='text-center align-middle'>" + value.subjects[i].grade + "</td>");
                            str += "</tr>"
                            $("tbody#transkriptSubjects").html($("tbody#transkriptSubjects").html() + str);
                        }

                        for (let i = 0; i < value.general.length; i++) {
                            let str = "";
                            str += "<tr>";
                            str += "<td class='align-middle fw-bold text-red'>" +
                                value.general[i].general + "</td>";
                            str += "<td class='text-end align-middle fw-bold pe-1'>" +
                                Number(value.general[i].gCredit).toFixed(2) + "</td>";
                            str += "<td class='text-end align-middle fw-bold pe-1'>" +
                                Number(value.general[i].gECTS).toFixed(2) + "</td>";
                            str += "</tr>"
                            $("table#tablo_ortalama1 tbody").html($("table#tablo_ortalama1 tbody").html() + str);
                        }

                        $("tr td.failGrade , tr td.firstChance").siblings().addClass("bg-aquamarine"); 
                        $("tr td.noEcts").siblings().addClass("bg-dark text-white"); 
                    }
                })
            }
        );
    };
})