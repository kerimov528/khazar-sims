// function dersleriGetir() {
//     $(".Loading").show();

//     var yil1 = $("#yil1").val() == "" ? 0 : $("#yil1").val();
//     var donem = $("input[name=rg_donem]:checked").val();

//     var url = '/Obis/DonemlikNotlar/OgrenciNotlariniAl';
//     $('#ogrencinotlar').load(url, { Yil1: yil1, Donem: donem }, function () { $(".Loading").hide(); });
// }
// $("#yil1").keyup(function (e) {
//     var val = parseInt(this.value) + 1;
//     if (this.value.length < 4)
//         val = '';
//     $('#yil2').val(val);

//     $('#tablo_dersler tr:not(:first)').remove();
// });
// $(".sayiolsun").keypress(function (e) {
//     if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
// });
// $(':radio[name=rg_donem]').change(function () {
//     $('#tablo_dersler tr:not(:first)').remove();
// });