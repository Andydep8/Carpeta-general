class Automovil extends Vehiculos{
    registrarAutomovil(tipoCarro,){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_vehiculo + "</td>";
        html += "   <td>" + this.sedan + "</td>";
        html += "   <td>" + this.camioneta + "</td>";
        html += "   <td>" + this.suv + "</td>";
        html += "   <td>" + this.bus + "</td>";
        html += "   <td>"+ tipoCarro +"</td>";
        html += "</tr>";
        document.getElementById("Vehiculos").insertAdjacentHTML('beforeend', html);
    }
}