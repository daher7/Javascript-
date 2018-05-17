/*var micadena = new String("vale");
console.log(micadena);
console.log(micadena.toString()); // para quitar los corchetes.
console.log(micadena.valueOf());  // quitar los corchetes.*/

// Vamos a definir la clase persona. 
// Lo hacemos mediante una funcion y se escribe con mayusculas la primera letra.

function Dni(numero1) {
    this.numero = numero1;
}

Dni.prototype = 
{
    calcularLetra : function()
    {   
        var letra = '';
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE"
        letra = SECUENCIA_DNI.charAt(this.numero%23);

        return letra;
    }
}

var dni = new Dni (53020443);
console.log(dni.numero);
console.log("proto del dni");
console.log(dni.__proto__);
var letra = dni.calcularLetra();
console.log (letra);