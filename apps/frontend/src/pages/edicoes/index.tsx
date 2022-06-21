import React, { useContext, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Edicao, Publicacao } from "@tcc/interfaces";
import EdicaoRenderer from "../../components/EdicaoRender";
import { useLocation } from "react-router-dom";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "../../components/PublicacoesSelecionadasContext";
import { includePublicacao } from "../../utils/includePublicacao";

interface EdicoesLocationState {
  edicoesData: Edicao[];
}

const Edicoes = () => {
  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const { state } = useLocation();
  const { edicoesData } = state as EdicoesLocationState;

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    let todasPublicacoes: Publicacao[] = [];

    edicoesData.forEach((edicao) => {
      todasPublicacoes = todasPublicacoes.concat(edicao.publicacoes!);
    });

    setButtonText(
      todasPublicacoes.every((publicacao) =>
        includePublicacao(publicacoes, publicacao)
      )
        ? "Remover todas"
        : "Selecionar todas"
    );
  }, [edicoesData, publicacoes]);

  const handleClick = () => {
    let todasPublicacoes: Publicacao[] = [];

    edicoesData.forEach((edicao) => {
      todasPublicacoes = todasPublicacoes.concat(edicao.publicacoes!);
    });

    if (buttonText === "Selecionar todas") {
      addPublicacoes(todasPublicacoes);
      setButtonText("Remover todas");
    } else {
      removePublicacoes(todasPublicacoes);
      setButtonText("Selecionar todas");
    }
  };

  return (
    <>
      <h1>Ediçoes</h1>
      <Button onClick={handleClick}>{buttonText}</Button>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {edicoesData.map((edicao) => (
          <Grid item xs={3} key={edicao.id}>
            <EdicaoRenderer edicao={edicao} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Edicoes;
