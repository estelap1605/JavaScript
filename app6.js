


obtener_localstorage();

function obtener_localstorage(){

    

    let nombre = localStorage.getItem("nombre");

    console.log(nombre);
}

function guardar_localstorage(){

    let persona = {

        nombre:"fer",
        edad:31,
        correo:"jdbs@ikndk.com",
        coords: {
            lat:10,
            lng: -10
        }
    };

    let nombre = "pedro";

    localStorage.setItem("nombre", nombre );
    localStorage.setItem( "persona", JSON.stringify(persona));
}