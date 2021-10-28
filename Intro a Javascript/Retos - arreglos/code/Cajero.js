usuarios = document.getElementById("cliente");
contraseñas = document.getElementById("contraseña");
error = document.getElementById("warnings");
valor = document.getElementById("saldo");
Imonto = document.getElementById("monto");
Rmonto = document.getElementById("Rmonto");
 

var objeto = {};
var objeto2 = {};


var cuentas = [
  { nombre: "Mali", saldo: 200, password: 'helloworld' },
  { nombre: "Gera", saldo: 290, password: 'l33t' },
  { nombre: "Maui", saldo: 67, password: '123' }
];

var valid = false;

function ingresar (){

var x = document.getElementById("cliente").value;
var y = document.getElementById("contraseña").value;

validar(x, y);

}


function validar(usuario, contraseña) {

    for (var i=0; i <cuentas.length; i++) {
        if ((usuario == cuentas[i].nombre) && (contraseña == cuentas[i].password)) {
            valid = true;
            objeto = cuentas[i];
            break;  
        }
        else {
          objeto = {};
        }
    } 
    if(valid) {
      document.getElementById("opciones").style.display ="block";
    }
    else {
      alert("invalid credentials");
    }
}



function OConsulta(){
    document.getElementById("opciones").style.display ="none";
    document.getElementById("contraseña").value="";
    document.getElementById("cliente").value="";
    
}


function Osaldo ( ) {
  document.getElementById("saldo1").value = objeto.saldo;
  
} 



function Imontos (){
  let saldo1 = document.getElementById("saldo2").value;
  document.getElementById("saldo3").value = objeto.saldo + parseInt(saldo1);
  console.log(saldo1);
  if(document.getElementById("saldo3").value >= 990){
    alert ("Tu saldo no puede ser mayor a 990")
    return true;
  }

}

function Rmontos(){
  let saldo4 = document.getElementById("saldo4").value;
  let saldo5 = document.getElementById("saldo3").value;
  document.getElementById("saldo3").value = saldo5 - saldo4;
  if (document.getElementById("saldo3").value <= 10){
    alert  ("Tu saldo no puede ser menor a 10")
    return false;
  }
  
} 





 

















 












 







    

    




 


    


    
    

