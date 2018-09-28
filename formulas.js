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

function click(){
  kilow = $("#kilowats").val();

  if((((kilow*porcentaje)*1000)/30)/1500 < 1){
    TipoSolucion=1;
  }
  else{
    TipoSolucion=(((((kilow*porcentaje)*1000)/30))/1500)+1;
  }
  Accesorios=TipoSolucion*6;

  if(porcentaje<100){ //En Red
    SolucionSolar=((TipoSolucion*500000)/3050)+700;
    ManoObra=SolucionSolar*0,12;
    Transporte=SolucionSolar*0,07;
    Mantenimiento=SolucionSolar*0,03;
    Total=Accesorios+SolucionSolar+ManoObra+Transporte+Mantenimiento;
  }
  if(porcentaje==100){ //Fuera de Red
    SolucionSolar=(((((kilow*1000)/30)/1500)*500000)/3050)+200;
    ManoObra=SolucionSolar*0,12;
    Almacenamiento=(((((kilow*1000)/30)/3,6)*2100)+((((kilow*1000)/30)/3,6)*2100)*0,15)/3050;
    Transporte=SolucionSolar*0,07;
    Mantenimiento=(SolucionSolar+Almacenamiento)*0,03;
    Total=Accesorios+SolucionSolar+ManoObra+Transporte+Mantenimiento;
  }
}

/*
  function on() {
    var s = document.getElementById("valor");
    var p = $("range-not-rover").val();
<<<<<<< HEAD
=======
    var kilow = $("#kilowats").val();
    console.log(p);

    //Obtener valor del range
    var capValue = document.getElementById("rangeVAL").value;
    console.log(capValue);
    //Obtener kWh input
    var kwhInput =  document.getElementById("kilowats").value;
    console.log(kwhInput);
>>>>>>> 32ffb5bf8eddd34207b769bde87e420d4b0b59a1
    
    console.log(p);

    
  }
      
  function out() {
    var porcentaje = document.getElementsById("range-not-rover");
    alert(kilow);
    document.getElementById("rd").innerHTML=kilow;

  }

*/
