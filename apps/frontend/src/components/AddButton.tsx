import React from "react";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const GenerateGraphButton = (props: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DialogComponent: {
    (props: {
      title: string;
      open: boolean;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }): JSX.Element;
  };
}) => {
  const { title, open, setOpen, DialogComponent } = props;

  return (
    <>
      <Tooltip title={title}>
        <Fab
          size="large"
          sx={{
            position: "fixed",
            top: "90%",
            right: "3.5%",
          }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <DialogComponent open={open} setOpen={setOpen} title={title} />
    </>
  );
};

export default GenerateGraphButton;
