const app = require('./app');
const connection = require('./connection');

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`A conexão está sendo executada na porta ${PORT}`);

    // O código abaixo é para testarmos a comunicação com o MySQL
    const [result] = await connection.execute('SELECT 1');
    console.log(result);
    if (result) {
       console.log('Conexão ao BD feita com sucesso!');
    }
})