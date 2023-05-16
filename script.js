

console.log("conectado")
let pedidoActual;

let totalPedidos;

let totalPrecio = 0;

let     pedidoPizza1 = 0;
let     pedidoPizza2 = 0;
let     pedidoPizza3 = 0;
let     coordsGlobales;

let encryptedData = 0;

function init(){
    
    ubicacion();


    var menu_1 = document.getElementById("pizza1").onclick =function(){
    menu_1.value ="pizza_1";
    menu_1.precio = 200;
    //console.log(menu_1.precio); 
    pedidoActual = menu_1;
    agregarPedido();
    //console.log(pedidoActual.value, pedidoActual.precio);
    }

    var menu_2 = document.getElementById("pizza2").onclick =function(){
    menu_2.value ="pizza_2";
    menu_2.precio = 200;
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


//Guardar pedidos en variables
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
//////////Funciones Ubicación y mapa //////////

//Obtener ubicación del cliente
function ubicacion(){
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(success, error)
    }
}

function success(position){
    var coordenadas = position.coords;
    console.log(coordenadas.latitude, coordenadas.longitude);
    var cords = coordenadas
    initMap(coordenadas);
    coordsGlobales = coordenadas;
}

function error (error){
    alert("se trono apa");
    
}


//Creación el mapa
function initMap(coordenadas) {
    //console.log(coordenadas.latitude, coordenadas.longitude);
    var map = L.map('map').setView([coordenadas.latitude, coordenadas.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([coordenadas.latitude, coordenadas.longitude]).addTo(map);
    marker.bindPopup("<b>Aquí van a caer</b><br>tus pizzas.").openPopup();
    
}

////Funciones para agregar las compras al modal

function mostrarCompra(){


     if(pedidoPizza1 != 0){
        mostrar.innerHTML += "Pizza de Pepperoni: " + pedidoPizza1 + "<br>";
    }
    if(pedidoPizza2 != 0){
        mostrar.innerHTML += "Pizza Huawaiiana: " + pedidoPizza2 + "<br>";
    }
    if(pedidoPizza3 != 0){
        mostrar.innerHTML += "Pizza 3 Carnes: " + pedidoPizza3 + "<br>";
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

///////////////////////
////////// Funciones Lambda //////////

    //en reparación...
    const enviarPedidosLambda = async () =>{
        const pedidoFinal = {
          "pizza1": pedidoPizza1,
          "pizza2": pedidoPizza2,
          "pizza3": pedidoPizza3,
          "total": totalPrecio,     
        }
        //se guarda en una variable el link de nuestra API REST 
        //para comunicarnos con la función lambda
        const lambdaEndpoint = 'https://gtwe7hrihi.execute-api.us-east-2.amazonaws.com/TesteoPedidos/pedidotest';
      //se realiza una solicitud con el uso de la función fetch
        await fetch(lambdaEndpoint, {
            //Se establece el metodo
          method: 'POST',
          //Los encabezados son para validar los "CORS" 😫
          headers: { 'Content-Type': 'application/json' },
          //convertir un objeto Js en una cadena JSON
          body: JSON.stringify(pedidoFinal)
        })
        //La respuesta se convierte en un objeto Js
        .then(response => response.json())
        //Se accede al cuerpo de la respuesta y se ejecuta 
        //un alert que muestra los datos encriptados devueltos
         .then( data => {console.log(data);
             encryptedData = data.encryptedData;
            alert("tu pedido: " + encryptedData)
            console.log('Valor cifrado:', encryptedData);
            
        })
        
        //por si truena
        .catch(error => console.error(error));
    
        
    }
    

    const desencriptarPedidos = async () => {

        //console.log(encryptedData)
        const dataEncrypt = {
            "encryptedData": encryptedData,
        }
        //const lambda =`https://900d8x4r1a.execute-api.us-east-2.amazonaws.com/test/testcors?latitude=${latitude}&longitude=${longitude}`
    const lambda = 'https://900d8x4r1a.execute-api.us-east-2.amazonaws.com/test/testcors'
        
        await fetch(lambda, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataEncrypt)
          })
          .then(response => response.json())
          .then(data => {console.log(data, "desde ubi")
            alert("tu pedido desencriptado apa: " + data.decryptedData)    
        })
          .catch(error => console.error(error));
        
       
        }



/*const desencriptarPedidos = () =>{

    const lambdaEndpoint = "https://gtwe7hrihi.execute-api.us-east-2.amazonaws.com/TesteoPedidos/pedidotest"
    let name = "juan" 

     fetch (lambdaEndpoint,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(name)
     })
     .then(response =>response.json())
     .then(data=> {
        console.log(data);
        alert("tu pedido desencriptado es: " , data)
     })

}
*/