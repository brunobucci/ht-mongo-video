db = db.getSiblingDB('Hackathon'); // Cria ou acessa o banco 

// Criação da coleção "video" sem inserir documentos
db.createCollection("video");

print("Banco de dados e coleções configurados com sucesso!");