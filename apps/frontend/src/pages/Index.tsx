import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Eventos from "../pages/Eventos";
import Graphs from "../pages/Graphs";
import Home from "../pages/Home";
import Publicacoes from "../pages/Publicacoes";
import MySnackbar from "../components/MySnackbar";

import Edicoes from "./Edicoes";
import BackButton from "../components/BackButton";
import GenerateGraphButton from "../components/GenerateGraphButton";

const Index = () => {
  return (
    <>
      <Container>
        <Router>
          {/* <MyBreadcrumb /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/edicoes" element={<Edicoes />} />
            <Route
              path="/eventos/edicoes/publicacoes"
              element={<Publicacoes />}
            />
            <Route
              path="/eventos/edicoes/publicacoes/graphs"
              element={<Graphs />}
            />
          </Routes>
          <GenerateGraphButton />
          <BackButton />
        </Router>
        <MySnackbar />
      </Container>
    </>
  );
};

export default Index;
