import React, { useState, createContext, ReactNode, FC } from "react";
import { Evento } from "@tcc/interfaces";

export type TDadosTotaisContext = {
  publicacoesTotais: Evento[];
  setPublicacoesTotais: (value: Evento[]) => void;
};

export const DadosTotaisContext = createContext<TDadosTotaisContext | null>(
  null
);

const DadosTotaisProvider: FC<ReactNode> = ({ children }) => {
  const [publicacoesTotais, setPublicacoesTotais] = useState<Evento[]>([
    {
      id: 1,
      nome: "Conferência Nacional",
      edicoes: [
        {
          edicao: "5ª Edição",
          ano: 2012,
          eventoId: 1,
          id: 1,
          instituicaoId: 1,
          publicacoes: [
            {
              id: 1,
              titulo: "Gustavinho",
              trilhaId: 1,
              edicaoId: 1,
            },
            {
              id: 2,
              titulo: "Gustavo",
              trilhaId: 1,
              edicaoId: 1,
            },
            {
              id: 3,
              titulo: "Gustavão",
              trilhaId: 1,
              edicaoId: 1,
            },
            {
              id: 4,
              titulo: "ohnivatsuG",
              trilhaId: 1,
              edicaoId: 1,
            },
            {
              id: 5,
              titulo: "Gusta vinho",
              trilhaId: 1,
              edicaoId: 1,
            },
          ],
        },
        {
          edicao: "7ª Edição",
          ano: 2014,
          eventoId: 1,
          id: 2,
          instituicaoId: 1,
          publicacoes: [
            {
              id: 6,
              titulo: "ohnivatsuG",
              trilhaId: 1,
              edicaoId: 2,
            },
            {
              id: 7,
              titulo: "Gusta vinho",
              trilhaId: 1,
              edicaoId: 2,
            },
          ],
        },
        {
          edicao: "13ª Edição",
          ano: 2020,
          eventoId: 1,
          id: 3,
          instituicaoId: 1,
          publicacoes: [
            {
              id: 8,
              titulo: "ohnivatsuG",
              trilhaId: 1,
              edicaoId: 3,
            },
            {
              id: 9,
              titulo: "Gusta vinho",
              trilhaId: 1,
              edicaoId: 3,
            },
            {
              id: 10,
              titulo: "Gusta vinho",
              trilhaId: 1,
              edicaoId: 3,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <DadosTotaisContext.Provider
      value={{
        publicacoesTotais: publicacoesTotais,
        setPublicacoesTotais: setPublicacoesTotais,
      }}
    >
      {children}
    </DadosTotaisContext.Provider>
  );
};

export default DadosTotaisProvider;
