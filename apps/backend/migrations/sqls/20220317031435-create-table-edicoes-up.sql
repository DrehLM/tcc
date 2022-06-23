CREATE TABLE edicoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  edicao TEXT,
  ano INTEGER,
  inicio TEXT,
  fim TEXT,
  instituicao_id INTEGER,
  FOREIGN KEY(instituicao_id)
    REFERENCES instituicoes(id)
    ON DELETE SET NULL
);
