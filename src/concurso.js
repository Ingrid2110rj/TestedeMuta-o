function concurso(idade, altura) {
  const alerta = "Você não tem os requisitos para fazer a inscrição";
  const sucesso = "Você tem os requisitos para fazer a inscrição";

  if (idade >= 18 && altura >= 1.65) {
    return sucesso; // branch 2 passou pois sua idade e sua altura são, respectivamente, 18 anos e 1,65 m
  } else {
    return alerta; // branch 1 passou pois sua idade e sua altura são, respectivamente, 18 anos e 1,60 m
  }
}

module.exports = concurso;
