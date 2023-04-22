console.log("conectado")
let pedidoActual;

let totalPedidos;

let totalPrecio = 0;

let     pedidoPizza1 = 0;
let     pedidoPizza2 = 0;
let     pedidoPizza3 = 0;

function init(){
    ubicacion();
    initMap();

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
    //////////////


}


function agregarPedido(){
    switch(pedidoActual.value){
        case "pizza_1":
            pedidoPizza1 = pedidoPizza1 + 1;
            totalPrecio = menu_1.precio + totalPrecio;
            console.log( "pedido1: " + pedidoPizza1, totalPrecio);
            
            break;
        case "pizza_2":
            pedidoPizza2 = pedidoPizza2 + 1;
            totalPrecio = menu_2.precio + totalPrecio;    
            console.log("pedido2: " + pedidoPizza2, totalPrecio);
            break;
        case "pizza_3":
            pedidoPizza3 = pedidoPizza3 + 1;
            totalPrecio = menu_3.precio + totalPrecio;
            console.log("pedido3: " + pedidoPizza3, totalPrecio);
            break;
        }
    
    }
}


function ubicacion(){
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(success, error)

}
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.5293, lng: -5.6773},
        zoom: 13,
      });
      var marker = new google.maps.Marker({
        position: {lat: 43.542194, lng: -5.676875},
        map: map,
    title: 'Acuario de Gijón'
      });
    }



function success(position){
    var coordenadas = position.coords;
    
    console.log(coordenadas.latitude, coordenadas.longitude);
}

function error (error){
    console.log("se trono apa");
    
}

function mostrarCompra(){
    //console.log("hola,yo te muestro la compra");
/*
    if(pedidoPizza1 == 0 % pedidoPizza2 == 0 & pedidoPizza3 == 0){
        mostrar.innerHTML =" No hay pedidos aún. esta bug " + "<br>";
    }else
*/


     if(pedidoPizza1 != 0){
        mostrar.innerHTML += "Pizza 1: " + pedidoPizza1 + "<br>";
    }
    if(pedidoPizza2 != 0){
        mostrar.innerHTML += "Pizza 2: " + pedidoPizza2 + "<br>";
    }
    if(pedidoPizza3 != 0){
        mostrar.innerHTML += "Pizza 3: " + pedidoPizza3 + "<br>";
    }
    if(totalPrecio == 0){
        mostrar.innerHTML =" No hay pedidos aún. " + "<br>";
    }else{
        mostrar.innerHTML += " Total: " + totalPrecio + "<br>";
    }
}

function borrarCompra(){
    mostrar.innerHTML = "";
}

function resetCompra(){
    mostrar.innerHTML = "";
    pedidoPizza1 = 0;
    pedidoPizza2 = 0;
    pedidoPizza3 = 0;
    totalPrecio = 0;
}

