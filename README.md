## Como utilizar (leia tudo, depois execute):

1. Inicialize um novo projeto NodeJS
    ```
    $ npm init -y
    ```

2. Instale as dependências webpack
    ```
    $ npm install webpack webpack-cli webpack-dev-server
    ```

3. Instale o compilador de JS
    ```
    $ npm install @babel/core babel-loader
    ```

4. Para instalar os loaders de CSS
    ```
    $ npm install css-loader style-loader sass sass-loader
    ```

5. Para instalar o plugin que injeta os módulos no HTML
    ```
    $ npm install html-webpack-plugin
    ```

6. Crie o arquivo `index.html` e adicione um título simples

7. Crie o arquivo `index.js` e adicione um console log simples

8. Crie o arquivo `index.css` e adicione um estilo para validar

9. Crie e configure o arquivo `webpack.config.js`, copie do arquivo neste repositório! [Link para o arquivo](https://github.com/sabino-aulas/config-webpack/blob/master/webpack.config.js)

10. Importe o arquivo CSS no arquivo `main.js` com `require("./index.css")`

11. Adicione o script de start de servidor no arquivo `package.json`

12. Crie o arquivo `.gitignore` e adicione `node_modules` e `dist`

13. Adicione o comando 'start' no package.json
    ```json
    "scripts": {
        "start": "webpack-dev-server"
    }
    ```

14. Para iniciar a aplicação, rode no terminal (e não mais no Live Server)
     ```
     $ npm run start
     ```

## Problemas com watcher no Linux
```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```