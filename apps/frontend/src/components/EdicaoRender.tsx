import React, { useContext, useEffect, useState } from "react";
import { Box, Checkbox, Paper, Typography } from "@mui/material";
import { Edicao } from "../../../../libs/interfaces/src";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./PublicacoesSelecionadasContext";
import { useNavigate } from "react-router-dom";
import { includePublicacao } from "../utils/includePublicacao";

type EdicaoRendererProps = {
  edicao?: Edicao;
};

const EdicaoRenderer = ({ edicao }: EdicaoRendererProps) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const title = `${edicao?.edicao} (${edicao?.ano})`;

  useEffect(() => {
    const publicacoesEdicao = edicao?.publicacoes;

    if (publicacoesEdicao) {
      setChecked(
        publicacoesEdicao.every((publicacao) =>
          includePublicacao(publicacoes, publicacao)
        )
      );
    }
  }, [publicacoes, edicao?.publicacoes]);

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    const publicacoesEdicao = edicao?.publicacoes;

    if (publicacoesEdicao) {
      checked
        ? removePublicacoes(publicacoesEdicao)
        : addPublicacoes(publicacoesEdicao);
    }
  };

  const handlePaperClick = () => {
    navigate("/eventos/edicoes/publicacoes", {
      state: {
        publicacoesData: edicao?.publicacoes ?? [],
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
          {`${edicao?.publicacoes?.length} publicações`}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EdicaoRenderer;
