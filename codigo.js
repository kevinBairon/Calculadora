function agregarNumero(numero) {
    const input = document.getElementById('resultado');
    if (input.value === '0') {
        input.value = numero;
    } else {
        input.value += numero;
    }
}

function agregarOperador(operador) {
    const input = document.getElementById('resultado');
    input.value += operador;
}

function borrar() {
    const input = document.getElementById('resultado');
    input.value = '0';
}

function calcular() {
    const input = document.getElementById('resultado');
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}