# Singleton

## Problema

Este padrão é utilizado em situações onde é necessário que um objeto seja instanciado apenas uma vez.

## Solução

A solução descrita por este padrão envolve tornar o construtor do objeto privado e fornecer um método estático para retornar a instância do objeto. Uma conquência disso é que o objeto passa a ter um ponto de acesso global.

## Exemplos

 - [Banco de dados baseado em memória](./memory-based-database.ts)
