
function escolhaCarro() {
  var texto;
  var image = document.createElement('img')
  var carro = document.getElementById("carros").value;
  switch (carro) {
    case "Jaguar XJS":
      trocarImagem("Introduzido em 1975, o primeiro problema do Jaguar XJS foi a reputação que tinha de cumprir, pois foi projetado e vendido como um substituto para o lendário E-Type. Abandonando as lindas linhas suaves do corpo, o XJS também era uma magnitude mais pesada que o E-Type. Mas, ainda um carro muito bonito, o XJS se saiu bem como um cupê de luxo e durou a produção até 1996. Alimentado por um (notoriamente não confiável) V12, o Jaguar XJS é uma maneira barata de obter um motor V12 e um clássico britânico.", "https://richmonds.com.au/wp-content/uploads/2021/01/Jag-Maroon-XJS-4.jpg")
      break;
    case "BMW 850i":
      trocarImagem("Apresentado no Salão do Automóvel de Frankfurt de 1989, o Série 8 era um carro muito atraente no início, elogiando muita inovação, luxo, desempenho e boa aparência. Alimentado por um V12, com transmissão manual de 6 velocidades e um coeficiente de arrasto impressionantemente baixo, o 850i era um bom carro e ficou ainda melhor com atualizações como o 850CSi.", "https://www.supercars.net/blog/wp-content/uploads/2016/03/1994_BMW_850CSi1.jpg")
      break;
    case "Mercedes-Benz SL600":
      trocarImagem("O Mercedes SL600 é um grand tourer esportivo e luxuoso, mas não um carro esportivo ágil. Ainda em produção, porém, o SL-Class serve como um dos carros de luxo topo de linha da marca. Oferecido com muitos tipos de motor, o SL indica qual motor ele usa pelo número, com SL600 representando o 6.0 L V12. Introduzido em 1993, o SL600 trouxe consigo aquele grande V12, produzindo impressionantes para a época 389 cv e 420 lb-ft de torque. ", "https://4.bp.blogspot.com/-LBGQybE_e7o/V8J5JL45DzI/AAAAAAAAhJE/oQ43HMPj48otP0j0F84VuFERR_qvr2J6QCLcB/s1600/1998-mercedes-brabus-r129-sl-1.jpg")
      break;
    case "Aston Martin DBS":
      trocarImagem("O modelo Aston Martin DBS - anteriormente conhecido como DBS Superleggera antes de 2022. O DBS oferece o melhor quando se trata de Astons. Por um lado, seu V12 biturbo AM31 de 5,2 litros envia 715 pôneis para as rodas traseiras por meio de um manual de oito marchas, resultando em uma velocidade máxima de 211 mph. Outros recursos interessantes incluem um difusor duplo inspirado na F1, um diferencial mecânico de deslizamento limitado para desempenho máximo na pista e um sistema de escapamento de tubo quádruplo de titânio para a melhor nota de escapamento.", "https://www.chicagoautoshow.com/assets/1/23/VehicleRegularDimensionId/22-DBS-1.jpg")
      break;
    case "McLaren F1":
      trocarImagem("O F1 da McLaren foi projetado desde o início como o veículo por excelência para motoristas que buscavam aproveitar a emoção da estrada. Embora o F1 de 627 cavalos tenha sido apresentado às massas no início dos anos 90, ainda é um ávido competidor hoje - preparando o asfalto e ficando de igual para igual com os supercarros modernos. Para uma plataforma de aspiração natural, é ainda mais impressionante - reinando como um dos veículos mais rápidos da indústria nas últimas duas décadas.", "https://www.carscoops.com/wp-content/uploads/2018/02/mclaren-f1-0.jpg")
      break;
    case "Pagani Zonda":
      trocarImagem("O Pagani Zonda é a segunda reivindicação à fama do fabricante italiano, ostentando uma produção ultralimitada e uma estrutura híbrida de carbo-titânio que o diferencia de seus inúmeros concorrentes hipercarros. O C12 original estreou no Salão Automóvel de Genebra em 1999 e ostentava um motor Mercedes-Benz M120 V12 de 6,0 litros com capacidade para 444 cavalos de potência e 472 lb-ft de torque, acoplado a uma transmissão de cinco marchas para manter tudo em funcionamento. O carro só melhoraria com o tempo, terminando com uma variante de 789 cavalos de potência chamada Zonda HP Barchetta em 2017, solidificando-o como um dos carros mais potentes que já chegou ao mercado de consumo.", "https://i.ytimg.com/vi/6kNNov1nooE/maxresdefault.jpg")
      break;
    case "Selecione um carro":
      trocarImagem("", "")
      break;

    default:
      trocarImagem = ("Insira um dos carros já listados", "")
  }

  function trocarImagem(descricao, url) {
    document.getElementById("imgCarro").src = url;
    document.getElementById("descricaoCarro").innerHTML = descricao;
  }

  window.onload = function () {
    escolhaCarro();
  }
} 
