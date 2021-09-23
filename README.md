# Em construção . . .

## passos:
- instalei o typescript no modo de desenvolvimento, instalei o express e o @types/express
```sh
yarn add typescript -D
yarn add express
yarn express -D @types/express
```
- rodei o comando para converter o arquivo ts para js:
    yarn tsc src/nome_do_arquivo.ts
    yarn tsc --init (cria o arquivo de configuração do typescript)
    yarn tsc (roda o arquivo)

    node src/nome_do_arquivo.js ( roda o arquivo e levanta o servidor na máquina)

## automatizando build do typescript para o js
- No arquivo tsconfig.json eu habilito a linha: 
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
- Instalo a lib abaixo porque possibilita rodar ts sem fazer o build no modo dev
```sh
yarn add ts-node-dev -D
```
- No arquivo Package.json eu adiciono:
"scripts":{
    "build": "tsc",
    "dev:server": "ts-node-dev --ignore node_modules src/server"
  }

## para levantar a aplicacação
```sh
yarn dev:server
```