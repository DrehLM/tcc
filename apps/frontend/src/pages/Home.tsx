import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => navigate("/eventos")}>Eventos</Button>
    </>
  );
};

export default Home;
