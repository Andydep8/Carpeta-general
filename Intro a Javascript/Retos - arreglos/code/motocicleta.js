class Motocicleta extends Vehiculos{
    registrarMotocicleta(tipo_motocicleta){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_vehiculo + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>"+ tipo_motocicleta +"</td>";
        html += "</tr>";
        document.getElementById("Vehiculos").insertAdjacentHTML('beforeend', html);
    }
}