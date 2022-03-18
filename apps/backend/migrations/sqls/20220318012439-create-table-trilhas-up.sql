CREATE TABLE trilhas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  edicao_id INTEGER,
  FOREIGN KEY(edicao_id) REFERENCES edicoes(id)
);
