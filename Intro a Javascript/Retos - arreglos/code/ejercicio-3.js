//var userinput = [""]//
//while ( userinput == "") {
//    userinput = prompt ("Ingresa un dia de la semana")
//}
//if (userinput == "domingo"){
//    alert ("Vete a descansar" )
//} else alert ("Que tengas un feliz " +userinput)

//let bandera= false;

//do {
//    let dato = prompt ("Ingrese un numero");
//    if(isNaN(dato)){
//        alert ("El dato ingresado no es un numero")
//        if(dato == "salir" || dato == "terminar juego")
//        bandera = true;


//    } else {
//        alert (dato); 
//    }
    
//} while (!bandera);

//var numero = 0;
//for ( var index= 0; index <=50; index++ ) {
//    if (index 11 % 2 == 0){
//        numero = contador +0;
//        console.log ("los numeros impares son" + index)
//    }
//}





let avion = {
    modelo: "Airbus A320",
    llantas: 3,
    color: "rojo",
    añofabricado: 2011, 
    arrancarmotores: function () {
        return "Los motores han arrancado";
    },
    apagarmotores: function () {
        return "Los motores estan apagados"
    }, 

    subirTren: function (confirmacion) {
        if ( confirmacion === "si") {return "El tren de aterrizaje esta arriba";
    } else {return "El tren presenta fallas"} 
    },
    
    bajarflaps: function (confirmacion) {
        if ( confirmacion === "si") {return "los flaps estan abajo";
    } else {return "Los flaps presentan fallas" } 
    },

    navegacion: function () { 
        return "Sistema de navegacion encendido"
    },

    destino: function () {
        let destino = prompt ("Ingrese el destino");
        return "GPS configurado a " + destino;
    },

    combustible: function () {
        let combustible = prompt ("Ingrese el peso del combistible en libras");
        if ( combustible === isNaN ) { return "El peso del combistible es " + combustible;
    } else {return "La cantidad ingresada es incorrecta"}
    }

    

};

function informacionAeronave (avion) {
    document.write (avion.arrancarmotores ());
    document.write (avion.apagarmotores ());
    document.write (avion.subirTren ("si"));
    document.write (avion.bajarflaps ("si"));
    document.write(avion.navegacion ("si"));
    document.write(avion.destino (""));
    document.write(avion.combustible ());



}

informacionAeronave (avion); 





function VentasDeJuana () {

    var AquaJP = 200;
    var EmocionJP = 180;
    var AlegriaJP = 160;
    var FrescuraJP = 150;
    var VentasTotalesJ = 0;


    alert ("Ingrese datos de venta de Juana")
    var AquaJ = prompt ("Ingrese la cantidad de Aqua vendido");
    console.log("La cantidad de AquaJ vendida fue:" + AquaJ + " y su valor es:" + AquaJ* AquaJP + "Usd");
    var EmocionJ = prompt ("Ingrese la cantidad de Emocion vendido");
    console.log("La cantidad de Emocion vendida fue:" + EmocionJ + " y su valor es:" + EmocionJ* EmocionJP + "Usd");
    var AlegriaJ = prompt ("Ingrese la cantidad de Alegria vendido");
    console.log("La cantidad de Alegria vendida fue:" + AlegriaJ + " y su valor es:" + AlegriaJ * AlegriaJP + "Usd");
    var FrescuraJ = prompt ("Ingrese la cantidad de Frescura vendido");
    console.log("La cantidad de Frescura vendida fue:" + FrescuraJ + " y su valor es:" + FrescuraJ* FrescuraJP + "Usd");
    VentasTotalesJ = ( FrescuraJ * FrescuraJP + AquaJ * AquaJP + EmocionJ * EmocionJP + AlegriaJ * AlegriaJP);
    console.log ( FrescuraJ * FrescuraJP + AquaJ * AquaJP + EmocionJ * EmocionJP + AlegriaJ * AlegriaJP + "Usd");

    
};



function VentasDePedro () {

    var AquaPP = 200;
    var EmocionPP = 180;
    var AlegriaPP = 160;
    var FrescuraPP = 150;
    

    alert ("Ingrese datos de venta de Pedro")
    var AquaP = prompt ("Ingrese la cantidad de Aqua vendido");
    console.log("La cantidad de AquaJ vendida fue:" + AquaP + " y su valor es:" + AquaP * AquaPP + "Usd");
    var EmocionP = prompt ("Ingrese la cantidad de Emocion vendido");
    console.log("La cantidad de Emocion vendida fue:" + EmocionP + " y su valor es:" + EmocionP * EmocionPP + "Usd");
    var AlegriaP = prompt ("Ingrese la cantidad de Alegria vendido");
    console.log("La cantidad de Alegria vendida fue:" + AlegriaP + " y su valor es:" + AlegriaP* AlegriaPP + "Usd");
    var FrescuraP = prompt ("Ingrese la cantidad de Frescura vendido");
    console.log("La cantidad de Frescura vendida fue:" + FrescuraP + " y su valor es:" + FrescuraP* FrescuraPP + "Usd");
    VentasTotalesP = (FrescuraP * FrescuraPP + AquaP * AquaPP + EmocionP * EmocionPP + AlegriaP * AlegriaPP) 
    console.log ( FrescuraP * FrescuraPP + AquaP * AquaPP + EmocionP * EmocionPP + AlegriaP * AlegriaPP + "Usd");
    
};


function VendedorDelMes () {

    var VentasTotalesJ= ;
    var VentasTotalesP= ;

     var VendedorDelMes = (){
    if (VentasTotalesJ > VentasTotalesP){
        console.log ("El vendedor del mes es Juana")
    } else {"El vendedor del mes es Pedro"}

    if (VentasTotalesJ < VentasTotalesP){
        console.log ("El vendedor del mes es Pedro")
    } else {"El vendedor del mes es Juana"}
}

};
   




