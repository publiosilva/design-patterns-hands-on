# Builder

## Problema

Este padrão é utilizado em situações em que um modelo da aplicação forma uma estrutura de árvore mas é necessário lidar com essa estrutura como se fosse um objeto individual. Por exemplo, imagine que temos uma caixa que pode guardar produtos e também outras caixas que por sua vez também podem guardar produtos e outras caixas menores. Se desejamos saber a soma do preço de todos os produtos contidos na caixa mais externa precisaremos saber também a soma do preço dos produtos contidos nas caixas menores.

## Solução

A solução descrita por este padrão é definir uma interface comum para os objetos que compoem a árvore.

## Exemplos

 - [Calcular preço total dos produtos em uma caixa](./calculate-package-price.ts)
