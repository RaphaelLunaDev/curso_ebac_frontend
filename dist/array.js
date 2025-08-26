"use strict";

var Alunos = [{
  Nome: 'Rapha',
  nota: '10'
}, {
  Nome: 'Sofi',
  nota: '8'
}, {
  Nome: 'Dudu',
  nota: '6'
}, {
  Nome: 'Vitao',
  nota: '2'
}, {
  Nome: 'Arthur',
  nota: '0'
}];
function filtrarAlunosComNotaBoa(aluno) {
  return aluno.nota >= 6;
}
var alunosComNotaboa = Alunos.filter(filtrarAlunosComNotaBoa);
console.log(alunosComNotaboa);