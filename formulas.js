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
    TipoSolucion=((((((kilow*porcentaje)*10)/30))/1500)+1);
  }
  Accesorios=TipoSolucion*6;

  console.log("TipoSolucion: "+TipoSolucion);
  console.log("Accesorios: "+Accesorios);

  if(porcentaje<100){ //En Red
    SolucionSolar=((TipoSolucion*500000)/3050)+700;
    console.log("SolucionSolar: "+SolucionSolar);
    ManoObra=SolucionSolar*0.12;
    console.log("ManoObra: "+ManoObra);
    Transporte=SolucionSolar*0.07;
    console.log("Transporte: "+Transporte);
    Mantenimiento=SolucionSolar*0.03;
    console.log("Mantenimiento: "+Mantenimiento);
    Total=Math.round(SolucionSolar+ManoObra+Transporte+Mantenimiento);
    console.log("Total: "+Total);
  }
  if(porcentaje==100){ //Fuera de Red
    SolucionSolar=(((((kilow*1000)/30)/1500)*500000)/3050)+200;
    console.log("SolucionSolar: "+SolucionSolar);
    ManoObra=SolucionSolar*0.12;
    console.log("ManoObra: "+ManoObra);
    Almacenamiento=(((((kilow*1000)/30)/3.6)*2100)+((((kilow*1000)/30)/3.6)*2100)*0.15)/3050;
    console.log("Almacenamiento: "+Almacenamiento);
    Transporte=SolucionSolar*0.07;
    console.log("Transporte: "+Transporte);
    Mantenimiento=(SolucionSolar+Almacenamiento)*0.03;
    console.log("Mantenimiento: "+Mantenimiento);
    Total=Math.round(SolucionSolar+ManoObra+Almacenamiento+Transporte+Mantenimiento);
    console.log("Total: "+Total);
  }
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
