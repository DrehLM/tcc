CREATE TABLE publicacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  ano INTEGER,
  descricao TEXT,
  resumo TEXT,
  abstract TEXT,
  edicao_id INTEGER,
  trilha_id INTEGER,
  FOREIGN KEY(edicao_id)
    REFERENCES edicoes(id)
    ON DELETE SET NULL,
  FOREIGN KEY(trilha_id)
    REFERENCES trilhas(id)
    ON DELETE SET NULL
);
