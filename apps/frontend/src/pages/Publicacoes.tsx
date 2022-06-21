import React, { useContext, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Publicacao } from "@tcc/interfaces";
import PublicacaoRender from "../components/PublicacaoRender";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./../components/PublicacoesSelecionadasContext";
import { useLocation } from "react-router-dom";
import { includePublicacao } from "../utils/includePublicacao";

interface PublicacoesLocationState {
  publicacoesData: Publicacao[];
}

const Publicacoes = () => {
  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const [buttonText, setButtonText] = useState("");

  const { state } = useLocation();
  const { publicacoesData } = state as PublicacoesLocationState;

  useEffect(() => {
    setButtonText(
      publicacoesData.every((publicacao) =>
        includePublicacao(publicacoes, publicacao)
      )
        ? "Remover todos"
        : "Selecionar todos"
    );
  }, [publicacoes, publicacoesData]);

  const handleClick = () => {
    if (buttonText === "Selecionar todos") {
      addPublicacoes(publicacoesData);
      setButtonText("Remover todos");
    } else {
      removePublicacoes(publicacoesData);
      setButtonText("Selecionar todos");
    }
  };

  return (
    <>
      <h1>Publicações</h1>
      <Button onClick={handleClick}> {buttonText} </Button>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {publicacoesData.map((publicacao) => (
          <Grid item xs={3} key={publicacao.id}>
            <PublicacaoRender publicacao={publicacao} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Publicacoes;
