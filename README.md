# Projeto para controle de estoque de medicamentos

Índice
- [Como proceder](#como-proceder)
- [Casos de uso](#casos-de-uso)
  - [Requisito 1 - Tela inicial](#requisito-1---tela-inicial)
  - [Requisito 2 - Botões da tela inicial](#requisito-2---bot%c3%b5es-da-tela-inicial)
  - [Requisito 3 - Cadastrar medicamento](#requisito-3---cadastrar-medicamento)
  - [Requisito 4 - Informar estoque](#requisito-4---informar-estoque)
  - [Requisito 5 - Calcular média](#requisito-5---calcular-m%c3%a9dia)
- [Requisitos não funcionais](#requisitos-n%c3%a3o-funcionais)

## Como proceder

Passo 1 - Crie um fork deste projeto

Passo 2 - Implemente os Casos de uso e os requisitos não funcionais

Passo 3 - Criar um pull request com a proposta de solução

## Casos de uso

### Requisito 1 - Tela inicial
Pré-condições: Nenhuma

Descrição:

    Como usuário do sistema, gostaria de visualizar uma listagem com pelo menos 5 medicamentos previamente cadastrados ordernados alfabeticamente ao acessar a tela inicial.
    • Deve permitir filtrar os medicamentos pelo nome.
    • Deve permitir alterar a ordenação padrão.
    • Deve permitir visualizar todos o medicamento.
    • Deve permitir realizar as ações sobre os medicamentos selecionados (Ver requisito 2).

### Requisito 2 - Botões da tela inicial
Pré-condições: Requisito 1

Descrição:

    Como usuário do sistema, gostaria de adiconar novos medicamentos e informar a movimentação deles.
    • Deve permitir adicionar um novo medicamento em um formulário.
    • Deve permitir informar movimentações e editar o medicamento em um formulário.

### Requisito 3 - Cadastrar medicamento
Pré-condições: Requisito 2

Descrição:

    Como usuário do sistema, gostaria que o formulário de novo medicamento solicite o nome do medicamento, a dosagem, unidade de medida e quantidade em inicial de estoque.
    • Deve permitir apresentar um formulário com os campos solicitados.
    • Deve permitir que o campo do nome do medicamento seja obrigatório.
    • Deve permitir salvar o novo medicamento.
    • Deve permitir cancelar o cadastrodo novo medicamento.
    • Deve permitir apresentar o medicamento salvo na listagem ao salvar.
    • Deve voltar para a tela de listagem após salvar.

### Requisito 4 - Informar estoque
Pré-condições: Requisito 1

Descrição:

    Como usuário do sistema, gostaria que ao clicar em Informar movimentações seja apresentado um formulário com os campos 
    - Quantidade do primeiro trimestre; 
    - Valor total do primeiro trimestre; 
    - Quantidade do segundo trimestre;
    - Valor total do segundo trimestre;
    - Quantidade do terceiro trimestre;
    - Valor total do terceiro trimestre;
    - Quantidade do quarto trimestre;
    - Valor total do quarto trimestre;
    • Deve permitir salvar a movimentações informadas.
    • Deve permitir atualizar as informações na listagem.

### Requisito 5 - Calcular média
Pré-condições: Requisito 4

Descrição:

    Como usuário do sistema, gostaria que quando um medicamento tiver os dados de algum dos trimestres preenchido realize o cálculo do valor de aquisição médio por unidade do medicamento
    • Deve permitir calcular o valor de aquisição médio.
    • Deve permitir apresentar na listagem uma coluna com o valor de aquisição médio.
    • Deve permitir comparar os valores dos medicamentos adquiridos.

## Requisitos não funcionais

- O sistema deve estar preparado para internacionalização.
- O sistema deve ter suporte aos idiomas Português e Inglês.
- O sistema deve ter um componente para a criação de formulários.
- O sistema deve ser desenvolvido utilizando um destes frameworks: AngularJS, Angular, React, VueJS ou VanillaJS.
