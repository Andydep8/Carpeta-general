let NEstudiante: []; 
let NCarnet: [];
function ingresarNotas () {
    let notas ={};

    let nombre = document.getElementById("Nombre del Estudiante").value;
    let badge = document.getElementById("Numero de Carnet").value;
    let periodo1 = document.getElementById("Ingresar notas periodo 1").value;
    let periodo2 = document.getElementById("Ingresar notas periodo 2").value;
    let periodo3 = document.getElementById("Ingresar notas periodo 3").value;
    let periodo4 = document.getElementById("Ingresar notas periodo 4").value;


    notas.estudiante = nombre; 
    notas.badge = badge;
    notas.periodo1= periodo1;
    notas.periodo1= periodo2;
    notas.periodo1= periodo3;
    notas.periodo1= periodo4;
    

    document.getElementById("Nombre del Estudiante").value="";
    document.getElementById("Numero de Carnet").value="";
    document.getElementById("Ingresar notas periodo 1").value="";
    document.getElementById("Ingresar notas periodo 2").value="";
    document.getElementById("Ingresar notas periodo 3").value="";
    document.getElementById("Ingresar notas periodo 4").value="";
    document.getElementById("registros").innerHTML = "";

    mostrarRegistro();
    calcularTotal();

}

function mostrarRegistro() {
    var html = "";
    for (let index = 0; index < articulos.length; index++) {
        let elemento = articulos[index];
        html += "<tr>";
        html += "   <th scope='row'>" + (index + 1) + "</th>";
        html += "   <td>" + elemento.nombre + "</td>";
        html += "   <td>" + elemento.cantidad + "</td>";
        html += "   <td>" + elemento.precio + "</td>";
        html += "   <td>" + elemento.vendedor + "</td>";
        html += "</tr>";
    }
    console.log(html);
    document.getElementById("registros").innerHTML = html;
}
