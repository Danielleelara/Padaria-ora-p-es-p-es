(function(){
  'use scrict';

  const form = document.querySelector("form");

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      let produto = obtemProdutoDoFormulario(event.target);
      adicionaProdutoNaTabela(produto);
      form.reset();
  });

  function adicionaProdutoNaTabela(produto) {
    let produtoTr = montaTr(produto);
    let tabela = document.querySelector("#tabela-produtos");
    tabela.appendChild(produtoTr);
  }

  function obtemProdutoDoFormulario(form) {
  let produto = {
      produto: form.produto.value,
      quantidade: form.quantidade.value,
      valor: form.valor.value,
      total: form.total.value,
      
    };

    return produto;
  }

  function montaTr(produto) {
    let produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto");

    produtoTr.appendChild(montaTd(produto.produto, "produto"));
    produtoTr.appendChild(montaTd(produto.quantidade, "quantidade"));
    produtoTr.appendChild(montaTd(produto.valor, "valor"));
    produtoTr.appendChild(montaTd(produto.total, "total"));
    

    return produtoTr;
  }

  function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
  }
})();