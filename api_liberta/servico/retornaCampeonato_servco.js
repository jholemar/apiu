import pool from "./conexao.js"

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
        'select id, campeao, vice, ano from campeonatos');
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
}