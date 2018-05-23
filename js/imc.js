/*
Definir un constructor de persona con los atributos y métodos necesarios para poder usarlo en el ejemplo de imc.html
*/

function Persona(peso, altura) {
    this.peso = peso;
    this.altura = altura;
}

Persona.prototype =
    {
        calcularImcn: function () {
            var imcn = 0;
            imcn = (this.peso / (this.altura * this.altura));
            return imcn;
        }

        // Para poder definir más funciones dentro del proto hay que usar comas.
        , calcularImcl: function () {
            var imcl = "";
            var imcn = this.calcularImcn(); // Para poder llamar a la función que nos calcula el imc numérico.
            if (imcn < 16) {
                imcl = "Desnutrido";
            } else if (imcn >= 16 && imcn < 18) {
                imcl = "Delgado";
            } else if (imcn >= 18 && imcn < 25) {
                imcl = "Normal";
            } else if (imcn >= 25 && imcn < 31) {
                imcl = "Sobrepeso";
            } else if (imcn >= 31) {
                imcl = "Obeso";
            }
            return imcl;
        }

    }
