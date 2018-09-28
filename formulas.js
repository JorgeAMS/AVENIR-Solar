
function on() {
    /*var mensaje= document.getElementById("range-not-rover").value;
    var kilow = $("#kilowats").val();
    var valor = $(".range-slider__value").val();
    alert(mensaje);
    alert(kilow);
    document.getElementById("rd").innerHTML=kilow;*/

    var s = document.getElementById("valor");
    var p = $("range-not-rover").val();
    var kilow = $("#kilowats").val();
    console.log(p);

    //Obtener valor del range
    var capValue = document.getElementById("rangeVAL").value;
    console.log(capValue);
    //Obtener kWh input
    var kwhInput =  document.getElementById("kilowats").value;
    console.log(kwhInput);
    
}
    
  function out() {
    var porcentaje = document.getElementsById("range-not-rover");
    var kilow = $("#kilowats").val();
    alert(kilow);
    document.getElementById("rd").innerHTML=kliow;
  }