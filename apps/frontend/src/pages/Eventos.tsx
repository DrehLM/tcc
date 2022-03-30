import React, { useContext, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Evento, Publicacao } from "../../../../libs/interfaces/src";

import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./../components/PublicacoesSelecionadasContext";
import EventoRender from "../components/EventoRender";

import { includePublicacao } from "../utils/includePublicacao";

const eventosData: Evento[] = [
  {
    id: 1,
    nome: "Evento 1",
    edicoes: [
      {
        edicao: "5ª Edição",
        ano: 2012,
        eventoId: 1,
        id: 1,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 1,
            titulo: "Publicação 1",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2012,
          },
          {
            id: 2,
            titulo: "Publicação 2",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2012,
          },
          {
            id: 3,
            titulo: "Publicação 3",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2012,
          },
          {
            id: 4,
            titulo: "Publicação 4",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2012,
          },
          {
            id: 5,
            titulo: "Publicação 5",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2012,
          },
        ],
      },
      {
        edicao: "7ª Edição",
        ano: 2014,
        eventoId: 1,
        id: 2,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 6,
            titulo: "Publicação 6",
            trilhaId: 1,
            edicaoId: 2,
            ano: 2014,
          },
          {
            id: 7,
            titulo: "Publicação 7",
            trilhaId: 1,
            edicaoId: 2,
            ano: 2014,
          },
        ],
      },
      {
        edicao: "13ª Edição",
        ano: 2020,
        eventoId: 1,
        id: 3,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 8,
            titulo: "Publicação 8",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
          {
            id: 9,
            titulo: "Publicação 9",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
          {
            id: 10,
            titulo: "Publicação 10",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    nome: "Evento 2",
    edicoes: [
      {
        edicao: "3ª Edição",
        ano: 2009,
        eventoId: 1,
        id: 1,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 11,
            titulo: "Publicação 11",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2009,
          },
          {
            id: 12,
            titulo: "Publicação 12",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2009,
          },
          {
            id: 13,
            titulo: "Publicação 13",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2009,
          },
          {
            id: 14,
            titulo: "Publicação 14",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2009,
          },
          {
            id: 15,
            titulo: "Publicação 15",
            trilhaId: 1,
            edicaoId: 1,
            ano: 2009,
          },
        ],
      },
      {
        edicao: "4ª Edição",
        ano: 2010,
        eventoId: 1,
        id: 2,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 16,
            titulo: "Publicação 16",
            trilhaId: 1,
            edicaoId: 2,
            ano: 2010,
          },
          {
            id: 17,
            titulo: "Publicação 17",
            trilhaId: 1,
            edicaoId: 2,
            ano: 2010,
          },
        ],
      },
      {
        edicao: "14ª Edição",
        ano: 2020,
        eventoId: 1,
        id: 3,
        instituicaoId: 1,
        publicacoes: [
          {
            id: 18,
            titulo: "Publicação 18",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
          {
            id: 19,
            titulo: "Publicação 19",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
          {
            id: 20,
            titulo: "Publicação 20",
            trilhaId: 1,
            edicaoId: 3,
            ano: 2020,
          },
        ],
      },
    ],
  },
];

const Edicoes = () => {
  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    let todasPublicacoes: Publicacao[] = [];

    eventosData.forEach((evento) => {
      const eventoEdicoes = evento?.edicoes!;

      eventoEdicoes.forEach((edicao) => {
        todasPublicacoes = todasPublicacoes.concat(edicao.publicacoes!);
      });
    });

    setButtonText(
      todasPublicacoes.every((publicacao) =>
        includePublicacao(publicacoes, publicacao)
      )
        ? "Remover todos"
        : "Selecionar todos"
    );
  }, [publicacoes]);

  const handleClick = () => {
    let todasPublicacoes: Publicacao[] = [];

    eventosData.forEach((evento) => {
      const eventoEdicoes = evento?.edicoes!;

      eventoEdicoes.forEach((edicao) => {
        todasPublicacoes = todasPublicacoes.concat(edicao.publicacoes!);
      });
    });

    if (buttonText === "Selecionar todos") {
      addPublicacoes(todasPublicacoes);
      setButtonText("Remover todos");
    } else {
      removePublicacoes(todasPublicacoes);
      setButtonText("Selecionar todos");
    }
  };

  return (
    <>
      <h1>Eventos</h1>
      <Button onClick={handleClick}>{buttonText}</Button>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {eventosData.map((evento) => (
          <Grid item xs={3} key={evento.id}>
            <EventoRender evento={evento} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Edicoes;
