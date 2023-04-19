console.log("conectado")
let pedidoActual;

let totalPedidos;

let totalPrecio = 0;

function init(){
    ubicacion();

    var menu_1 = document.getElementById("pizza1").onclick =function(){
    menu_1.value ="pizza_1";
    menu_1.precio = 250;
    //console.log(menu_1.precio); 
    pedidoActual = menu_1;
    agregarPedido();
    //console.log(pedidoActual.value, pedidoActual.precio);
    }

    var menu_2 = document.getElementById("pizza2").onclick =function(){
    menu_2.value ="pizza_2";
    menu_2.precio = 250;
    pedidoActual = menu_2;
    agregarPedido();
    //console.log(menu_2.value);
    } 

    var menu_3 = document.getElementById("pizza3").onclick =function(){
    menu_3.value ="pizza_3";
    menu_3.precio =250;
    pedidoActual = menu_3;
    agregarPedido();
    //console.log(menu_3.value);
    }

    let    numPedidos = 1;

function agregarPedido(){
    switch(pedidoActual.value){
        case "pizza_1":
            totalPedidos = numPedidos ++;
            totalPrecio = menu_1.precio + totalPrecio;
            console.log( totalPedidos, totalPrecio);
            
            break;
        case "pizza_2":
            totalPedidos = numPedidos ++;
            totalPrecio = menu_2.precio + totalPrecio;    
            console.log(totalPedidos, totalPrecio);
            break;
        case "pizza_3":
            totalPedidos = numPedidos ++;
            totalPrecio = menu_3.precio + totalPrecio;
            console.log(totalPedidos, totalPrecio);
            break;
        }
    
    }
}




function ubicacion(){
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(success, error)

}
}


function success(position){
    var coordenadas = position.coords;
    console.log(coordenadas.latitude, coordenadas.longitude);
}

function error (error){
    console.log("se trono apa");
}