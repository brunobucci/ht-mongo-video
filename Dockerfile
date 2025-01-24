# Use a imagem oficial do MongoDB
FROM mongo:latest

# Crie um diretório para os scripts de inicialização
COPY ./init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

# Declare o diretório de dados como persistente
VOLUME /data/db

# Exponha a porta padrão do MongoDB
EXPOSE 27018

# Comando padrão para rodar o MongoDB
CMD ["mongod"]