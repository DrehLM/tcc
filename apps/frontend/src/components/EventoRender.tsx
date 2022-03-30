import React, { useContext, useEffect, useState } from "react";
import { Box, Checkbox, Paper, Typography } from "@mui/material";
import { Evento, Publicacao } from "../../../../libs/interfaces/src";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./PublicacoesSelecionadasContext";
import { useNavigate } from "react-router-dom";
import { includePublicacao } from "../utils/includePublicacao";

type EventoRendererProps = {
  evento?: Evento;
};

const EventoRender = ({ evento }: EventoRendererProps) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const title = evento?.nome;

  useEffect(() => {
    const eventoEdicoes = evento?.edicoes;

    if (eventoEdicoes) {
      setChecked(
        eventoEdicoes.every((edicao) => {
          const publicacoesEdicao = edicao?.publicacoes;

          if (publicacoesEdicao) {
            return publicacoesEdicao.every((publicacao) =>
              includePublicacao(publicacoes, publicacao)
            );
          }

          return false;
        })
      );
    }
  }, [evento?.edicoes, publicacoes]);

  const getTotalPublicacoes = () => {
    let todasPublicacoes: Publicacao[] = [];

    const eventoEdicoes = evento?.edicoes;

    if (eventoEdicoes) {
      eventoEdicoes.forEach((edicao) => {
        todasPublicacoes = todasPublicacoes.concat(edicao.publicacoes!);
      });
    }

    return todasPublicacoes;
  };

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    checked
      ? removePublicacoes(getTotalPublicacoes())
      : addPublicacoes(getTotalPublicacoes());
  };

  const handlePaperClick = () => {
    navigate("/eventos/edicoes", {
      state: {
        edicoesData: evento?.edicoes ?? [],
      },
    });
  };

  return (
    <Paper
      elevation={2}
      sx={{
        padding: "10px",
        height: "200px",
        background: checked ? " #f1f1f1" : " #ffffff",
        "&:hover": { cursor: "pointer", background: "#f1f1f1" },
      }}
      onClick={handlePaperClick}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Checkbox checked={checked} onClick={handleCheckboxClick} />
        </Box>
        <Typography variant="body1">
          {`${evento?.edicoes?.length} edições`}
        </Typography>
        <Typography variant="body1">{`${
          getTotalPublicacoes().length
        } publicações`}</Typography>
      </Box>
    </Paper>
  );
};

export default EventoRender;
