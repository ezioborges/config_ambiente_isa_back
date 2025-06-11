import cors from 'cors';
import 'dotenv/config';
// faltou import a dotenv/config para que .env possa ser lido
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// faz com que o express entenda JSON com o tipo 'Content-Type: application/json'
// ou seja, toda vez que vc enviar um JSON no corpo da requisição
//o express vai transformar o JSON em obj para ser usado no código, sem precisar fazer manualmente com um body-parser (JSON.parse())

app.use(express.urlencoded({ extended: true }));
// quando recebe um formulário o navegador faz um POST na rota com os dados em formato 'application/x-www-form-urlencoded'
// no back-end com a linha ativada da pra acessar os dados do formulário do req.body (quando eu tentei fazer o rerq.body, foi por isso que não funcionou)

app.use(cors());
// o cors é usado para que o backend aceite requisições feitas por outros domínios
// normalmente o front-end e o back-end tem domínios diferentes exemplo: backend: http://localhost:3000 e front-end: http://localhost:5173

app.post('/admin', function (req, res) {
	console.log('req.body POST ===> ', req.body);

	res.send('Page admin');
});

app.get('/aluno', function (req, res) {
	console.log('req.body GET ===> ', req.body);
	res.send('Page alunos');
});

app.get('/professor', function (req, res) {
	res.send('Page professor');
});

app.listen(port, () => console.log(`rodando na porta ${port}`));
