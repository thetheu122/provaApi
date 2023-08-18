import {alterarContato, buscarContato, buscarPorFavorito, buscarPorNome, cadastroIntervalo, deletar, inserirContato}   from '../repository/contatoRepository.js'

import { Router } from 'express'
const server = Router()

server.post('/contato', async (req,resp) => {
    try{
        const ContatoParaInserir = req.body

        const contatoinserido = await inserirContato(ContatoParaInserir)

        resp.send(contatoinserido)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/contato', async (req,resp) => {
    try{
        const resposta = await buscarContato()
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/contato/busca', async (req,resp) => {
    try{
        const nome = req.query.nome

        const resposta = await buscarPorNome(nome)
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/contato/favorito', async(req,resp) => {
    try{
        const resposta = await buscarPorFavorito()
        resp.send(resposta)
    }
    catch(err){
        resp.status(402).send({
            erro:err.message
        })
    }
})

server.get('/contato/cadastro', async (req,resp) => {
    try{
        const inicio = req.query.inicio
        const fim = req.query.fim

        const resposta = await cadastroIntervalo(inicio,fim)
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/contato/:id', async (req, resp) => {
    try {
        const {id} = req.params
        const alterada = req.body

        const resposta = await alterarContato(id,alterada)
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/contato/:id' , async (req, resp) => {
    try{
        const {id} = req.params
        
        const resposta = await deletar(id)
        resp.status(204).send()

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server