### Pre Requisitos

* [Nodejs](https://nodejs.org/en/download/) - Site oficial

* [Java-jre](https://www.oracle.com/technetwork/pt/java/javase/downloads/jre8-downloads-2133155.html) - Site oficial


Use npm para instalar Protractor 

```
npm install -g protractor
```

Atualize Webdriver Manager

```
webdriver-manager update
```

## Executando os testes

Depois que tiver instalado os pré requisitos, execute os comandos abaixo:

Para iniciar o servidor execute:

```
webdriver-manager start
```
Para escolher a porta que será executado o servidor, execute:
```
webdriver-manager start --seleniumPort {port}
```
Para iniciar os testes, execute:
```
protractor conf.js
```

### Objetivo do teste

O objetivo do teste é acessar o link do linkedin, logar com o usuário e senha e visualizar a página inicial.
