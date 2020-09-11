console.log (1)
console.log (1+19)

/*
`Hello World ${1+5}`
*/

// Variables

var saludo = "Hola hola";
var nombre = 'Abraham'
var total = 11;

var completo = `Mensaje Completo:
${5+total}
${saludo}
${nombre}
`

var esmayor = 10 > 5;

var arreglo1 = [1, 2, 3, 4];
console.log(arreglo1[3])

var alumnos = ["Hugo", "Paco", "Juan", "Luis"]
console.log(alumnos[3])

var persona = {
    edad: 18,
    nombre: "Mariano Perez",
    "año": 1990
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona["año"])
console.log(persona);

console.log(completo)
console.log(esmayor)

function saludar (mensaje){
    var nombre = prompt(mensaje);
    alert(`Bienvenido ${nombre}!`)
}


/* clase 9

        var usuario = 'Abraham Bazo'
        var fechanac = 1991
        var fechaact = 2020
        var edad = fechaact - fechanac
        var futuro = 5
        var edadfutura = edad + futuro


        // console.log('hello world')
        // console.log('otro mensaje')
        // console.log(usuario)
        // console.log('Tengo ' + edad + ' años')

        console.warn('Hey, algo está mal')
        console.error('Algo salió muy mal')
        console.log('Hello, ' + usuario)
        console.log('Nací en el año ' + fechanac)
        console.log('Tengo ' + edad + ' años')
        console.log('En ' + futuro + ' años tendré ' + edadfutura) 

/*