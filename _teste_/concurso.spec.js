const concurso = require("../src/concurso");
describe("Deve testar os requisitos para inscrição no concurso", () => {
  test("Candidato não tem idade e tem altura", () => {
    expect(concurso(17, 1.65)).toMatch(/Você não tem os requisitos para fazer a inscrição/);
  });

  test("Candidato tem idade e não tem a altura ", () => {
    expect(concurso(18, 1.60)).toMatch(/Você não tem os requisitos para fazer a inscrição/);
  })

  test("Candidato tem idade e tem altura ", () => {
    expect(concurso(18, 1.65)).toMatch(/Você tem os requisitos para fazer a inscrição/);
  });

});

