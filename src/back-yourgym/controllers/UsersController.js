import { db } from "../db.js";

export const getUsers = (_, res) => {
    const query = "SELECT * FROM usuario"

    db.query(query, (err, data) => {
        if(err) return res.json({
            error: true,
            message: "Erro ao consultar usuarios",
            data: null
        })
        
        return res.status(200).json({
            error: false,
            data: data,
            message: "Usuarios retornados com sucesso"
        })
    })
}

export const CreateUser = (req, res) => {
    const data = req.body;
    const query = "INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)" 
    
    db.query(query, [data.name, data.email, data.senha] ,(err, data) => {
        console.log(err, data)
        if(err) return res.json({
            error: true,
            message: "Erro ao criar usuario",
            data: null
        })
        
        return res.status(200).json({
            error: false,
            data: data,
            message: "Usuario cadastrado com sucesso"
        })
    })
}

export const getUser = (req, res) => {
    const { name, senha } = req.query;
    const query = "SELECT * FROM usuario WHERE nome = ? AND senha = ? LIMIT 1";
    console.log(name, senha)
    db.query(query, [name, senha], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({
                error: true,
                message: "Erro ao buscar usuário",
                data: null
            });
        }

        return res.status(200).json({
            error: false,
            data: data,
            message: "Usuário encontrado com sucesso"
        });
    });
};