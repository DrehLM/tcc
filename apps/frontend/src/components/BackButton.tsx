import { Fab, Tooltip, Zoom } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Tooltip title="Voltar">
      <Zoom in={pathnames.length > 1}>
        <Fab
          size="large"
          onClick={() => {
            navigate(-1);
          }}
          sx={{
            position: "fixed",
            top: "50%",
            left: "3.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ArrowBackIcon />
        </Fab>
      </Zoom>
    </Tooltip>
  );
};

export default BackButton;
