function init() {
  $.ajax({
      type: "GET",
      dataType: "JSON",
      url: "https://economia.awesomeapi.com.br/json/all",
      success: function(data) {
          let dolar = "";
          dolar += `Codigo: ${data['USD']['code']} <br/>`;
          dolar += `Nome: ${data['USD']['name']} <br/>`;
          dolar += `Compra: ${data['USD']['bid']} <br/>`;
          dolar += `Venda: ${data['USD']['ask']}`;

          let conteudoDolar = document.getElementById('dolar');
          conteudoDolar.innerHTML = dolar;

          let euro = "";
          euro += `Codigo: ${data['EUR']['code']} <br/>`;
          euro += `Nome: ${data['EUR']['name']} <br/>`;
          euro += `Compra: ${data['EUR']['bid']} <br/>`;
          euro += `Venda: ${data['EUR']['ask']}`;

          let conteudoEuro = document.getElementById('euro');
          conteudoEuro.innerHTML = euro;

          let btc = "";
          btc += `Codigo: ${data['BTC']['code']} <br/>`;
          btc += `Nome: ${data['BTC']['name']} <br/>`;
          btc += `Compra: ${data['BTC']['bid']} <br/>`;
          btc += `Venda: ${data['BTC']['ask']}`;

          let conteudoBtc = document.getElementById('bitcoin');
          conteudoBtc.innerHTML = btc;

          let eth = "";
          eth += `Codigo: ${data['ETH']['code']} <br/>`;
          eth += `Nome: ${data['ETH']['name']} <br/>`;
          eth += `Compra: ${data['ETH']['bid']} <br/>`;
          eth += `Venda: ${data['ETH']['ask']}`;

          let conteudoEth = document.getElementById('eth');
          conteudoEth.innerHTML = eth

          let xrp = "";
          xrp += `Codigo: ${data['XRP']['code']} <br/>`;
          xrp += `Nome: ${data['XRP']['name']} <br/>`;
          xrp += `Compra: ${data['XRP']['bid']} <br/>`;
          xrp += `Venda: ${data['XRP']['ask']}`;

          conteudoXrp = document.getElementById('xrp');
          conteudoXrp.innerHTML = xrp;
      }
  });
}
