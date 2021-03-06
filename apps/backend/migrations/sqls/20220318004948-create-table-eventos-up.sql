CREATE TABLE eventos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  sigla TEXT
);

CREATE TABLE edicoes_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  edicao TEXT,
  ano INTEGER,
  inicio TEXT,
  fim TEXT,
  instituicao_id INTEGER,
  evento_id INTEGER,
  FOREIGN KEY(instituicao_id)
    REFERENCES instituicoes(id)
    ON DELETE SET NULL,
  FOREIGN KEY(evento_id)
    REFERENCES eventos(id)
    ON DELETE SET NULL
);

INSERT INTO
  edicoes_new
SELECT
  *,
  NULL AS evento_id
FROM
  edicoes;

DROP TABLE edicoes;

ALTER TABLE
  edicoes_new RENAME TO edicoes;
