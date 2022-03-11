function Converter() {
    var valorCapturado = document.getElementById("valor"); 
    var valor = valorCapturado.value;
    var valorCapturadoEmReal = parseFloat(valor * 5);
  
   
    var elementoValorConvertido = document.getElementById("valorConvertido"); 
    var valorConvertido = "O resultado em real é R$ " + valorCapturadoEmReal; 
  
    elementoValorConvertido.innerHTML = valorConvertido; 
  }
  