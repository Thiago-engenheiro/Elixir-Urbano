document.addEventListener('DOMContentLoaded', function() {
    
    // Acessa o botão e as imagens
    const cliqueGarrafa = document.getElementById('garrafa__botao');
    const imagemGarrafa = document.getElementById('imagem__garrafa');

    const menuLateral = document.getElementsByClassName('menuLateral')[0];
   
    const garrafaAtiva = document.getElementsByClassName('corpo__ativo')[0];
    const AtivaTexto = garrafaAtiva.getElementsByClassName('corpo__titulo')[0];

    const tituloPrincipal = document.getElementsByClassName('garrafas__sobreEmpresa')[0];
    const PrincipalDestaque = tituloPrincipal.getElementsByClassName('menssagemProvocativa__destaque')[0];
    const PrincipalDestaque2 = tituloPrincipal.getElementsByClassName('menssagemProvocativa__destaque')[1];

    const garrafas__sobreGarrafa = document.getElementsByClassName('garrafas__sobreGarrafa')[0];
    const cardInformativoProducao__ilustração = garrafas__sobreGarrafa.getElementsByClassName('cardInformativoProducao__ilustração')[0];
    const cardInformativoProducao__titulo = garrafas__sobreGarrafa.getElementsByClassName('cardInformativoProducao__titulo')[0];
    const cardInformativoProducao__texto = garrafas__sobreGarrafa.getElementsByClassName('cardInformativoProducao__texto')[0];

    const BotaoComprar = tituloPrincipal.getElementsByClassName('fisgar__linkChamativo')[0];
    const LerMais = tituloPrincipal.getElementsByClassName('apresentacao__link')[0];
 
    const garrafaApresentacao = document.getElementsByClassName('garrafas__imagens')[0];
    const Apresentacaoimagem = garrafaApresentacao.getElementsByClassName('garrafas__imagem')[0];
    const ApresentacaoTexto = garrafaApresentacao.getElementsByClassName('apresentacao__menssagemProvocativa')[0];

    // Array com os caminhos das imagens
    const imagens = [

        './Imagens/NoCodigo/Main/Apresentacao/Garrafa_belge.png',
        './Imagens/NoCodigo/Main/Apresentacao/Garrafa__branca.png',
        './Imagens/NoCodigo/Main/Apresentacao/Garrafa__verde.png',
        './Imagens/NoCodigo/Main/Apresentacao/Garrafa__cinza.png'

    ];

    // Arrays
    const textosGarrafa = [

        'Edição limitada!',
        'Lançamento exclusivo!',
        'Nova coleção!',
        'Oferta especial!'

    ];

    const textosCorpo = [

        'Grand Aroma',
        'Silver Snake',
        'Brown Snake',
        'Mindnight'

    ];

    const textosUnidades = [

        '⮕ Unidades produzidas 5798',
        '⮕ Unidades produzidas 2000',
        '⮕ Unidades produzidas 12576',
        '⮕ Unidades produzidas 35642'

    ];

    const cores = [

        '#b5ad99',
        '#789fa7', 
        '#548d6a', 
        '#9ca5ad'

    ];

    // Variável para rastrear o índice da imagem atual
    let indiceImagem = 0;

    // Adiciona um evento de clique para alternar as imagens e o texto

    cliqueGarrafa.addEventListener('click', function () {

        // Atualiza o índice da imagem
        indiceImagem = (indiceImagem + 1) % imagens.length;

        // Atualiza a src das imagens
        imagemGarrafa.src = imagens[indiceImagem];
        Apresentacaoimagem.src = imagens[indiceImagem];

        ApresentacaoTexto.textContent = textosGarrafa[indiceImagem];
        ApresentacaoTexto.style.color = cores[indiceImagem];

        garrafaAtiva.style.borderTop = `2px solid ${cores[indiceImagem]}`;
        garrafaAtiva.style.borderRight = 'none'; // Remove a borda do lado direito
        garrafaAtiva.style.borderBottom = `2px solid ${cores[indiceImagem]}`;
        garrafaAtiva.style.borderLeft = 'none';

        AtivaTexto.textContent = textosCorpo[indiceImagem];
        AtivaTexto.style.color = cores[indiceImagem];

        PrincipalDestaque.style.color = cores[indiceImagem];
        PrincipalDestaque2.style.color = cores[indiceImagem];

        BotaoComprar.style.backgroundColor = cores[indiceImagem];
        LerMais.style.color = cores[indiceImagem];

        cardInformativoProducao__ilustração.src = imagens[indiceImagem];
        cardInformativoProducao__titulo.textContent = textosCorpo[indiceImagem];
        cardInformativoProducao__texto.textContent = textosUnidades[indiceImagem];

        menuLateral.style.backgroundColor = cores[indiceImagem]; // Define a cor de fundo
    
    });

});