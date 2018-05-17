/*var micadena = new String("vale");
console.log(micadena);
console.log(micadena.toString()); // para quitar los corchetes.
console.log(micadena.valueOf());  // quitar los corchetes.*/

// Vamos a definir la clase persona. 
// Lo hacemos mediante una funcion y se escribe con mayusculas la primera letra.

// Esta es la funcion constructora (tipo)
function Dni(numero1) {
    this.numero = numero1; // En este contexto this es la variable nueva que se va creando.
}

Dni.prototype =
    {
        calcularLetra: function () {
            var letra = '';
            var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE"
            letra = SECUENCIA_DNI.charAt(this.numero % 23); // this es la variable que llamas. En este caso es 

            return letra;
        }
    }

// definir un método estático o tambien llamada a funcion de clase. No depende de nada, como la funcion math.random que genera numeros aleaotiros.
Dni.esValido = function (cadena) {
    var valido = false;

    //valido = !isNaN(cadena) && (cadena>0);
    if(isNaN(cadena) && (cadena>0)){
        valido = true;
    } else {
        valido = false;
    }
    /*
    if(isNaN(cadena)) {
        valido = false;
    } else if (cadena.length != 8) {
        valido = false;
    } else {
        valido = true;
    }
    */
    return valido;
}

var dni = new Dni(53020443);
console.log(dni.numero);
console.log("proto del dni");
console.log(dni.__proto__);
var letra = dni.calcularLetra();
console.log(letra);

var correcto = Dni.esValido("53020443");
console.log(correcto);

console.log(Dni.esValido(53020443));