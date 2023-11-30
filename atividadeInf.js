function valorTotal() {
  const produtos = [
    { codigo: 1, nome: "Produto A", preco: 10.0 },
    { codigo: 2, nome: "Produto B", preco: 20.0 },
    { codigo: 3, nome: "Produto C", preco: 15.0 },
  ];
  let quantidade = get.ElemendById('quant');
  var produto = get.ElemendById('codi');
  let valor=0;
  switch (produto) {
    case 1:
      for (let i = 0; i < produtos.length; i++) {
        if(produto==produtos[i].codigo){
           valor = quantidade*produtos[i].preco;

        }
      }
      case 2:
        for (let i = 0; i<produtos.length;i++){
            if(produto==produtos[i].codigo){
                valor = quantidade*produtos[i].preco;
            }
        }
        case 3:
            for (let i = 0; i<produtos.length;i++){
                if(produto==produtos[i].codigo){
                    valor = quantidade*produtos[i].preco;
                }
            }
  }
  var resposta = document.getElementById('resposta');
  resposta.innerHTML = valor;
}

