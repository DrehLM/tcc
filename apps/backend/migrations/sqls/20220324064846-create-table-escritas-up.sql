CREATE TABLE escritas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  instituicao_id INTEGER NOT NULL,
  academico_id INTEGER NOT NULL,
  publicacao_id INTEGER NOT NULL,
  FOREIGN KEY(instituicao_id) REFERENCES instituicoes(id),
  FOREIGN KEY(academico_id) REFERENCES academicos(id),
  FOREIGN KEY(publicacao_id) REFERENCES publicacoes(id)
);
