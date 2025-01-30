import express from 'express';


const app = express();

app.listen(9090, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);

    //const conexao = await pool.getConnection();

    //console.log(conexao.threadId);

    //conexao.release();
})