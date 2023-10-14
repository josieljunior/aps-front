# Use uma imagem base com Node.js
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Comando para iniciar o projeto React
CMD ["npm", "start"]