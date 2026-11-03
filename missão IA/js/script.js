import { perguntas } from "./perguntas.js";
import {
  embaralharPerguntas,
  escolherAfirmacao,
  montarResultado
} from "./aleatorio.js";

const caixaInicio = document.querySelector(".caixa-inicio");
const botaoIniciar = document.querySelector(".botao-iniciar");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

let perguntasSorteadas = [];
let atual = 0;
let afirmacoes = [];

function iniciarJogo() {
  perguntasSorteadas = embaralharPerguntas(perguntas);
  atual = 0;
  afirmacoes = [];

  caixaInicio.classList.add("oculto");
  caixaResultado.classList.add("oculto");

  caixaPerguntas.classList.remove("oculto");
  caixaAlternativas.classList.remove("oculto");

  mostraPergunta();
}

function mostraPergunta() {
  if (atual >= perguntasSorteadas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntasSorteadas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  for (const alternativa of perguntaAtual.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;

    botao.addEventListener("click", () => {
      const afirmacao = escolherAfirmacao(alternativa);
      afirmacoes.push(afirmacao);
      atual++;
      mostraPergunta();
    });

    caixaAlternativas.appendChild(botao);
  }
}

function mostraResultado() {
  caixaPerguntas.classList.add("oculto");
  caixaAlternativas.classList.add("oculto");

  textoResultado.textContent = montarResultado(afirmacoes);
  caixaResultado.classList.remove("oculto");
}

botaoIniciar.addEventListener("click", iniciarJogo);
botaoReiniciar.addEventListener("click", iniciarJogo);