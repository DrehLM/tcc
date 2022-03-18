CREATE TABLE edicoes_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  edicao TEXT,
  ano INTEGER,
  instituicao_id INTEGER,
  FOREIGN KEY(instituicao_id) REFERENCES instituicoes(id)
);

INSERT INTO
  edicoes_new
SELECT
  id,
  edicao,
  ano,
  instituicao_id
FROM
  edicoes;

DROP TABLE edicoes;

ALTER TABLE
  edicoes_new RENAME TO edicoes;

DROP TABLE eventos;
