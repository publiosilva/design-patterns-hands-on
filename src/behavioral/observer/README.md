# Observer

## Problema

Este padrão lida com casos em que um objeto tem interesse no estado que está em outro objeto e deseja saber quando este estado for alterado. Uma analogia é com um cliente que deseja saber quando o seu pedido estiver pronto. O cliente pode escolher ir a loja de tempos em tempos para saber o status do pedido mas é muito provável a maior parte das visitas do cliente serão em vão.

## Solução

Na solução descrita por este padrão, o objeto que está interessado no estado é chamado de assinante e o objeto que possui o estado é chamado de publicador. É criado então um mecanismo que permite que o assinante se inscreva para ser notificado quando o estado do publicador for alterado.

## Exemplos

 - [Notificação de pedido pronto](./order-notification.ts)
