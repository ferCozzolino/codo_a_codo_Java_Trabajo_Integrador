const cantidadEntradas = document.getElementById("cantidadEntradas");
const btnCalcular = document.getElementById('btnCalcular');
const categoria = document.getElementById('categoria');
const totalCompra = document.getElementById("totalCompra");



function calcular() {
    
    console.log(cantidadEntradas.value)

    switch (categoria.value) {
        case "estudiante":
          precioSinDescuento = parseInt(cantidadEntradas.value)*200;
          descuento15 = precioSinDescuento - (precioSinDescuento * 0.80);
          totalCompra.innerHTML = "<span>Total a pagar: $" + descuento15 +  "</span>" ;
          break;
        case "trainee":
         
          precioSinDescuento = parseInt(cantidadEntradas.value)*200;
          descuento50 = precioSinDescuento - (precioSinDescuento * 0.50);          
          totalCompra.innerHTML = "<span>Total a pagar: $" + descuento50 +  "</span>" ;
          break;
        case "junior":
          precioSinDescuento = parseInt(cantidadEntradas.value)*200;
          descuento15 = precioSinDescuento - (precioSinDescuento * 0.15);
          totalCompra.innerHTML = "<span>Total a pagar: $" + descuento15 +  "</span>" ;

          break;
        
        default:
          
      }

    
 

}

function borrar(){
  totalCompra.innerHTML = "<span>Total a pagar: $ </span>" ;
}