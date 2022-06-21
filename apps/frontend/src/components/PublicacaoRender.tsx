import React, { useContext, useEffect, useState } from "react";
import { Box, Checkbox, Paper, Typography } from "@mui/material";
import { Publicacao } from "@tcc/interfaces";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./PublicacoesSelecionadasContext";
import { includePublicacao } from "../utils/includePublicacao";

type PublicacaoProps = {
  publicacao: Publicacao;
};

const PublicacaoRender = ({ publicacao }: PublicacaoProps) => {
  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(includePublicacao(publicacoes, publicacao));
  }, [publicacao, publicacoes]);

  const handleClick = () =>
    includePublicacao(publicacoes, publicacao)
      ? removePublicacoes([publicacao])
      : addPublicacoes([publicacao]);

  return (
    <Paper
      elevation={2}
      sx={{
        padding: "10px",
        height: "200px",
        background: includePublicacao(publicacoes, publicacao)
          ? " #f1f1f1"
          : " #ffffff",
        "&:hover": { cursor: "pointer", background: "#f1f1f1" },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">{publicacao.titulo}</Typography>
        <Checkbox checked={checked} />
      </Box>
      <Typography variant="body1">Autor: Autor 1</Typography>
      <Typography variant="body1">Instituição: Unioeste </Typography>
    </Paper>
  );
};

export default PublicacaoRender;
