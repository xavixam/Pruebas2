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
    console.log(array2)

}

masGrande(array2)