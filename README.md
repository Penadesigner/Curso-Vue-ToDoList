## Express

NPM I EXPRESS --save

Fornece recursos mínimos para construção de servidores web, e métodos para especificar qual função é chamada quando chega requisição HTTP (GET, POST, SET, etc.) e de rotas e métodos para especificar o mecanismo de modelo ("view") usado, onde o modelo arquivos estão localizados e qual modelo usar para renderizar uma resposta. Você pode usar o middleware Express para adicionar suporte para cookies, sessões e usuários, obtendo parâmetros POST / GET, etc.

##### SESSIONS

NPM i EXPRESS-SESSION

```
const sessions = require("express-session")
app.use(sessions({
	secret: "husahusahusahudhufasfaifaoi". cookie: {maxAge: 30000}
}))
```

------------------------------------------------------------------------------------------------------------------------
## MYSQL

DOWNLOAD: Mysql Installer > Server only > Development Machuine

CONF: Adiciona o PATH nas confs avancadas

PARA USO DO SEQUELIZE: NPM I MYSQL2 --save


------------------------------------------------------------------------------------------------------------------------
## EJS 

Template Engine - Renderiza HTML 

NPM I EJS --save

CONF: 
```
app.set('view  engine','ejs')
```

CRIAR PASTA VIEWS (Esta pasta esta ligada ao res.RENDER), onde criamos os arquivos .EJS.

Exemplo: 

##### INDEX.JS<
```
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

```
##### INDEX.EJS
```
<p>Nome: <%= params %></p>

<% if(boolean) { %>
	<p> Alguma coisa</p>
<% } %>

<% produtos.forEach(function(produto){ %>
	<%= produto.nome %>
	<%= produto.idade %>
<% } %>
```

------------------------------------------------------------------------------------------------------------------------
## Arquivos Estaticos 

app.set(express.static("public")) > Criar pasta public na raiz

------------------------------------------------------------------------------------------------------------------------
## Partials

COMEÇAR: Crie uma pasta "partials" dentro da pasta VIEWS 

USAR: dentro do index.js, voce chama a partial assim:
```
<%- include("partials/nomearquivo.ejs" %>
```
------------------------------------------------------------------------------------------------------------------------
## Sequelize

Manipulador de banco de dados

##### COMEÇAR: 

Cria arquivo Database > na pasta Database >  > 

```
]const sequelize - require("sequelize")
const connection = new sequelize('banco_name','user','senha',{
	host: localhost,
	dialect: mysql,
	logging: false,
	timezone: '-03:00' // ajusta o horario conforme no brasil
})
module.exports = connection
```

##### NO INDEX.JS 

Chama o arquivo de conexão > 
```
const connection = require("caminho do arquivo")
connection.authenticate().then(()=>{}).catch(()=>{})
```

##### CRIANDO MODEL

Novo arquivo Pergunta.js, na pasta Database > Const sequelize - Const connection
```
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
```

##### NO INDEX.JS
```	
const PergutaModel = require("caminho_do_arquivo_Model")
```

O model sera executado assim que o Index.js for solicitado.


##### Salvar dados do form na tabela

```
app.post("/",(req.res)=>{
	var 1 = req.body.campo1
	var 2 = req.body.campo2

	Pergunta.create({
	campo1: 1,
	campo2: 2
}).then.catch
})
```
##### Pesquisando dados na tabela

```
Pergunta.findAll({ order:['id','DESC'] })
   .then(perguntas => {
	res.render("index",{
	    perguntas: perguntas
	})
})catch
```
##### Pesquisando 1 dado na tabela

```
Pergunta.findOne({where: {id:id }})
    .then(pergunta => {
	res.render("pergunta",{
		pergunta: pergunta
```
##### Mostrando na Tela

```
<% perguntas.forEach(pergunta => { %>
	<p> <%= pergunta.titulo %> </p>
<% } %>
```

##### CRUD 

exemplo.create({campo1: 1,campo2: 2}).then.catch

exemplo.destroy({where: {id: id}})

exemplo.findByPk(id)

exemplo.update({campoAtualizar: campoAtualizar},{where: {id: id}})

##### JOINS

```
Article.findAll({include: [{model: Category}]})
    .then(article => {
	res.render("pergunta",{article: article})
```

------------------------------------------------------------------------------------------------------------

## KNEX

Comece criando o arquivo database.js

```
const knex = require("knex")({
client:'mysql2',
connection: {
	host:'',
	user:'',
	password:'',
	database:'',
}
})

module.exports = knex;
```

Importe o arquivo database onde for usar, e comece a usa-lo

##### INSERT

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.insert(novo_game).table(nome_tabela).then.catch
```

##### SELECT

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.select(novo_game).table(nome_tabela).then.catch
```

##### SELECT ORDER BY

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.select(novo_game).table(nome_tabela).orderBy({"ano","DESC"})
```

##### CONSULTA POR CAMPOS ESPECIFICOS

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.select({"nome", "ano"}).table(nome_tabela).then.catch
```

##### CONSULTA COM WHERE

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.select({"nome", "ano"}).table(nome_tabela).where({nome: "gta"}).then.catch
```

##### NESTED QUERY

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}

DB.insert(novo_game).table(nome_tabela).then(() => {
	DB.select({"nome", "ano"}).table(nome_tabela).then(data => {
		console.log(data)
	}).catch(erro => {
		console.log(erro)
	})
}).catch(() => {
	console.log(erro)
})

```


##### DELETE

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.table(nome_tabela).where({nome: "gta"}).delete()then.catch
```

##### UPDATE

```
const DB = require("database.js")
var novo_game = {
	nome: "gta",
	ano: 2000
}
DB.table(nome_tabela).where({nome: "gta"}).update({ano:2001})then(data=>{}).catch(erro=>{})
```

##### TRANSACTIONS

```
const DB = require("database.js")

async function nome_func(){
	try{
		await DB.transaction(async transicao => {
			await DB.insert({nome: "pri"}).table(nome_tabela)
			await DB.insert({nome: "seg"}).table(nome_tabela)
			await DB.insert({nome: "ter"}).table(nome_tabela)
		}
	} 
	catch (err){
		console.log(err)
	}
}
nome_func()
```

##### JOINS

Cria o relacionamento nas tabelas, atraves de uma FORENKEY

Tab1 { id }

Tab2 { ref_id }

Criar ForengKey: Colunas ref_id - Tabela Tab1 - Coluna id - Cascade - Cascade

```
const DB = require("database.js")

DB.select({podemos passar aqui os campos que queremos e de qual tabela, e podemos renomear este campo: "tab1.id as game_id"}).table(tab1).innerJoin("tab2","tab2.ref_id","tab1.id") // ele da um innerJoin onde o resultado for tab2 ref_id = tab id

```


##### JOINS COM WHERE

```

DB.select({"tab1.id as game_id"}).table(tab1).innerJoin("tab2","tab2.ref_id","tab1.id").where("tab1.id":1) // ele da um innerJoin onde o resultado for tab2 ref_id = tab id

```

##### INSERT ASSOCIADO

Quando criamos um novo dado na tab2 que tem um relacionamento com a tab1:

```
DB.insert({
	ref_id: 1
}).table(tab2).then.catch
```

##### JOINS M to M

Crie uma tabela intermediaria, com os dados ref_tab1_id e ref_tab2_id

Crie duas ForengKey

Primeira ForengKey: Colunas ref_tab1_id - Tabela Tab1 - Coluna id - Cascade - Cascade
Primeira ForengKey: Colunas ref_tab2_id - Tabela Tab2 - Coluna id - Cascade - Cascade

```
DB.select({
	"tab1.nome as estudio_nome"
	"tab2.nome as game_nome
}).table(tabela_intermediaria)
.innerJoin("tab1","tab1.id","tab_intermediaria.tab1.id")
.innerJoin("tab2","tab2.id","tab_intermediaria.tab2.id").then.catch
```

------------------------------------------------------------------------------------------------------------

## VUE
```
npm i -g @vue/cli
vue create nome_projeto
cd nome_projeto
npm run serve

// BIBLIOTECAS

lodash - npm i --save lodash
```

Usar extensão VUE (VETUR) no Visual Studio.

##### Componente

Os arquivos .vue são componentes dentro deles temos a estrutura:

```
<template></template>
<script>
export default {} // Exporta por padrao este componente que estamos criando
</script>
<style></style>
```

Importando o componente

```
<script>
import Nome_componente from './components/Nome_componente'
export default {
	components: {
		Nome_componente
	}
}
</script>
```

Usando o componente

```
<template>
	<Nome_componente/>
</template>
```


###### Reatividade

Interpolação {{}}

```
<template>
	<p>{{ nome }}</p>
	<p>{{ idade }}</p>
</template>

<script>
export default {
	data(){
		return {
			nome: "pena",
			idade: "28"
		}
	}
}
</script>
```


###### DATA BINDING

ONE WAY
```
<input type="text" :value="nome">
```

TWO WAY - Funciona mais em formularios, permite alterar os dados das variaveis e muda o conteudo automaticamente em quanto digita.

```
<input type="text" v-model="nome">

<p>{{ nome }}</p>
```


###### PROPS

<template>
	<p>{{ nome }}</p>
	<p>{{ idade }}</p>
	<p>{{ escola }}</p>
</template>

<script>
export default {
	data(){
		return {
			escola: "napologicos"
		}
	},
	props: {
		nome: String,
		idade: Number
	}
}
</script>

// APP.VUE


<template>
	<Nome_componente nome="Pedro"/>
	<Nome_componente nome="Matheus"/>
</template>

```


###### CONDIÇOES

V-IF, V-ELSE, V-ELSE-IF, V-SHOW

```
<template>
	<p v-if="showIdade"> Idade</p>
	<p v-else=> Nada aqui</p>
</template>

<script>
export default {
	data(){return {}},
	props: {
		showIdade: Boolean
	}
}
</script>

```


###### CLASSES CONDICIONAIS

```
<template>
	<p :class="{'classe_css1': !premium, 'classe_css2': premium}"> TEXTO</p>
</template>

<script>
export default {
	data(){return {
		premium: false
	}},
}
</script>

```


###### LOOP V-FOR COM EDIÇÂO DE CONTEUDO

```
<template>
<div v-for="cliente in clientes" :key="cliente.id">
	<Cliente :prop_name="cliente"/>
	<input type="text" v-model="cliente.nome">
	<input type="number" v-model="cliente.idade">
</div>
</template>

<script>
export default {
	data(){return {
		clientes: [
		{
		id: 1,
		nome: "guu",
		idade: "12"
		},
		{
		id: 2,
		nome: "Cab",
		idade: "34"
		}
	]
	}},
}
</script>

```

###### EVENTOS

Este evento muda a cor de um elemento ao clicar no botao, a partir do metodo. Os eventos sempre retornam um dado.

```
<template>
	<p :class="{'classe_css1': !premium, 'classe_css2': premium}"> TEXTO</p>
	<button @click="funcao_nome($event)"> TEXTO</p> // $event e uma variavel reservada do vue para passar informaçoes do evento.
</template>

<script>
export default {
	data(){return {
		premium: false
		}
	},
	methods: {
		funcao_nome: function($event){
			console.log($event)
			this.premium = !this.premium
		}
	}
}
</script>

```

###### CRIANDO EVENTO DO FILHO PARA O PAI

CLIENTE.VUE 

criamos um metodo, para emitir algo do filho para o seu pai (APP.vue)

```

<template>
<button @click="emitirEventoDelete"/>Deletar</button>
</template>
<script>
data(){
return{
	premiun: false
}}

method: {
	emitirEventoDelete: function(){
	this.$emit("meDelete",{idCliente: this.cliente.id, componente: this}) // emitindo o evendo com nome de meDelete, passando o id do cliente e as informações deste componente.
	}
}

</script>
```


APP.VUE

```
<template>
<Nome_componente @meDelete="deletarAlgoFilho"/> // O Pai agora esta escutando um evento do filho
</template>

<script>
methods: {
	deletarAlgoFilho: function($event){
	console.log($event.idCliente)
	
	}
}
</script>
```


###### CRINAOD UM FORM BINDADO

```
<template>
	<form>
		<input type="text" v-model="nomeInp">
		<input type="text" v-model="idadeInp">
	</form>
	<button @click="funcao_cadastrar"> Cadastrar</p> 

<script>
export default {
	data(){return {
		nomeInp: "",
		idadeInp: "",
		clientes: [
		{
		id: 1,
		nome: "guu",
		idade: "12"
		},
		{
		id: 2,
		nome: "Cab",
		idade: "34"
		}
	]
	}},
	method: {
		funcao_cadastrar: function(){
			
			if(this.nomeInp == ""){
				console.log("erro")
			} else {
				this.clientes.push({nome: this.nomeInp, idade: this.idadeInp, id: Date.now() })
				// Zerando Form apos envio
				this.nomeInp = ""
				this.idadeInp = ""
			}
	
			
		}
	}
}
</script>

```


###### COMPUTED PROPERTIES

é um metodo que gera um valor, ajuda tambem junto ao LODASH, fazer uma nova listagem dos posts, de acorodo com um filtro de orderBy
	
	

###### COMPUTED PROPERTIES	
	
IMPOTANDO ALGUM TIPO DE FRAMEWORK CSS

MAIN.JS
	
```
import "./caminho/bulma.css" ou "./caminho/bootstrap.css"	
```
	
	

## Router VUE

vue create nome

Manually select > Router > seleciona o Router com Barra de espaço > Y > N > cd nome_pastacriada > npm run serve

APP.VUE

```
template

 <router-view/> // isto que chama os componentes 

/template

```


##### Nova Rota

router > index.js
```
// Importe um Componente

import Componente from '../views/Componente.vue'

const routes =[
	{
		path: "/",
		name: "Home",
		component: Componente // usa o componente que foi importado a cima
	}
]
```

router > app.vue

```

<router-link to="/"> Pagina Home </router-link>


```

------------------------------------------------------------------------------------------------------------

## Controllers 

são arquivos que separam a logica das ROTAS do projeto, para não ficar tudo no index.js

Iniciando: Crie uma pasta, e add os controllers dentro dela(ExemploController.js). Apos isso, entre no Index.js, importe as controllers,
com require, e assim voce podera usa-las desta maneira:
```
app.use("/caminhoquevocequsier",Nome_da_Controller_Importada);
```

Dentro do Controller, nos precisamos Chamarar a:
```
Const router = express.Router()
module.exports = router;
```

---------------------------------------------------------------------------------------------------------------

>  **Models** e **Controllers**, utilizam a mesma pasta
>  

---------------------------------------------------------------------------------------------------------------

## MODELS 

Crie o arquivo Model (Exemplo.js)
```
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
```

--------------------------------------------------------------------------------------------------------------------

## RELACIONAMENTOS 

1p1, 1pM, MpM.
		
##### NO SEQUELIZE
hasOne (tem um) - Exemplo: Pessoa possui uma Crush
belongsTo (pertence a) - Exemplo: Crush pertence a uma Pessoa
hasMany (tem muitos) - Exemplo: uma pessoa pode ter vários crushs.
belongsToMany (pertence a muitos) - Exemplo: Pessoas, pode possuir vários Crushs E Crushs podem pertencer a várias Perssoas

SEQUELIZE No Front - Importar as models com require.

--------------------------------------------------------------------------------------------------------------------

## MIDDLEWARE

Uma funçao que age no meio da requisição REQ RES, entre a comunicação do usuario e a rota. Ajuda criar autorização em rotas por exemplo

Crie sua pasta "middleware" > depois seu arquivo "xAutenticate.js" > Crie sua função dentro deste arquivo

> o next serve para passar a requisição a diante

```
function middleware(req, res, next){
	if(req.session.user){
		next() 
	} else {
		res.redirect("/")
	}	
}

module.exports = middleware;
```

Importe o middleware na pagina do Controller, e quando quiser usa-lo.

```
const Auth = require(/middleware/xAutenticate.js)

app.get(/posts, Auth, (req, res)=>{})
```

--------------------------------------------------------------------------------------------------------------------

## AXIOS

NPM I AXIOS

Ele serve para consumir dados de uma API, baseado nas rotas criadas na API, o axios consome os dados usando os metodos GET POST DELETE PUT

##### Consumindo API

```
axios.get("url/rota").then(response => {

}).catch(erro => {

})

```

##### Exibindo no HTML

```
axios.get("url/rota").then(response => {
	var games = response.data
	var list = document.getElementById("id_do_elemento")
	
	games.forEach(game => {
		var item = document.createElement("li")
		item.innerHTML = game.id + game.nome + game.etc
		list.appendChild(item)
	})
}).catch(erro => {

})

```

##### Criando novo game

Baseado em um formulario com os campos Nome e Ano

```
var nome = document.getElementById("nome")
var ano = document.getElementById("ano")
var game = {
	nomeGame: nome
	anoGame: ano
}

axios.get("url/rota", GAME).then(response => {

})
}).catch(erro => {

})

```
##### Atributos customizaveis

```

axios.get("url/rota").then(response => {
	var games = response.data
	var list = document.getElementById("id_do_elemento")
	
	games.forEach(game => {
		var item = document.createElement("li")
		item.innerHTML = game.id + game.nome + game.etc
		item.setAttribute("data-id", game.id)
		list.appendChild(item)
				
	})
}).catch(erro => {

})


```

##### Deletar

```
function deletarGame(listItem){
	var id = listItem.getAttribute("data-id")
	axios.deletar("url/rota_deletar"+ id ).then(response => {
	}).catch(erro => {
	})
}

axios.get("url/rota").then(response => {
	var games = response.data
	var list = document.getElementById("id_do_elemento")
	
	games.forEach(game => {
		var item = document.createElement("li")
		item.innerHTML = game.id + game.nome + game.etc
		item.setAttribute("data-id", game.id)
		list.appendChild(item)
		
		var deletarBtn = document.createElement("button")
		deletarBtn.innerHTML("deletar")
		item.appendChild(deletarBtn)
		deleteBtn.addEventListener("click",function(){deletarGame(item)})
		
	})
}).catch(erro => {

})


```

##### Editar

```
function EditarGame(listItem){
	var id = listItem.getAttribute("data-id")
	document.getElementById("campo_id_form_edicao").value = id
}

axios.get("url/rota").then(response => {
	var games = response.data
	var list = document.getElementById("id_do_elemento")
	
	games.forEach(game => {
		var item = document.createElement("li")
		item.innerHTML = game.id + game.nome + game.etc
		item.setAttribute("data-id", game.id)
		list.appendChild(item)
		
		// cria um botao onde recebe no html o texto "Editar", e adicona este elemento detro do elemento ITEM
		var EditarBtn = document.createElement("button")
		EditarBtn.innerHTML("Editar")
		item.appendChild(EditarBtn)
		EditarBtn.addEventListener("click",function(){EditarGame(item)})
		
	})
}).catch(erro => {

})


```



--------------------------------------------------------------------------------------------------------------------

## CORS 

NPM I CORS

Mecanismo de segurança, que existe em aplicações HTTP, que bloqueia requisições de maneira externa.

```
const cors = require("cors")
app.use(cors())
```

--------------------------------------------------------------------------------------------------------------------

## JWT 

NPM I jsonwebtoken

```
const jwt = require("jsonwebtoken")

const JWTsecret = "sasaashuahsuajsiaishuasa"

jwt.sign({dados de acesso: game.dado},JWTSecret,{expiresIn: '24h'},(ERR, TOKEN) => {
	if(){}else(){}
}
```
--------------------------------------------------------------------------------------------------------------------

## REDIS 

Banco focado em armazenamento de sessoes e cache.

--------------------------------------------------------------------------------------------------------------------

## API 

Um forma de comunicação entre dois pontos, ponto de distribuição de dados.

--------------------------------------------------------------------------------------------------------------------

> Das bibliotecas estudadas, estão o Sequelize e o TypeORM, que são do tipo mapeamento objeto-relacional (Object-Relational Mapping — ORM). Também foram analisadas a biblioteca Knex.js, que é do tipo construtor de consulta (Query Builder). E por fim, Node-postgres (pg), um driver de conexão direta com banco de dados para execução de queries.



--------------------------------------------------------------------------------------------------------------------

## HATEOAS

HATEOAS é um componente que faz parte da arquitetura REST, cujo objetivo é ajudar os clientes a consumirem uma API sem a necessidade de conhecimento prévio, a partir de um lista de links que criamos assim:

```
var HATEOAS = [
{
href: "localhost/rota"
method: Post	
rel: Descreve o que faz o link
},
]

res.json({ dados.id: id, links: HATEOAS })

```

--------------------------------------------------------------------------------------------------------------------

## SLUGIFY

```
const slugify = require("slugify")

slug: slugify(var_name)
```

--------------------------------------------------------------------------------------------------------------------

## TINY MCE

Download: https://www.tiny.cloud/get-tiny/self-hosted/ > Baixar o Community

COMEÇANDO: Coloque os arquivos do Tiny dentro da pasta public do seu projeto.

```
tinymce.init({
	language: 'pt_br',
	selector: #id_do_elemento,
	plugins: [autolink link image etc]
})
```

------------------------------------------------------------------------------------------------------------------

## VITE

Vite é uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos. É composto por duas partes principais:

Um servidor de desenvolvimento que fornece aprimoramentos de recursos avançados em módulos ES nativos , por exemplo, Hot Module Replacement (HMR) extremamente rápido .

Um comando de compilação que agrupa seu código com Rollup , pré-configurado para gerar ativos estáticos altamente otimizados para produção.

------------------------------------------------------------------------------------------------------------------

This site was built using [GitHub Pages](https://pages.github.com/)
