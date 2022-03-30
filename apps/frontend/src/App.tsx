import React from "react";
import DadosTotaisProvider from "./components/DadosTotaisContext";
import MySnackbar from "./components/MySnackbar";
import PublicacoesSelecionadasProvider from "./components/PublicacoesSelecionadasContext";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <DadosTotaisProvider>
        <PublicacoesSelecionadasProvider>
          <Index />
          <MySnackbar />
        </PublicacoesSelecionadasProvider>
      </DadosTotaisProvider>
    </>
  );
}

export default App;
