//1 
function mayusc (nombre) {

    for (let i = 0; i < nombre.length; i++) {

        if(nombre.charAt(i) == "a" || 
        nombre.charAt(i) == "e" || 
        nombre.charAt(i) == "i" || 
        nombre.charAt(i) == "o" || 
        nombre.charAt(i) == "u") {

            console.log(nombre.charAt(i).toUpperCase());

        } else {

            console.log(nombre.charAt(i).toLowerCase());

        }
        

    }

}

mayusc("xavier")

//2
const array1 = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];

function masque5 (array1) {
    
    for (let i = 0; i < array1.length; i++) {
        
        let elem = array1[i];
        
        if (elem.length > 5) {

            console.log(elem);

        }

    }

}

masque5 (array1);

//3
function comparar (n1, n2) {

    if (n1 > n2) {

        console.log("true");

    } else if (n1 < n2) {

        console.log("false");

    }

}

comparar(6, 5)
comparar(2, 4)

//4
function numPalabras (cadena) {

    console.log(cadena.split(" ").length)

}

console.log("The Bridge es genial")
numPalabras("The Bridge es genial")

//5
const array2 = [1, 2, 3, 4, 5];

function masGrande (array2) {
    
    let anterior;
    let mayor;

    for (let i  = 0; i < array2.length; i++) {
        
        anterior = array2[i] - 1;

        if(anterior < array2[i]) {

            mayor = array2[i];

        } else {

            mayor = anterior;

        }

    }

    console.log(mayor);

}

masGrande(array2)

//6
let nombre = "Xavi"

console.log(nombre.substring(0, 1))

//7
let palabra = "Reconocer";

function alReves (palabra) {

    for (let i = palabra.length; i >= 0; --i ) {

        console.log(palabra.charAt(i))

    }

}

alReves(palabra)

//8
const array3 = [1, 2, 3, 4, 5];

function media (array3) {
    
    let sum = 0;

    for (let i = 0; i < array3.length; i++) {

        sum += array3[i];

    }

    console.log(sum/array3.length)

}

media(array3)

//9
function entre3 (n) {

    if(n % 3 == 0) {

        console.log("True")

    } else {

        console.log("False")

    }

}

entre3(9)
entre3(11)

//10
function comparar(s1, s2) {

    if (s1.length == s2.length) {

        console.log("True")

    } else {

        console.log("False")

    }

}

comparar("seis", "tres");
comparar("uno", "cuatro");

//11
const array4 = [1, 2, 3, 4, 5];

function elevar (array4) {

    const cuadrados = [];

    for (let i = 0; i < array4.length; i++) {

        cuadrados.push(Math.pow(array4[i], 2));

    }
        console.log(cuadrados)
}

elevar(array4)

//12
let pal = "reconocer";

function palindromo (pal) {

    let pal2 = pal.split("").reverse().join("");

    if (pal == pal2) {

        console.log("True")

    } else {

        console.log("False")

    }

}

palindromo(pal)
palindromo("xavi")

//13
const array5 = [1, 2, 3, 4, 5];

function hayNum (array5, n) {

    for (let i = 0; i < array5.length; i++) {

        if (array5[i] == n) {

            return console.log("True",n);

        } else {
    
             console.log("False");
    
        }

    }

}

hayNum(array5, 3);
hayNum(array5, 6);