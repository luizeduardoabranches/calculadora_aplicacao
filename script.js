const calculate = document.getElementById('calculate');

function imc () {
    const nome = document.getElementById('nome').value;
    const aplicacao = document.getElementById('aplicacao').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (aplicacao !== '' && juros !== '' && parcelas !== '') {
        
        var taxaJuros = juros/100;
        var valorfinal = (aplicacao * (((1+taxaJuros)**parcelas)-1)/taxaJuros).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        resultado.textContent = `${nome}, se você aplicar ${aplicacao}, à taxa de juros de ${juros}% ao mês, durante ${parcelas} meses, acumulará uma poupança de ${valorfinal}`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calculate.addEventListener('click', imc);