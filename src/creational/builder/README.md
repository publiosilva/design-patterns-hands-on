# Builder

## Problema

Este padrão lida com a criação de objetos complexos que necessitam de uma inicialização passo a passo trabalhosa de muitos campos e objetos agrupados. Por exemplo, se queremos construir um hamburguer simples precisaremos de um pão, uma carne e um molho. Mas pode acontecer de você querer um hamburguer com duas carnes, dois molhos, salada e alguns outros adicionais. Se `Hamburguer` for uma classe e todos esses detalhes forem definidos pelo construtor, este construtor ficará muito grande e complexo.

## Solução

A solução descrita por este padrão é extrair o código de criação do objeto de sua própria classe e mover para objetos chamados _builders_. O _Builder_ organiza a criação do objeto em uma série de etapas. Caso seja necessário chamar as etapas em uma ordem específica é possível definir um _diretor_ que encapsula a chamada das etapas de um builder.

## Exemplos

 - [Montagem de hamburguers](./hamburger-assembly.ts)
