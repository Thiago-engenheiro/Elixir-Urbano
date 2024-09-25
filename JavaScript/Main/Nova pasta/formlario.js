const handleAddProduct = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const nomeProduto = document.getElementById("ProdutoNome").value;
    const descricaoProduto = document.getElementById("descricao_produto").value;
    const valorProduto = document.getElementById("ValorNome").value;
    const categoriaProduto = document.getElementById("tipo__deferencial").value;
    const categoriaNome = getCategoriaNome(categoriaProduto);
    const imagemProduto = document.getElementById("ProdutoImage");
  
    if (nomeProduto && descricaoProduto && valorProduto && imagemProduto.files[0]) {
      try {
        const base64Image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(imagemProduto.files[0]);
        });
  
        const novoProduto = {
          nome: nomeProduto,
          descricao: descricaoProduto,
          valor: valorProduto,
          categoria: categoriaNome,
          imagem: base64Image
        };
  
        let produtosExistentes = JSON.parse(localStorage.getItem('produtos')) || [];
        produtosExistentes.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtosExistentes));
  
        listaProdutos.appendChild(criarProdutoItem(novoProduto));
        form.reset();
      } catch (error) {
        console.error('Erro ao ler a imagem:', error);
      }
    } else {
      console.log("Nenhum arquivo de imagem selecionado.");
    }
  };
  
document.getElementById("adicionar__Produtos__formulario").addEventListener("submit", handleAddProduct);

// Função para renderizar um item de produto no HTML
function criarProdutoItem(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto__adicionado');

    produtoDiv.innerHTML = `
            <div class="titulos__adiicionado">
                <h4 class="nome__doProduto__adicionado">${produto.nome}</h4>
                <p class="TipoCategoria__adicionado"> categoria do produto: ${produto.categoria}</p>
            </div>
            <div class="informacoesDoProdutoAdicionado">
                <img class="imagemAdicionada" src="${produto.imagem}" alt="${produto.nome}" style="width: 50px; height: 50px;">
                <p>${produto.descricao}</p>
                <p>R$ ${produto.valor}</p>
            </div>
            <div class="div__embaixo">
                <div class="statusProduto">
                    <p class="visualizarMusica__gerenciar--div--DataDaMusica">Data: ${new Date().toLocaleDateString()}</p>
                    <div class="miniLinhaDecoracao"></div>
                    <div class="circulo"></div>
                    <p>Disponível</p>
                    <div class="miniLinhaDecoracao"></div>
                    <a href="../index.html" class="visualizar">Visualizar</a>
                </div>
                <div class="menuDeOpcoes">
                    <button class="editar__produto">Editar nome</button>
                    <button class="excluir__produto">Excluir produto</button>
                </div>
            </div>
        `;

        // Função de edição
    produtoDiv.querySelector('.editar__produto').addEventListener('click', () => {
        const novoNome = prompt("Editar nome do produto:", produto.nome);
        if (novoNome) {
            produtoDiv.querySelector('.nome__doProduto__adicionado').textContent = novoNome;

            // Atualiza o localStorage
            let produtosExistentes = JSON.parse(localStorage.getItem('produtos')) || [];
            const index = produtosExistentes.findIndex(p => p.nome === produto.nome);
            if (index > -1) {
                produtosExistentes[index].nome = novoNome;
                localStorage.setItem('produtos', JSON.stringify(produtosExistentes));
            }
        }
    });

    // Função de exclusão
    produtoDiv.querySelector('.excluir__produto').addEventListener('click', () => {
        // Remove o produto da página
        listaProdutos.removeChild(produtoDiv);

        // Remove o produto do localStorage
        let produtosExistentes = JSON.parse(localStorage.getItem('produtos')) || [];
        produtosExistentes = produtosExistentes.filter(p => p.nome !== produto.nome);
        localStorage.setItem('produtos', JSON.stringify(produtosExistentes));

    });

    return produtoDiv;
}

// Função para pegar o nome da categoria com base no valor selecionado
function getCategoriaNome(categoriaValue) {
    switch (categoriaValue) {
        case "1":
            return "Sem categoria";
        case "2":
            return "Novo";
        case "3":
            return "Destaque";
        case "4":
            return "Promoção";
        default:
            return "Desconhecida";
    }
}



// Função para carregar os produtos do localStorage ao carregar a página
function carregarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.forEach((produto) => {
        const novoProdutoElemento = criarProdutoItem(produto);
        listaProdutos.appendChild(novoProdutoElemento);
    });
}

// Chama a função para carregar os produtos quando a página for carregada

window.onload = function() {
    console.log("Carregando produtos...");
    carregarProdutos();
  }