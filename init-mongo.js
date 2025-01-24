db = db.getSiblingDB('video'); // Cria ou acessa o banco 

// Criação de coleções e inserção de dados
db.videos.insertMany([
    { nome: "Video 1", status: "Erro" },
    { nome: "Video 2", status: "Finalizado" },
    { nome: "Video 3", status: "Processando" }
]);

print("Banco de dados e coleções configurados com sucesso!");