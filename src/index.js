import 'dotenv/config' 

import express from 'express';
import cors from 'cors';

import contatoController from './controller/contatoController.js'

const server = express()
server.use(cors())
server.use(express.json())


server.use(contatoController)


server.listen(process.env.PORT, () => console.log(`API CONECTADA na porta: ${process.env.PORT}`))