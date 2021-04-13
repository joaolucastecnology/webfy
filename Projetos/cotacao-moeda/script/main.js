function init() {
  $.ajax({
      type: "GET",
      dataType: "JSON",
      url: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,XRP-BRL",
      success: function(data) {
          let dolar = "";
          dolar += `Codigo: ${data['USDBRL']['code']} <br/>`;
          dolar += `Nome: ${data['USDBRL']['name']} <br/>`;
          dolar += `Compra: ${data['USDBRL']['bid']} <br/>`;
          dolar += `Venda: ${data['USDBRL']['ask']}`;

          let conteudoDolar = document.getElementById('dolar');
          conteudoDolar.innerHTML = dolar;

          let euro = "";
          euro += `Codigo: ${data['EURBRL']['code']} <br/>`;
          euro += `Nome: ${data['EURBRL']['name']} <br/>`;
          euro += `Compra: ${data['EURBRL']['bid']} <br/>`;
          euro += `Venda: ${data['EURBRL']['ask']}`;

          let conteudoEuro = document.getElementById('euro');
          conteudoEuro.innerHTML = euro;

          let btc = "";
          btc += `Codigo: ${data['BTCBRL']['code']} <br/>`;
          btc += `Nome: ${data['BTCBRL']['name']} <br/>`;
          btc += `Compra: ${data['BTCBRL']['bid']} <br/>`;
          btc += `Venda: ${data['BTCBRL']['ask']}`;

          let conteudoBtc = document.getElementById('bitcoin');
          conteudoBtc.innerHTML = btc;

          let eth = "";
          eth += `Codigo: ${data['ETHBRL']['code']} <br/>`;
          eth += `Nome: ${data['ETHBRL']['name']} <br/>`;
          eth += `Compra: ${data['ETHBRL']['bid']} <br/>`;
          eth += `Venda: ${data['ETHBRL']['ask']}`;

          let conteudoEth = document.getElementById('eth');
          conteudoEth.innerHTML = eth

          let xrp = "";
          xrp += `Codigo: ${data['XRPBRL']['code']} <br/>`;
          xrp += `Nome: ${data['XRPBRL']['name']} <br/>`;
          xrp += `Compra: ${data['XRPBRL']['bid']} <br/>`;
          xrp += `Venda: ${data['XRPBRL']['ask']}`;

          conteudoXrp = document.getElementById('xrp');
          conteudoXrp.innerHTML = xrp;
      }
  });
}
