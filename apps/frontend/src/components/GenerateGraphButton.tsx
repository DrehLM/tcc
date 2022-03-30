import React, { useContext, useEffect } from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "../components/PublicacoesSelecionadasContext";
import { useLocation, useNavigate } from "react-router-dom";

const GenerateGraphButton = () => {
  const { publicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Tooltip title="Gerar gráficos">
      <Zoom
        in={
          publicacoes.length > 0 && pathnames[pathnames.length - 1] !== "graphs"
        }
      >
        <Fab
          size="large"
          onClick={() => navigate("/eventos/edicoes/publicacoes/graphs")}
          sx={{
            position: "fixed",
            top: "50%",
            right: "3.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <EqualizerIcon />
        </Fab>
      </Zoom>
    </Tooltip>
  );
};

export default GenerateGraphButton;
