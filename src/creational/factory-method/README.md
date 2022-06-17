# Factory method

## Problema

Este padrão é útil quando um objeto precisa criar instâncias de objetos de diferentes tipos mas que seguem uma mesma interface. Por exemplo, imagine que você tenha uma tela e deseje criar um botão. Dependendo do sistema operacional a aparência do botão pode variar. Quanto mais variáções existirem mais complexo ficará o código.

## Solução

A solução descrita por este padrão envolve fornecer uma interface para a criação de objetos em uma superclasse e deixar os detalhes específicos de cada tipo de objeto para subclasses.

## Exemplos

 - [UI application](./ui-application.ts)
