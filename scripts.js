// Descripcion
document.getElementById("boton-description").addEventListener("click", function(){
document.getElementById("parrafo").classList.toggle("expand-text");
document.getElementById("fade").classList.toggle("display-none");

if (document.getElementById("boton-description").innerHTML == "Ver menos"){      
    document.getElementById("boton-description").innerHTML = "Ver más...";
} else {  
    document.getElementById("boton-description").innerHTML = "Ver menos";
}
})

// Fotografias
document.getElementById("boton-fotografias-1").addEventListener("click", function(){

    console.log("click fotografia 1");

    // document.getElementById("bloque-boton-ver-mas-fotografias-1").classList.toggle("display-none");

    document.getElementById("panel-fotografia-oculto").classList.toggle("display-none"); 
    
    if (document.getElementById("boton-fotografias-1").innerHTML == "Ver menos"){      
        document.getElementById("boton-fotografias-1").innerHTML = "Ver más...";
    } else {  
        document.getElementById("boton-fotografias-1").innerHTML = "Ver menos";
    }
})


//Reduciendo a funcion
// function verMasVerMenos(botonID){
//     console.log("hola");
//     if (document.getElementById(botonID).innerHTML == "Ver menos"){      
//         document.getElementById(botonID).innerHTML = "Ver más...";
//     } else {  
//         document.getElementById(botonID).innerHTML = "Ver menos";
//     }
// }

// document.getElementById("boton-fotografias-2").addEventListener("click", function(){
//     console.log("click fotografia 2");

//     document.getElementById("fotografias-2").classList.toggle("display-none");

//     document.getElementById("bloque-boton-ver-mas-fotografias-1").classList.toggle("display-none");
// })

