Projeto para controle de estoque de medicamentos

Índice
- [Casos de uso](#casos-de-uso)
  - [Requisito 1 - Tela inicial](#requisito-1---tela-inicial)
  - [Requisito 2 - Botões da tela inicial](#requisito-2---bot%c3%b5es-da-tela-inicial)
  - [Requisito 3 - Cadastrar medicamento](#requisito-3---cadastrar-medicamento)
  - [Requisito 4 - Informar estoque](#requisito-4---informar-estoque)
  - [Requisito 5 - Calcular média](#requisito-5---calcular-m%c3%a9dia)
- [Requisitos não funcionais](#requisitos-n%c3%a3o-funcionais)

# Casos de uso

## Requisito 1 - Tela inicial
Pré-condições: Nenhuma

Descrição:

    Como usuário do sistema
    Passo 1 - Gostaria de visualizar uma grid com os medicamentos previamente cadastrados ordernados alfabeticamente ao acessar a tela inicial
    Para poder visualizar todos o medicamento e realizar as ações sobre estas informações

## Requisito 2 - Botões da tela inicial
Pré-condições: Requisito 1

Descrição:

    Como usuário do sistema
    Passo 1 - Gostaria de visualizar um botão, com o texto Adicionar
    Passo 2 - E um botão com o texto Informar movimentações
    Para poder realizar alterações na lista de medicamentos

## Requisito 3 - Cadastrar medicamento
Pré-condições: Requisito 2

Descrição:

    Como usuário do sistema
    Passo 1 - Gostaria que, ao clicar no botão Adicionar, apresente um formulário com o campo "Nome do medicamento"
    Passo 2 - E um botão com o texto Salvar abaixo do formulário
    Passo 3 - E quando clicar no botão Salvar adicione o medicamento na lista de medicamentos
    Passo 4 - E apresente a tela inicial com o medicamento recém adicionado incluso
    Para poder cadastrar os medicamentos que tenho em estoque

Exceção:

    No Passo 3
        Caso não for preenchido o campo "Nome do medicamento"
        Deve apresentar uma mensagem "Informe o nome do medicamento"
        E pare a execução do cenário
        Para que seja preenchido o campo não informado

## Requisito 4 - Informar estoque
Pré-condições: Requisito 1

Descrição:

    Como usuário do sistema
    Gostaria que, ao selecionar um registro
    E clicar no botão Informar movimentações seja apresentado um formulário com o campo Quantidade do primeiro trimestre
    E o campo Valor total do primeiro trimestre
    E o campo Quantidade do segundo trimestre
    E o campo Valor total do segundo trimestre
    E o campo Quantidade do terceiro trimestre
    E o campo Valor total do terceiro trimestre
    E o campo Quantidade do quarto trimestre
    E o campo Valor total do quarto trimestre
    E visualizar um botão com o texto Salvar abaixo do formulário
    E quando clicar no botão Salvar insira essas informações no medicamento previamente cadastrado

## Requisito 5 - Calcular média
Pré-condições: Requisito 4

Descrição:

    Como usuário do sistema
    Gostaria que quando um medicamento tiver os dados de algum dos trimestres preenchido realize o calculo de do valor de aquisição médio por unidade do medicamento
    E apresente na lista da tela inicial uma coluna com esta informação
    Para poder comparar com os valores de mercado em relação aos medicamentos adquiridos

# Requisitos não funcionais

- O sistema deve estar preparado para internacionalização
- O sistema deve ter suporte aos idiomas Português e Inglês
- O sistema deve ter um componente para a criação de formulários
- O sistema deve ser desenvolvido utilizando um destes frameworks: AngularJS, Angular, React, VueJS ou VanillaJS