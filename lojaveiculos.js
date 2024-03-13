const lojaVeiculo = {};

function addVeiculo(carro)
{
    lojaVeiculo[carro.modelo] = {
        ano: carro.ano,
        valor: carro.valor
    };
}
function removerVeiculo(modelo)
{
    if(lojaVeiculo[modelo] !== undefined)
    {
        delete lojaVeiculo[modelo];
    }
    else
    {
        console.log(`O veículo ${modelo} não existe no inventário.`);
    }
}

function mostrarLoja() {
    for (let modelo in lojaVeiculo) {
        console.log(`Modelo: ${modelo}, Ano: ${lojaVeiculo[modelo].ano}, Preço: ${lojaVeiculo[modelo].valor}`);
    }
}

addVeiculo({modelo: "Fiat Uno", ano: 2014, valor: 14000});
addVeiculo({modelo: "VOLKSWAGEN GOL", ano: 1994, valor: 7500});
mostrarLoja();

console.log("===============================================")

removerVeiculo("Fiat Uno");
mostrarLoja();

console.log("===============================================")

addVeiculo({modelo: "VOLKSWAGEN SANTANA", ano: 2000, valor: 15900});
removerVeiculo("Fiat Uno");
mostrarLoja();