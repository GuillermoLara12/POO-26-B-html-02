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

// funcion filter

/*const numerosx = [50, 70, 30, 10, 100];
const numerosFiltrados = numerosx.filter(
    (numX) => {
        return numX > 50;
    }
);*/

const numerosx = [50, 70, 30, 10, 100];
const numerosFiltrados = numerosx.filter(
    numX => numX > 50
);

console.log(numerosFiltrados)

const personas = [
    {
        nombre : "Memo",
        edad : 20
    },
    {
        nombre : "Max",
        edad : 21
    },
    {
        nombre : "Lian",
        edad : 12
    },
    {
        nombre : "Axel",
        edad : 11
    },
];

const personasMayores = personas.filter(
    (personaX) => {
        return personaX.edad > 17;
    }
);

console.log(personasMayores)

// funcion reduce

/*const sumatoria = numerosY.reduce(
    (variablePersistente, elemento) => {
        variablePersistente = variablePersistente + elemento;
        return variablePersistente;
    },
    0
)*/

const numerosY = [3,6,9,12,16];

const sumatoria = numerosY.reduce(
    (variablePersistente, elemento) => variablePersistente + elemento
    ,
    0
)

console.log(sumatoria)