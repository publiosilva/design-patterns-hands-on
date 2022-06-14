# Decorator

## Problema

Este padrão é utilizado quando é necessário acoplar novos comportamentos a objetos sem que seja necessário gerar uma hieraquia complexa de classes e subsclasses. Um exemplo seria uma aplicação onde é necessário enviar notificações para os usuários por e-mail mas alguns usuários desejam receber a notificação também por outros meios. Um usuário A deseja receber notificações por e-mail e SMS. Um usuário B deseja receber notificações por e-mail e Whatsapp. Se utilizarmos herança para implementar os "notificadores" acabariamos com uma hierarquia de classes muito complexa (por exemplo, poderia surgir um usuário C que deseja receber notificações por e-mail, SMS e Whatsapp).

## Solução

A solução descrita por este padrão é criar um envoltório para um objeto que obedeça a mesma interface do objeto original. Este envoltório é chamado de decorator.

## Exemplos

 - [Enviar notificações](./send-notifications.ts)
