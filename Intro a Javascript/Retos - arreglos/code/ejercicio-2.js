class Vehiculos {
    constructor(tipo_vehiculo, tipo_transmision, tipo_combustible, modelo, marca, color,){
        this.tipo_vehiculo = tipo_vehiculo,
        this.tipo_transmision = tipo_transmision,
        this.tipo_combustible = tipo_combustible,
        this.modelo = modelo,
        this.marca = marca,
        this.color = color
        
    }

    registrarVehiculos(){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_vehiculo + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "</tr>";
        document.getElementById("Vehiculos").insertAdjacentHTML('beforeend', html);
    }

}