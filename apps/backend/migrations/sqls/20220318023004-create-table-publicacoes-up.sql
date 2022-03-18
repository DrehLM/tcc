CREATE TABLE publicacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  edicao_id INTEGER,
  trilha_id INTEGER,
  FOREIGN KEY(edicao_id) REFERENCES edicoes(id),
  FOREIGN KEY(trilha_id) REFERENCES trilhas(id)
);
