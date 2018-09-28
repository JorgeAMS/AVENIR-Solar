var TipoSolucion,
    Accesorios,
    ManoObra,
    SolucionSolar,
    Almacenamiento,
    Transporte,
    Mantenimiento,
    Total;
    
var kilow,
    porcentaje;


 /*
  =SI((((((C4*F4)*1000)/30))/1500)<1;1;
  (((((C4*F4)*1000)/30))/1500)+1)

  c4= kilowats
  f4= porcentaje
  I4=tipoSolucion
  C12=SolucionSolar

 */

function clickeado(){
  //Obtener valor del range
  porcentaje = document.getElementById("rangeVAL").value;
  console.log(porcentaje);
  //Obtener kWh input
  kilow =  document.getElementById("kilowats").value;
  console.log(kilow);
  
  if((((((kilow*porcentaje)*10)/30))/1500) < 1){
    TipoSolucion=1;
  }
  else{
    TipoSolucion=Math.round(((((((kilow*porcentaje)*10)/30))/1500)+1));
  }
  Accesorios=TipoSolucion*6;

  console.log("TipoSolucion: "+TipoSolucion);
  console.log("Accesorios: "+Accesorios);

  if(porcentaje<100){ //En Red
    SolucionSolar=Math.round(((TipoSolucion*500000)/3050)+700);
    //console.log("SolucionSolar: "+SolucionSolar);
    ManoObra=Math.round(SolucionSolar*0.12);
    //console.log("ManoObra: "+ManoObra);
    Transporte=Math.round(SolucionSolar*0.07);
    //console.log("Transporte: "+Transporte);
    Almacenamiento="No aplica";
    //console.log("Almacenamiento: "+Almacenamiento);
    Mantenimiento=Math.round(SolucionSolar*0.03);
    //console.log("Mantenimiento: "+Mantenimiento);
    Total=Math.round(SolucionSolar+ManoObra+Transporte+Mantenimiento);
    //console.log("Total: "+Total);
  }
  if(porcentaje==100){ //Fuera de Red
    SolucionSolar=Math.round((((((kilow*1000)/30)/1500)*500000)/3050)+200);
    //console.log("SolucionSolar: "+SolucionSolar);
    ManoObra=Math.round(SolucionSolar*0.12);
    //console.log("ManoObra: "+ManoObra);
    Almacenamiento=Math.round((((((kilow*1000)/30)/3.6)*2100)+((((kilow*1000)/30)/3.6)*2100)*0.15)/3050);
    //console.log("Almacenamiento: "+Almacenamiento);
    Transporte=Math.round(SolucionSolar*0.07);
    //console.log("Transporte: "+Transporte);
    Mantenimiento=Math.round((SolucionSolar+Almacenamiento)*0.03);
    //console.log("Mantenimiento: "+Mantenimiento);
    Total=Math.round(SolucionSolar+ManoObra+Almacenamiento+Transporte+Mantenimiento);
    //console.log("Total: "+Total);
  }

  $('#boxing').addClass("boxing");
  $('#boxing').addClass("animatedIN");
  $('#boxing').addClass("fadeIn");
  document.getElementById('TipoSolucion1').innerHTML="Tipo Solución: ";
  document.getElementById('Accesorios1').innerHTML="Accesorios: ";
  document.getElementById('SolucionSolar1').innerHTML="Solución Solar: ";
  document.getElementById('ManoObra1').innerHTML="Mano de Obra: ";
  document.getElementById('Almacenamiento1').innerHTML="Modulo Almacenamiento: ";
  document.getElementById('Transporte1').innerHTML="Transporte: ";
  document.getElementById('Asesoria1').innerHTML="Asesoria - Soporte: ";
  document.getElementById('Mantenimiento1').innerHTML="Mantenimiento: ";
  document.getElementById('Total1').innerHTML="Total: ";

  document.getElementById('TipoSolucion2').innerHTML=TipoSolucion;
  document.getElementById('Accesorios2').innerHTML=Accesorios;
  document.getElementById('SolucionSolar2').innerHTML=SolucionSolar;
  document.getElementById('ManoObra2').innerHTML=ManoObra;
  document.getElementById('Almacenamiento2').innerHTML=Almacenamiento;
  document.getElementById('Transporte2').innerHTML=Transporte;
  document.getElementById('Asesoria2').innerHTML="Gratis!";
  document.getElementById('Mantenimiento2').innerHTML=Mantenimiento;
  document.getElementById('Total2').innerHTML=Total;



}

/*
  function on() {
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
    
    console.log(p);

    
  }
      
  function out() {
    var porcentaje = document.getElementsById("range-not-rover");
    alert(kilow);
    document.getElementById("rd").innerHTML=kilow;

  }

*/
