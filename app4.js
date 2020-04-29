


var persona ={

    nombre:"juana",
    apellido:"herrera",
    edad:25,

    direccion:{
      pais:"mexico",
      ciudad:"df",
      edificio:{
        nombre:"principal",
        telefono:"23564893"
      }
    }
};

console.log(persona.direccion.pais);

persona.direccion.zipcode=11111;

var edificio = persona.direccion.edificio;

edificio.nopiso="octpiso";


console.log(persona);