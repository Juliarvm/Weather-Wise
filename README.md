# WeatherWise

Este é um projeto de previsão do tempo que utiliza a API do OpenWeatherMap para exibir as condições climáticas de uma cidade, incluindo temperatura, umidade, velocidade do vento, descrição do clima e ícone. A aplicação também utiliza a API do Unsplash para buscar imagens da cidade, proporcionando uma experiência visual agradável ao exibir o fundo da página com imagens relacionadas à cidade pesquisada.

## Tecnologias Utilizadas
- JavaScript: Linguagem principal utilizada para o desenvolvimento da aplicação.
- API OpenWeatherMap: Para obter dados climáticos em tempo real.
- API Unsplash: Para buscar imagens aleatórias das cidades.
- HTML/CSS: Para estruturar e estilizar a interface de usuário.

## Funcionalidades
- Busca de cidade: Permite ao usuário buscar o clima de qualquer cidade ao digitar o nome da cidade.
- Exibição de dados climáticos: Exibe informações sobre a cidade, temperatura, umidade, velocidade do vento, descrição do clima e ícones relacionados ao clima.
- Exibição de bandeira do país: Mostra a bandeira do país da cidade consultada.
- Alteração de fundo dinâmico: O fundo da página é alterado com uma imagem aleatória da cidade, fornecida pela API do Unsplash.
- Alteração de gradiente de fundo: O gradiente do fundo da página muda dinamicamente de acordo com o clima da cidade pesquisada.
- Sugestões de cidades: Oferece botões de sugestão para facilitar a busca de algumas cidades.


## Instruções para Executar o Sistema
1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` no seu navegador.
3. Insira o nome de uma cidade na caixa de pesquisa e clique em "Buscar" ou pressione "Enter".
4. O clima da cidade será exibido juntamente com uma imagem da cidade e uma bandeira do país.

## Decisões de Projeto
- Utilizou-se JavaScript para o desenvolvimento do front-end e para as interações com as APIs.
- A API do OpenWeatherMap foi escolhida para fornecer dados meteorológicos, pois ela oferece informações detalhadas sobre o clima.
- A API do Unsplash foi integrada para melhorar a experiência visual da aplicação, proporcionando imagens da cidade pesquisada.
- A mudança de gradiente de fundo foi implementada para dar uma sensação mais imersiva de acordo com o clima da cidade.
- A aplicação foi projetada para ser simples e direta, com foco na funcionalidade de busca e exibição de informações meteorológicas.

