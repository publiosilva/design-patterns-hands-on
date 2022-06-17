# Chain of responsibility

## Problema

Este padrão é útil em casos onde é necessário realizar lidar de diversas maneiras com um dado de entrada ou quando existe uma sequência bem definida de ações que devem ser tomadas para lidar com o dado de entrada. É possível fazer uma analogia com o processo de atendimento de um chamado pela equipe de suporte de uma empresa. Quando o cliente liga ele é atendido por um robô, se for necessário o robô passa a solicitação para um atendente humano que ou resolve o chamado ou passa adiante até que ele seja resolvido. Poderíamos modelar este problema como uma classe _Support_ que contém um método _handle_. Contudo, quando mais e mais etapas fossem adicionadas o método _handle_ ficaria cada vez mais complexo.

## Solução

A solução que este padrão descreve envolve separar cada etapa do processamento do dado de entrada em classes chamados de handlers, onde todos os handlers obedecem a uma mesma interface.

## Exemplos

 - [Sitema de suporte](./order-notification.ts)
