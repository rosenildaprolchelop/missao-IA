export function embaralharPerguntas(lista) {
    const copia = [...lista];
  
    // Embaralha as perguntas usando Math.random()
    for (let i = copia.length - 1; i > 0; i--) {
      const indiceAleatorio = Math.floor(
        Math.random() * (i + 1)
      );
  
      [copia[i], copia[indiceAleatorio]] = [
        copia[indiceAleatorio], copia[i]
      ];
    }
  
    return copia;
  }
  
  export function escolherAfirmacao(alternativa) {
    const indiceAleatorio = Math.floor(
      Math.random() * alternativa.afirmacao.length
    );
  
    return alternativa.afirmacao[indiceAleatorio];
  }
  
  export function montarResultado(afirmacoes) {
    const resultado = [];
  
    // Percorre as afirmações selecionadas
    for (const afirmacao of afirmacoes) {
      if (resultado.length >= 5) {
        break;
      }
      resultado.push(afirmacao);
    }
  
    // Junta tudo em um único parágrafo e remove espaços repetidos
    return resultado
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  }