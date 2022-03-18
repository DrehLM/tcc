CREATE TABLE edicoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  edicao TEXT,
  ano INTEGER,
  instituicao_id INTEGER,
  FOREIGN KEY(instituicao_id) REFERENCES instituicoes(id)
);
