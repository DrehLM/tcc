CREATE TABLE publicacoes_palavras_chave (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  publicacao_id INTEGER NOT NULL,
  palavra_chave_id INTEGER NOT NULL,
  FOREIGN KEY(publicacao_id)
    REFERENCES publicacoes(id)
    ON DELETE CASCADE,
  FOREIGN KEY(palavra_chave_id)
    REFERENCES palavras_chave(id)
    ON DELETE CASCADE,
  UNIQUE (publicacao_id, palavra_chave_id)
);
