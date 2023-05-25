const cantidadEntradas = document.getElementById("cantidadEntradas");
const btnCalcular = document.getElementById('btnCalcular');
const categoria = document.getElementById('categoria');
const totalCompra = document.getElementById("totalCompra");



function calcular() {
    
    console.log(cantidadEntradas.value)

    switch (categoria.value) {
        case "estudiante":
            totalCompra.innerHTML = 200 * parseInt(cantidadEntradas.value) - (200 * 0.8) ;
          // Código a ejecutar si la expresión coincide con valor1
          break;
        case "trainee":
          // Código a ejecutar si la expresión coincide con valor2
          descuento50 = 200 * parseInt(cantidadEntradas.value) - (200 * 0.50);
          totalCompra.innerHTML = "<span>Total a pagar: $" + descuento50 +  "</span>" ;
          break;
        case "junior":
          descuento15 = 200 * parseInt(cantidadEntradas.value) - (200 * 0.15);
          totalCompra.innerHTML = "<span>Total a pagar: $" + descuento15 +  "</span>" ;

          break;
        // Puedes añadir más casos si es necesario
        default:
          // Código a ejecutar si la expresión no coincide con ningún valor
      }

    
 

}