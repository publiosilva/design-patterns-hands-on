# Abstract factory

## Problema

Este padrão resolve um problema semelhante ao do padrão _factory method_. Meste padrão é especialmente útil quando há um conjunto de objetos que devem ser criados dependendo do contexto. Por exemplo, considerando que você tenha uma tela e deseja renderizar vários elementos gráficos (botões, caixas de texto, etc). Cada um desse elementos varia de acordo com o sistema operacional. Além disso, os elementos de um sistema operacional devem ser utilizados em conjunto (não faz sentido usar o botão do Windows e a caixa de texto do Linux).

## Solução

A primeira parte da solução proposta por este padrão envolve definir as interfaces dos objetos que serão criados. A segunda parte é criar uma interface que possui métodos para a criação de cada tipo de objeto. Esta interface é a fábrica abstrata. Após isso, basta criar implementações concretas da fábrica abstrata.

## Exemplos

 - [UI application](./ui-application.ts)
