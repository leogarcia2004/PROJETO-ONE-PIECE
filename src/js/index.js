
        const personagens = [
            {
                tituloNome: "Tony Chopper" ,
                imagem: "tony-chopper.png" ,
                descricaoImagem: "Tony Chopper",
                descricaoPersonagem: "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação."
            },
            {
                tituloNome: "Roronoa Zoro" ,
                imagem: "roronoa-zoro.png" ,
                descricaoImagem: "Roronoa Zoro" ,
                descricaoPersonagem: "Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida."     
            },
            {
                tituloNome: "Nami" ,
                imagem: "nami.png" ,
                descricaoImagem: "Nami",
                descricaoPersonagem: "Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo."
            },
            {
                tituloNome: "Sanji" ,
                imagem: "sanji.png" ,
                descricaoImagem: "Sanji",
                descricaoPersonagem: "Também conhecido como 'Perna Negra Sanji', este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo."
            }
        ]

        const containerPersonagens = document.querySelector('.personagens') 

        for(const person of personagens){

            const personagem = 
                `
                    <div class="personagem">
                        <img class="imagem" src="src/imagens/personagem-${person.imagem}" alt="${person.descricaoImagem}">
                        <div class="conteudo">
                            <i class="logo"></i>
                            <h2 class="nome-personagem">${person.tituloNome}</h2>
                            <p class="descricao">${person.descricaoPersonagem}</p>
                        </div>
                    </div>
                `

            containerPersonagens.innerHTML += personagem
        }


        const botoesPersonagem = [
            {     
                imagemBotao: "chopper.png",
                tituloImagemBotao: "Tripulação Chopper"
            },
            {
                imagemBotao: "zoro.png",
                tituloImagemBotao: "Tripulação Roronoa Zoro"
            },
            {
                imagemBotao: "nami.png",
                tituloImagemBotao: "Tripulação Nami"
            },
            {
                imagemBotao: "sanji.png",
                tituloImagemBotao: "Tripulação Sanji"
            }
        ] 

        const containerBotoes = document.querySelector('.botoes')

        for(const bot of botoesPersonagem){

            const botao = 
                `
                <li>
                    <button class="botao">
                        <img src="src/imagens/tripulacao-${bot.imagemBotao}" alt="${bot.tituloImagemBotao}">
                    </button>
                </li>    
                `

                containerBotoes.innerHTML += botao
        }



    const botoes = document.querySelectorAll('.botao') 

    const personagem = document.querySelectorAll('.personagem')

    botoes.forEach((botao, indice) => { 

        botao.addEventListener('click', () => {

            desselecionarBotap()
            desselecionarPersonagem()

            botao.classList.add('selecionado')
            personagem[indice].classList.add('selecionado')
        })
    })
    
 
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotap() {
    const botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

