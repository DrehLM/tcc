import { Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type FieldValues = {
  nome: string;
  sigla: string;
};

const EventoForm = (props: {
  onSubmit: (data: FieldValues) => Promise<void>;
}) => {
  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      nome: "",
      sigla: "",
    },
  });

  const { onSubmit } = props;

  return (
    <form id="evento-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} sx={{ marginTop: "0px" }}>
        <Grid item xs={12}>
          <Controller
            name="nome"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField fullWidth label="Nome" {...field} />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="sigla"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField fullWidth label="Sigla" {...field} />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default EventoForm;
