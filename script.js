console.log("Hola Mundo")

const nombre = "Guillermo";
let apellido = "Lara";

console.log(nombre)
console.log(apellido);

//nombre = "Memo";
apellido = "Rosales";

console.log(apellido)


//objetos de javascript
const persona = {
    nombre : "Guille",
    apellido : "LR",
    edad : 20,
    apodos : [
        "Gordo",
        "Mino",
        "Memo"
    ]
};

persona.apellido = "RL"
console.log(persona.apellido);
console.log("====================Fin Objetos====================")


/*function saludar (nombre) {
    return "Hola " + nombre;
}*/

/*const saludar = (nombre) => {
    return "Hola " + nombre;
}*/

/*const saludar = nombre => 
    "Hola " + nombre;*/

const saludar = nombre => 
    "Hola " + nombre;

const saludo = saludar(persona.apellido);

console.log(saludo)

console.log("==================Fin Funciones===================")
console.log("==================Lista Numeros===================")

const listaNumeros = [
    5, 10, 3, 8, 9
];

console.log(listaNumeros)

listaNumeros[3] = 7;

console.log(listaNumeros)

const numerosMulti = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy *3
    }
);

console.log(numerosMulti)

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return {
            valor: numeroEnElQueVoy
        };
    }
);

console.log(numerosEnObjetos)
