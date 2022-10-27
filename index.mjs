// npm install correios-brasil --save

import { consultarCep, calcularPrecoPrazo, rastrearEncomendas } from "correios-brasil"

// CONSULTAR CEP 

const cep = '88054260'; 
consultarCep(cep).then(response => {
  console.log(response);
});

// CALCULAR PRAZO E VALOR

// Código do serviço:

// 04014 = SEDEX à vista

// 04065 = SEDEX à vista pagamento na entrega

// 04510 = PAC à vista

// 04707 = PAC à vista pagamento na entrega

// 40169 = SEDEX12 ( à vista e a faturar)

// 40215 = SEDEX 10 (à vista e a faturar)

// 40290 = SEDEX Hoje Varejo



let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '88054260',
    sCepDestino: '88034500',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço - pesquisar o que é
    nVlDiametro: '0',
  };
  
  calcularPrecoPrazo(args).then(response => {
    console.log(response);
  });

//   CODIGO DE RASTREIO 

let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
});
