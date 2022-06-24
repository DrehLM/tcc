import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ResponseSnackBar = (props: {
  success: boolean | null;
  handleClose: () => void;
}) => {
  const { success, handleClose } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [success]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open && success !== null && success}
        onClose={handleClose}
        autoHideDuration={1000}
      >
        <Alert severity="success">Sucesso!</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={success !== null && !success}
        onClose={handleClose}
        autoHideDuration={1000}
      >
        <Alert severity="error">Erro!</Alert>
      </Snackbar>
    </>
  );
};

export default ResponseSnackBar;
