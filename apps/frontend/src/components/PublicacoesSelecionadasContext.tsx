import React, { useState, createContext, ReactNode, FC } from "react";
import { Publicacao } from "../../../../libs/interfaces/src/index";

export type TPublicacoesSeleciodadsContext = {
  publicacoes: Publicacao[];
  addPublicacoes: (publicacoes: Publicacao[]) => void;
  removePublicacoes: (publicacoes: Publicacao[]) => void;
};

export const PublicacoesSelecionadasContext =
  createContext<TPublicacoesSeleciodadsContext | null>(null);

const PublicacoesSelecionadasProvider: FC<ReactNode> = ({ children }) => {
  const [publicacoesSelecionadas, setPublicacoesSelecionadas] = useState<
    Publicacao[]
  >([]);

  const addPublicacoes = (publicacoes: Publicacao[]) => {
    setPublicacoesSelecionadas(
      publicacoesSelecionadas.concat(
        publicacoes.filter(
          (publicacao) =>
            !publicacoesSelecionadas.some(
              (publicacaoSelecioanda) =>
                publicacao.id === publicacaoSelecioanda.id
            )
        )
      )
    );
  };

  const removePublicacoes = (publicacoes: Publicacao[]) => {
    setPublicacoesSelecionadas(
      publicacoesSelecionadas.filter(
        (publicacaoSelecioanda) =>
          !publicacoes.some(
            (publicacao) => publicacaoSelecioanda.id === publicacao.id
          )
      )
    );
  };

  return (
    <PublicacoesSelecionadasContext.Provider
      value={{
        publicacoes: publicacoesSelecionadas,
        addPublicacoes,
        removePublicacoes,
      }}
    >
      {children}
    </PublicacoesSelecionadasContext.Provider>
  );
};

export default PublicacoesSelecionadasProvider;
