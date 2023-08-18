import { con } from "./connection.js";

export async function inserirContato(agenda){

    const comando = 
    `INSERT INTO TB_AGENDA (NM_CONTATO, DS_TELEFONE, DS_EMAIL, BT_FAVORITO, DT_CADASTRO)
    VALUES (?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [agenda.contato, agenda.telefone, agenda.email, agenda.favorito, agenda.cadastro])
    agenda.id  = resposta.insertId

    return agenda
}


export async function buscarContato() {
    const comando = 
    `SELECT * FROM TB_AGENDA`

    const [linhas] = await con.query(comando)
    return linhas
}

export async function buscarPorNome(nome) {
    const comando = 
    `SELECT * FROM TB_AGENDA WHERE NM_CONTATO = ?`

    const [resposta] = await con.query(comando, [nome])
    return resposta
} 


export async function buscarPorFavorito () {
    const comando = 
     `SELECT * FROM TB_AGENDA WHERE BT_FAVORITO = true`

     const [resposta] = await con.query (comando)
     return resposta
}

export async function cadastroIntervalo(inicio, fim){
    const comando = 
    `SELECT * FROM TB_AGENDA
    WHERE DT_CADASTRO BETWEEN ? AND ?`

    const [resposta] = await con.query (comando, [inicio, fim])

    
}

export async function alterarContato(id,agenda){
    const comando = 
    ` UPDATE TB_AGENDA
    SET NM_CONTATO = ?, DS_TELEFONE = ?, DS_EMAIL = ?, BT_FAVORITO = ? WHERE ID_AGENDA = ?`

    const [resposta] = await con.query (comando,[agenda.contato, agenda.telefone, agenda.email, agenda.favorito,id])
    return resposta.affectedRows;
}


export async function deletar(id){
    const comando = 
    `DELETE FROM TB_AGENDA WHERE ID_AGENDA = ?`

    const [resposta] = await con.query(comando, [id])
    return  resposta.affectedRows
}