//Cree dos variables, my n, para almacenar la longitud de word1y word2.
//Crea una variable de cadena vacía resultpara almacenar el resultado de las palabras fusionadas.
//Creamos dos punteros iy jpara apuntar a los índices de word1y word2. Los inicializamos a ambos en 0.
//Mientras i < m || j < n:
//Si i < m, significa que no hemos recorrido completamente word1. Como resultado, agregamos word1[i]a result. Incrementamos ipara apuntar al siguiente índice de word1.
//Si j < n, significa que no hemos recorrido completamente word2. Como resultado, agregamos word2[j]a result. Incrementamos jpara apuntar al siguiente índice de word2.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let result = "";
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (i<m) {
            result+=(word1[i])
            i++;
        }
        if (j<n) {
            result+=(word2[j])
            j++
        }
    }
    return result;
};


//Dado un entero  n,
//devuelve una counterfunción.
//Esta counterfunción retorna inicialmente  n 
//y luego devuelve 1 más que el valor anterior cada vez que se la llama ( n, n + 1, n + 2, etc.).

const  createCounter = function (n) {
    let currentCounter = n - 1;
    return function () {
        currentCounter++;
        return currentCounter;
    }
}

//Escriba una función  expectque ayude a los desarrolladores a probar su código. Debe aceptar cualquier valor  val y devolver un objeto con las dos funciones siguientes.

//toBe(val) acepta otro valor y devuelve  true si los dos valores  === son iguales. Si no son iguales, debería generar un error  "Not Equal".
//notToBe(val) acepta otro valor y devuelve  true si los dos valores  !== son iguales. Si son iguales, debería generar un error  "Equal".

const expect = function (val) {
    return {
        toBe: function(expected) {
            if (val === expected){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
}