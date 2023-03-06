(function ($) {
    "use strict"; // Start of use strict

    

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

})(jQuery); // End of use strict

$(function () {

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    setDatatable();

    setTimeout(function () {
        $(".dataTables_filter > label > input").removeClass("form-control");
        $(".dataTables_length > label > select").removeClass("form-control")

        $(".dataTables_filter > label > input").addClass("form-control1");
        $(".dataTables_filter > label > input").addClass("form-control-sm1");

        $(".dataTables_length > label > select").addClass("form-control1")
        $(".dataTables_length > label > select").addClass("form-control-sm1")
    }, 100);
});

function setDatatable() {
    $('#table-datatable thead tr').clone(true).appendTo('#table-datatable thead');
    var searchname = 0;
    $('#table-datatable thead tr:eq(1) th').each(function (i) {
        var title = $(this).text();
        if ($(this).attr("class").indexOf("no-filter") == -1) {
            if ($(this).attr("class").indexOf("small-filter") != -1) {
                $(this).html('<input type="text" class="form-control-search-input" style="min-width: 30px; max-width: 30px; height: 22px; padding-left: 5px;" id="_' + searchname + '" name="_' + searchname + '"  />');
            }
            else {
                $(this).html('<input type="text" class="form-control-search-input" style="min-width: 100%; max-width: 100%; height: 22px; padding-left: 5px;"  id="_' + searchname + '" name="_' + searchname + '"  />');
            }
        }
        else {
            $(this).html('');
        }

        $('input', this).on('keyup change', function () {
            if (table.column(i).search() !== this.value) {
                table.column(i).search(this.value).draw();
            }
        });

        searchname++;
    });

    var table = $("#table-datatable").DataTable({
        "orderCellsTop": true,
        "order": [], //Initial no order.
        "aaSorting": [],       
        //fixedHeader: true,
        "pageLength": 10,
        "language": {
            "url": "../assets/json/" + encodeForDataTable + ".json"
        },
        "dom": 'Blfrtip',
        "buttons": [
            'excel'
        ],
        //"stateSave": true,
        //"stateSaveCallback": function (settings, data) {
        //    // save the filter settings without connecting it to a unique url
        //    localStorage.setItem("dataTables_filterSettings", JSON.stringify(data));
        //},
        //"stateLoadCallback": function (settings) {
        //    // read out the filter settings and apply
        //    return JSON.parse(localStorage.getItem("dataTables_filterSettings"));
        //},
        "responsive": true,
        "bDestroy": true,
        "columnDefs": [{
            "searchable": true,
            "orderable": false,
            "targets": 0
        }],
        "search": { "caseInsensitive": false },
        drawCallback: function (settings) {
            //console.log($(this));
            var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
            pagination.toggle(this.api().page.info().pages > 1);
            var pagination2 = $(this).closest('.dataTables_wrapper').find('.dataTables_info');
            pagination2.toggle(this.api().page.info().pages > 1);

        },
        //"info": false
    });
}

$(function () {

    $('#table-datatable1 thead tr').clone(true).appendTo('#table-datatable1 thead');
    $('#table-datatable1 thead tr:eq(1) th').each(function (i) {
        var title = $(this).text();
        if ($(this).attr("class").indexOf("no-filter") == -1) {
            if ($(this).attr("class").indexOf("small-filter") != -1) {
                $(this).html('<input type="text" class="form-control-search-input" style="min-width: 30px; max-width: 30px; height: 23px; padding-left: 5px;"  />');
            }
            else {
                $(this).html('<input type="text" class="form-control-search-input" style="min-width: 100%; max-width: 100%; height: 22px; padding-left: 5px;" />');
            }
        }
        else {
            $(this).html('');
        }

        $('input', this).on('keyup change', function () {
            if (table.column(i).search() !== this.value) {
                table.column(i).search(this.value).draw();
            }
        });
    });

    var table = $("#table-datatable1").DataTable({
        "orderCellsTop": true,
        //fixedHeader: true,
        "pageLength": 10,
        "language": {
            "url": "../assets/json/" + encodeForDataTable + ".json"
        },
        "dom": 'Blfrtip',
        "buttons": [
            'excel'
        ],
        "stateSave": true,
        "stateSaveCallback": function (settings, data) {
            // save the filter settings without connecting it to a unique url
            localStorage.setItem("dataTables_filterSettings", JSON.stringify(data));
        },
        "stateLoadCallback": function (settings) {
            // read out the filter settings and apply
            return JSON.parse(localStorage.getItem("dataTables_filterSettings"));
        },
        "responsive": true,
        "columnDefs": [{
            "searchable": true,
            "orderable": false,
            "targets": 0
        }],
        "search": { "caseInsensitive": false },
        drawCallback: function (settings) {
            //console.log($(this));
            var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
            pagination.toggle(this.api().page.info().pages > 1);
            var pagination2 = $(this).closest('.dataTables_wrapper').find('.dataTables_info');
            pagination2.toggle(this.api().page.info().pages > 1);
        },
        //"info": false
    });

    setTimeout(function () {
        $(".dataTables_filter > label > input").removeClass("form-control");
        $(".dataTables_length > label > select").removeClass("form-control")

        $(".dataTables_filter > label > input").addClass("form-control1");
        $(".dataTables_filter > label > input").addClass("form-control-sm1");

        $(".dataTables_length > label > select").addClass("form-control1")
        $(".dataTables_length > label > select").addClass("form-control-sm1")
    }, 100);
});

function setDropSelectText(id) {
    var selectColor = $('select#' + id);
    selectColor.prop('required', true);
    /* Check if there is no selected value on ready if not mark select as invalid */
    if (!selectColor.val()) {
        selectColor[0].setCustomValidity('@Html.Raw(DilIslemleri.DilKarsilikYaz("LutfenListedenBirOgeSecin"))');
    }
    /* Do the same check when select value changed */
    selectColor.on('change', function () {
        if (!selectColor.val()) {
            selectColor[0].setCustomValidity('@Html.Raw(DilIslemleri.DilKarsilikYaz("LutfenListedenBirOgeSecin"))');
        } else {
            selectColor[0].setCustomValidity('');
        }
    })
};

$(function () {
    getTabSettings();
});

function getTabSettings() {
    var $tabButtonItem = $('#tab-button li')
    $tabSelect = $('#tab-select'),
    $tabContents = $('.tab-contents'),
    activeClass = 'is-active';

    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();

    $tabButtonItem.find('a').on('click', function (e) {
        var target = $(this).attr('href');
        _Yariyil = target;

        $tabButtonItem.removeClass(activeClass);
        $(this).parent().addClass(activeClass);
        $tabSelect.val(target);
        $tabContents.hide();
        $(target).show();
        e.preventDefault();
    });

    $tabSelect.on('change', function () {
        var target = $(this).val(),
            targetSelectNum = $(this).prop('selectedIndex');

        $tabButtonItem.removeClass(activeClass);
        $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
        $tabContents.hide();
        $(target).show();
    });
}

$(document).ready(function () {

     //Initialize the plugin
    $('#fadeandscale').popup({
        transition: 'all 0.3s',
        blur: false,        
        escape: true,
        scrolllock: true,
        closebutton: true,
        beforeopen: function () {
            $(".Loading").show();
            $('#fadeandscale').html('<div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>');
        },
        opentransitionend: function () {
            popupAjax();
        },
    });

    // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
    $.fn.popup.defaults.pagecontainer = '#page'
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
function formatDateTime(datetime) {
    var d = new Date(datetime),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
            hour = '' + d.getHours(),
            minute = '' + d.getMinutes();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hour.length < 2)
        hour = '0' + hour;
    if (minute.length < 2)
        minute = '0' + minute;

    return year + "-" + month + "-" + day + "T" + hour + ":" + minute;
}
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};