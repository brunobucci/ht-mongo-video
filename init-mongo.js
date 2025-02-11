db = db.getSiblingDB('Hackathon'); // Cria ou acessa o banco 

// Criação da coleção "usuario" sem inserir documentos
db.createCollection("video");

db.createUser({
    user: "soat7grupo5",
    pwd: "Hc9YCOqLHPsKvf7e",
    roles: [{ role: "root", db: "Hackathon" }]
});

print("Banco de dados e coleções configurados com sucesso!");  