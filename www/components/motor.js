var resultados = [];

		function calcular() {
			var num1 = parseInt(document.getElementById('num1').value);
			var num2 = parseInt(document.getElementById('num2').value);
			var operador = document.getElementById('operator').value;

			var resultado;
			switch (operador) {
				case '+':
					resultado = num1 + num2;
					break;
				case '-':
					resultado = num1 - num2;
					break;
				case '*':
					resultado = num1 * num2;
					break;
				case '/':
					resultado = num1 / num2;
					break;
			}

			resultados.push(resultado);

			document.getElementById('resultado').innerHTML = resultado;
