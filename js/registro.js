/**
 * Cargar la libreria de Jquery y ubicar el cursor en el campo de registrar
 */
 $(document).ready(function () {
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
function registrar(){
    //capturar los datos que ingreso el usuario en la pagina
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos={
        email : $("#useremail").val(),
        password : $("#password").val(),
        name : $("#username").val()
        
    }

    let datosPeticion = JSON.stringify(datos)

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
        url: "http://152.70.212.46:8080/api/user/new",
        
        //envio datos capturados por el usuario a la peticion
        data: datosPeticion,

        //tipo de peticion
        type: 'POST',

        contentType: "application/JSON",

        //tipo de contenido
        dataType: 'json',

        //success: funcion con acciones si todo sale ok
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)	
        },

        //error: funcion con acciones si hay error
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);		
            console.log("Algo falló");	
        },
        //complete: funcion con al final de la petición
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log("Todo anda bien"  + status);
        }
    });
}

/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 * 
 * Configura mensaje de bienvenida o de error según el caso
 */
function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)

}

function estadoInicial(){
    $("#username").focus()
}

