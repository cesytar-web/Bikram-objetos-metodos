//ejercicio 1
const coche = {
    marca: 'opel',
    modelo: 'astra',
    matricula: 'htm2937'
}

//ejercicio 2
const casa = {
    codPostal: 48901,
    calle: 'el Desierto',
    portal: 4,
    piso: '2b'
}
//ejercicio 3
const fullStackDeveloper = {
    arrayLanguajes: ['.Net', 'C++', 'Python'],
    arrayProyecto: ['Bikram', 'Clon', 'operador']
}

// ejercicio 4
const perro = {
    nombre: 'Pepo',
    raza: 'pitbull',
    color: 'negro',
    edad: 2,

ladrar: function(){
    console.log('gua', 'guau');
},

popo: function(){
    return Math.random() * 3;

}
   
}

// ejercicio 5
let Portatil = {"marca": "Asus", "modelo": "A33"};
 let marcaPortatil =  Portatil.marca;
 console.log(marcaPortatil);

//ejercicio 6

 let marcaPortatil2 =  Portatil["marca"];
 console.log(marcaPortatil2);

 //ejercicio 7
 let Concierto = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};
 let grupos = Concierto.grupos;
    console.log(grupos);

//ejercicio 8
let Led = {"rojo": "FF", "verde": "00", "azul": "00", "encendido": 'powered'};
const arrayRGB = [Led.rojo, Led.verde, Led.azul];
    console.log(arrayRGB);

//ejercico 9
let Portatil2= {"marca": "Asus", "modelo": "A33"};
Portatil2.marca = 'p345';
console.log(Portatil.marca);

// ejercicio 10
let Concierto2 = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};

Concierto2.cartelera.push("Guns N Roses");
console.log(Concierto.cartelera);

// ejercicio 11
let Concierto3 = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};
Concierto3.fecha = new Date();
console.log(Concierto3.fecha);

//ejercicio 12
let Impresora = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};
Impresora2.imprimiendo = [Impresora2.nombreArchivo, Impresora2.copias, Impresora2.numPaginas];
console.log(Impresora.imprimiendo);

//Declaracion
//ejerccicio 13
const noticia = {
  titular: "",
  cuerpo:""
}

//ejercicio 14
const persona = {
    nombre: "",
    apellido:"",
    edad:
  }

// ejercicio 15
const avion = {
    numeroDePasajeros:"",
    
despegar: function() {
return console.log("despegando");
},

volar: function(){
    return console.log("llegando al detino");
},
arrerizar: function(){
    return console.log("aterrizando")
}
}
// ejercicio 16
const paquete = {
    contenido : [" ", " ", " ",]
}

// ejercicio 17
const pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: ""

}
//Lectura de propiedades
//ejercicio 18
const O_Error = {
    codigo: ""
}
const codError = O_Error.codigo;

//ejercicio 19
Grupo = {"integrantes": ["Pedro", "Paula", "Soledad"], "numIntegrantes": 3};
const grupo = {
    integrantes : []
}
const integrantes = Grupo.integrantes;

//ejercicios 20
let Impresora3 = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};


const  nivelesTinta  = Impresora.tinta;

//ejercicio 21
let Pantalla = {"pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]], "dimensiones": "1080X720"};
const pixeles = Pantalla.pixeles;

//ejercicio 22
let Movil = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};
const  especificaciones = Movil[especificaciones];

//Modiificacion de Propiedades
//ejercicio 23
let Grupo2 = {"integrantes": ["Pedro", "Paula", "Soledad"], "numIntegrantes": 3};

Grupo2.numIntegrantes = 5;

// ejercicio 24
let Pantalla3= {"pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]], "dimensiones": "1080X720"};
Pantalla3.dimensiones = "1920x1080";

//ejercicio 25

if (Led2.encendido){
    Led2.encendido = false;
} else {
    Led.encendido = true;
};

//ejercicio 26
let Movil2 = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};

Movil2.temperatura = "20º";