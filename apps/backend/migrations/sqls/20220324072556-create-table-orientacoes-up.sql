CREATE TABLE orientacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  academico_id INTEGER NOT NULL,
  escrita_id INTEGER NOT NULL,
  FOREIGN KEY(academico_id)
    REFERENCES academicos(id)
    ON DELETE CASCADE,
  FOREIGN KEY(escrita_id)
    REFERENCES escritas(id)
    ON DELETE CASCADE
);
