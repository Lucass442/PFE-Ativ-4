function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);
    const desconto = parseFloat(document.getElementById('desconto').value);

    const valorTaxa = (preco - desconto) * taxaPorcentagem/100;
    const lucroBruto = (preco - desconto) - valorTaxa;

    const lucroArredonado = Math.ceil(lucroBruto);

    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('out-lucro').innerText = "R$" + lucroArredonado.toFixed(2);

    const lucroElement = document.getElementById('out-lucro');
    lucroElement.classList.remove('red', 'green');
    if (lucroArredonado < 50) {
        lucroElement.classList.add('red');
    } else if (lucroArredonado > 50) {
        lucroElement.classList.add('green');
    }
    
    document.getElementById('resultado').classList.remove('hidden');
}