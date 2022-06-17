# Chain of responsibility

## Problema

Este padrão é útil para remover duplicação de código em algorítmos com etapas que variam de acordo com o contexto. Por exemplo, considere um algorítmo para extrair o preço de uma lista de produtos e retornar a média. Inicialmente a lista de produtos é extraída de um arquivo csv mas posteriormente é visualizada a necessidade de em algumas situações extrair esses dados de um arquivo json. A maior parte do algorítmo permanece inalterada a única diferença é o modo de extrair os dados.

## Solução

A solução envolve inicialmente separar o algorítmo em etapas. Após isso, as etapas que são comuns a todas as implementações são deixadas em uma superclasse e as etapas mais específica são definidas como métodos abstratos na superclasse. Após isso, são criadas subclasses que implementam os métodos abstratos da superclasse.

## Exemplos

 - [Price average](./price-average.ts)
