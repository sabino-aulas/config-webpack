# Projeto de exemplo de configuração node e webpack

- Repositório: [https://github.com/sabino-aulas/config-webpack](https://github.com/sabino-aulas/config-webpack)


## Menu

- [Como configurar Webpack](#como-configurar-webpack-leia-tudo-depois-execute)
- [Como configurar Jest para aceitar ES6 (import export)](#como-configurar-jest-para-aceitar-es6-import-export)

## Como configurar Webpack (leia tudo, depois execute):

1. Inicialize um novo projeto NodeJS
    ```
    npm init -y
    ```

2. Instale as dependências webpack
    ```
    npm install webpack webpack-cli webpack-dev-server
    ```

3. Instale o compilador de JS
    ```
    npm install @babel/core babel-loader
    ```
- Explicação: O Babel é um compilador de JavaScript que converte o código ES6 para ES5, que é suportado por todos os navegadores e módulos. O arquivo `.babelrc` (visto mais abaixo) é um arquivo de configuração do Babel que define as configurações do compilador.

4. Para instalar os loaders de CSS
    ```
    npm install css-loader style-loader sass sass-loader
    ```

5. Para instalar o plugin que injeta os módulos no HTML
    ```
    npm install html-webpack-plugin
    ```

6. Crie o arquivo `index.html` e adicione um título simples

7. Crie o arquivo `index.js` e adicione um console log simples

8. Crie o arquivo `index.css` e adicione um estilo para validar

9. Crie e configure o arquivo `webpack.config.js`, copie do arquivo neste repositório! [Link para o arquivo](https://github.com/sabino-aulas/config-webpack/blob/master/webpack.config.js)

10. Importe o arquivo CSS no arquivo `main.js` com `require("./index.css")`

11. Adicione o script de start de servidor no arquivo `package.json`
    ```json
    "scripts": {
        "start": "webpack-dev-server",
        "build": "webpack"
    }
    ```

13. Crie o arquivo `.gitignore` e adicione `node_modules` e `dist`

14. Para iniciar a aplicação, rode no terminal (e não mais no Live Server)
     ```
     npm run start
     ```

## Como configurar Jest para aceitar ES6 (import export)

1. Instale as dependências do Jest e Babel Jest
    ```
    npm install jest babel-jest @babel/preset-env --save-dev
    ```

2. Crie o arquivo de configuração do Babel `.babelrc` na raiz do projeto (precisa ter o ponto na frente do nome do arquivo)
    ```json
    {
      "presets": ["@babel/preset-env"]
    }
    ```
- Presets: São conjuntos de plugins do Babel que são empacotados para serem reutilizados já prontos, incluindo a configuração do jest.

3. Adicione o seguinte trecho de código no arquivo `package.json` para executar os testes com Jest
    ```json
    "scripts": {
      "test": "jest"
    }
    ```
4. Crie os arquivos de teste com a extensão `.test.js` e escreva seus testes utilizando a sintaxe do Jest

5. Execute os testes com o comando
    ```
    npm test
    ```

## Problemas com watcher no Linux
```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```
