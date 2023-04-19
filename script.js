console.log("conectado")
let pedidoActual;

let totalPedidos;

let totalPrecio = 0;

function init(){


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
    pedidoActual = menu_3.value;
    //console.log(menu_2.value);
    } 

    var menu_3 = document.getElementById("pizza3").onclick =function(){
    menu_3.value ="pizza_3";
    pedidoActual = menu_3.value;
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
            totalPedidos = pedidoActual.value;
            totalPrecio = menu_2.precio;    
            console.log(totalPedidos, totalPrecio);
            break;
        case "pizza_3":
            totalPedidos = pedidoActual.value;
            totalPrecio = menu_3.precio;
            console.log(totalPedidos, totalPrecio);
            break;
        }
    
}
}

function ubicacion(){
    var ubicacion = document.getElementById("ubicacion").onclick = function(){
        console.log("a")


    }


}

