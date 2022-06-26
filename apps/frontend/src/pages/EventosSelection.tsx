import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Evento, Publicacao } from "@tcc/interfaces";
import EventoRender from "../components/EventoRender";
import { eventosRepository } from "../repositories/eventosRepository";
import { includePublicacao } from "../utils/includePublicacao";

import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./../components/PublicacoesSelecionadasContext";
import AddButton from "../components/AddButton";
import EventoFormDialog from "../components/EventoFormDialog";

const Eventos = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const { publicacoes, addPublicacoes, removePublicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    let todasPublicacoes: Publicacao[] = [];

    eventos.forEach((evento) => {
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
  }, [publicacoes, eventos]);

  useEffect(() => {
    eventosRepository.find().then(setEventos);
  }, []);

  const handleClick = () => {
    let todasPublicacoes: Publicacao[] = [];

    eventos.forEach((evento) => {
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
        {eventos.map((evento) => (
          <Grid item xs={3} key={evento.id}>
            <EventoRender evento={evento} />
          </Grid>
        ))}
      </Grid>
      <AddButton
        title="Adicionar novo evento"
        open={open}
        setOpen={setOpen}
        DialogComponent={EventoFormDialog}
      />
    </>
  );
};

export default Eventos;
