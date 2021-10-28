function pedirDatos(){
    let tipo_vehiculo = prompt("Ingrese el tipo de vehiculo");
    let modelo = prompt("Ingrese el modelo");
    let marca = prompt("Ingrese la marca");
    let color = prompt("Ingrese el color");
    let tipo_combustible = prompt("Ingrese el combustible");
    let tipo_transmision = prompt("Ingrese transmision");
    if(tipo_vehiculo.toLocaleLowerCase() == "motocicleta"){
        let tipo_motocicleta = prompt("Ingrese el tipo de motocicleta");
        let  = new Motocicleta(color, marca, modelo, tipo_vehiculo, tipo_combustible, tipo_transmision);
        Motocicleta.registrarMotocicleta(tipo_motocicleta);
    }
console.log(pedirDatos)
}

pedirDatos();





   


