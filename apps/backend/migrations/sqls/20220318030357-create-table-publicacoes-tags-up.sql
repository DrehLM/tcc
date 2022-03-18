CREATE TABLE publicacoes_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  publicacao_id INTEGER,
  tag_id INTEGER,
  FOREIGN KEY(publicacao_id) REFERENCES publicacoes(id),
  FOREIGN KEY(tag_id) REFERENCES tags(id),
  UNIQUE (publicacao_id, tag_id)
);
