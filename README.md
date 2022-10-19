#NODE

## Express

É um framework para Node.js que fornece recursos mínimos para construção de servidores web
INSTALL = NPM I EXPRESS --save
1 - Fornece métodos para especificar qual função é chamada quando chega requisição HTTP (GET, POST, SET, etc.) e de rotas e métodos para especificar o mecanismo de modelo ("view") usado, onde o modelo arquivos estão localizados e qual modelo usar para renderizar uma resposta. Você pode usar o middleware Express para adicionar suporte para cookies, sessões e usuários, obtendo parâmetros POST / GET, etc.
2 - Rotas, Parametros,
------------------------------------------------------------------------------------------------------------------------
## MYSQL

DOWNLOAD: Mysql Installer > Server only > Development Machuine
INSTALL BIBLIOTECA PARA USO DO SEQUELIZE: NPM I MYSQL2 --save
CONF: Adiciona o PATH nas confs avancadas

------------------------------------------------------------------------------------------------------------------------
##EJS 
Template Engine - Renderiza HTML 

INSTALL: NPM I EJS --save
CONF: app.set('view  engine','ejs')
CRIAR PASTA VIEWS(Esta pasta esta ligada ao res.RENDER), onde criamos os arquivos .EJS)
Exemplo: 
INDEX.JS
app.get("/:param1",(req,res)=>{

	var params = req.params.param1
	var boolean = true
	var msg = true

	var array = [
	{nome: "gui",
       idade: 28} ]

	res.render("index",{
		param: params,
		boolean: boolean,
		msg: msg
		produtos: array
}
}
INDEX.EJS
<p>Nome: <%= params %></p>

<% if(boolean) { %>
	<p> Alguma coisa</p>
<% } %>

<% produtos.forEach(function(produto){ %>
	<%= produto.nome %>
	<%= produto.idade %>
<% } %>

------------------------------------------------------------------------------------------------------------------------
##Arquivos Estaticos 

app.set(express.static("public")) > Criar pasta public na raiz

------------------------------------------------------------------------------------------------------------------------
##Partials

COMEÇAR: Crie uma pasta "partials" dentro da pasta VIEWS 
USAR: dentro do index.js, voce chama a partial assim <%- include("partials/nomearquivo.ejs" %>

------------------------------------------------------------------------------------------------------------------------
##Sequelize

Manipulador de banco de dados

###COMEÇAR: 
Cria arquivo Database > na pasta Database > const sequelize - require("sequelize") > const connection = new sequelize('banco_name','user','senha',{
	host: localhost,
	dialect: mysql,
	logging: false
})
module.exports = connection
O model representa a tabela

###NO INDEX.JS 
Chama o arquivo de conexão > const connection = require("caminho do arquivo")
							connection.authenticate().then(()=>{}).catch(()=>{})


###CRIANDO MODEL
Novo arquivo Pergunta.js, na pasta Database > Const sequelize - Const connection

Const Pergunta = connection.define('nome_da_tabela',`{
	titulo:{
		type: Sequelize.String,
		allowNull: false},
	descricao:{
		type: Sequelize.Text,
		allowNull: false}
})
Pergunta.Sync({force: false}).then.catch
module.exports = Pergunta

4
NO INDEX.JS: const PergutaModel = require(caminho)
O model sera executado assim que o Index.js for solicitado.

5
Salvar dados do form na tabela
app.post("/",(req.res)=>{
	var 1 = req.body.campo1
	var 2 = req.body.campo2
	
	Pergunta.create({
	campo1: 1,
	campo2: 2
}).then.catch
})

6
Pesquisando dados na tabela
Pergunta.findAll({ order:['id','DESC'] }).then(perguntas => {
	res.render("index",{
	perguntas: perguntas
})
})catch

7
Pesquisando 1 dado na tabela
Pergunta.findOne({where: {id:id }}).then(pergunta => {
	res.render("pergunta",{
	pergunta: pergunta

8
NO INDEX.JS chamamos assim 
	<% perguntas.forEach(pergunta => { %>
		<p> <%= pergunta.titulo %> </p>
	<% } %>

------------------------------------------------------------------------------------------------------------
Controllers - são arquivos que separam a logica das ROTAS do projeto, para não ficar tudo no index.js

Iniciando: Crie uma pasta, e add os controllers dentro dela(ExemploController.js). Apos isso, entre no Index.js, importe as controllers,
com require, e assim voce podera usa-las desta maneira:
app.use("/caminhoquevocequsier",Nome_da_Controller_Importada);

Dentro do Controller, nos precisamos Chamarar a:
Const router = express.Router()
module.exports = router;


---------------------------------------------------------------------------------------------------------------

Models e controllers, utilizam a mesma pasta

---------------------------------------------------------------------------------------------------------------

MODELS - Crie o arquivo Model (Exemplo.js)

Const Exemplo = connection.define('nome_da_tabela',`{
	titulo:{
		type: Sequelize.String,
		allowNull: false},
	descricao:{
		type: Sequelize.Text,
		allowNull: false}
})
Exemplo.Sync({force: false}).then.catch
module.exports = Exemplo


--------------------------------------------------------------------------------------------------------------------

RELACIONAMENTOS - 1p1, 1pM, MpM.

1p1, Voce precisa importar dentro do MODEL1, o MODEL2. (Exemplo: Tab_Artigo Importa Tab_Category)

NO SEQUELIZE - Model1.hasMany(Model2) O Model1 tem varios Model2
		   Model2.belongsTo(Model1) O Model 2 pertence ao Model1

SEQUELIZE No Front - Importar as duas models. 
