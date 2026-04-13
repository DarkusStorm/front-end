const pessoa = {
    nome: "João",
    sobrenome: "Roccella",
    idade: 40,
    cargo: "Instrutor"
    // Objeto JavaScript
};

const entidade = new Map([
    ["nome", "João"],
    ["sobrenome", "Roccella"],
    ["idade", 40],
    ["cargo", "Instrutor"]
])

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);

const aluno = '{"nome":"Bento", "sobrenome":"Andrade", "idade":69, "matricula": 123456}'
const alunoObjeto = JSON.parse(aluno);

console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome);

for (let x in pessoa){
    pessoa.log(pessoa[x])
}