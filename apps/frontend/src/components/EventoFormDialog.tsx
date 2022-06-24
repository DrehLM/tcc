import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import EventoForm from "./EventoForm";
import { Button, DialogActions } from "@mui/material";
import { eventosRepository } from "../repositories/eventosRepository";
import ResponseSnackBar from "./ResponseSnackbar";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EventoFormDialog = (props: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { open, setOpen, title } = props;

  const [success, setSuccess] = React.useState<boolean | null>(null);

  const onSubmit = async (data: { nome: string; sigla: string }) => {
    try {
      const response = await eventosRepository.create(data);
      if (response) {
        setSuccess(true);
        setOpen(false);
        return;
      }
      setSuccess(false);
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <EventoForm onSubmit={onSubmit} />
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => setOpen(false)}
            variant="outlined"
          >
            Cancelar
          </Button>
          <Button variant="outlined" type="submit" form="evento-form">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      <ResponseSnackBar
        success={success}
        handleClose={() => setSuccess(null)}
      />
    </div>
  );
};

export default EventoFormDialog;
