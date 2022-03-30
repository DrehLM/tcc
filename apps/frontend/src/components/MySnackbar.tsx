import { IconButton, Snackbar } from "@mui/material";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "./PublicacoesSelecionadasContext";

import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useEffect } from "react";

const MySnackbar = () => {
  const [open, setOpen] = React.useState(false);
  const { publicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  useEffect(() => {
    setOpen(true);
  }, [publicacoes]);

  const generateMessage = (): string => {
    return `${publicacoes.length === 0 ? "Nenhuma" : publicacoes.length} ${
      publicacoes.length <= 1
        ? "publicação selecionada"
        : "publicações selecionadas"
    }`;
  };

  const handleClose = () => setOpen(false);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={action}
      message={generateMessage()}
    />
  );
};

export default MySnackbar;
