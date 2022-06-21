import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "@mui/material/colors";
import { Publicacao } from "@tcc/interfaces";
import React, { useContext, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TCheckbox } from "../components/FilterRenderer";
import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "../components/PublicacoesSelecionadasContext";

type TPublicacoesPorAnoDictionay = {
  [key: number]: {
    name: string;
    total: number;
  };
};

type TPublicacoesPorAno = {
  name: string;
  Total: number;
};

const colorScheme = [
  blue[500],
  red[500],
  yellow[700],
  green[500],
  orange[500],
  purple[500],
];

const Graphs = () => {
  const { publicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const [anoOptions, setAnoOptions] = useState<TCheckbox[]>();
  const [anoCheckBoxes, setAnoCheckBoxes] = useState<boolean[]>();
  const [filtrados, setFiltrados] = useState<Publicacao[]>(publicacoes);
  const [publicacoesporAnoState, setPublicacoesporAnoState] =
    useState<TPublicacoesPorAno[]>();

  useEffect(() => {
    const publicacoesPorAnoDictionay: TPublicacoesPorAnoDictionay = {};
    const publicacoesporAno: any[] | undefined = [];
    const anoOptionsArray: TCheckbox[] = [];

    for (const index in filtrados) {
      const ano = filtrados[index].ano!;

      if (!(ano in publicacoesPorAnoDictionay)) {
        let publicacoesNaqueleAno = 0;

        filtrados.forEach((publicacao) => {
          if (publicacao.ano === ano) {
            publicacoesNaqueleAno++;
          }
        });

        publicacoesPorAnoDictionay[ano] = {
          name: `${ano}`,
          total: publicacoesNaqueleAno,
        };
        publicacoesporAno.push({
          name: `${ano}`,
          Total: publicacoesNaqueleAno,
        });
        anoOptionsArray.push({
          label: `${ano}`,
          value: ano,
        });
      }
    }

    setPublicacoesporAnoState(publicacoesporAno);
    setAnoOptions(anoOptionsArray);
    setAnoCheckBoxes(new Array(anoOptionsArray.length).fill(true));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const publicacoesPorAnoDictionay: TPublicacoesPorAnoDictionay = {};
    const publicacoesporAno: any[] | undefined = [];
    const anoOptionsArray: TCheckbox[] = [];

    for (const index in filtrados) {
      const ano = filtrados[index].ano!;

      if (!(ano in publicacoesPorAnoDictionay)) {
        let publicacoesNaqueleAno = 0;

        filtrados.forEach((publicacao) => {
          if (publicacao.ano === ano) {
            publicacoesNaqueleAno++;
          }
        });

        publicacoesPorAnoDictionay[ano] = {
          name: `${ano}`,
          total: publicacoesNaqueleAno,
        };
        publicacoesporAno.push({
          name: `${ano}`,
          Total: publicacoesNaqueleAno,
        });
        anoOptionsArray.push({
          label: `${ano}`,
          value: ano,
        });
      }
    }

    setPublicacoesporAnoState(publicacoesporAno);
  }, [filtrados]);

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={2}>
          <Typography variant="h5">Ano</Typography>
          {anoOptions
            ?.sort((a, b) => {
              if (a.label > b.label) {
                return 1;
              }
              if (a.label < b.label) {
                return -1;
              }
              return 0;
            })
            .map((ano, index) => (
              <FormGroup key={ano.value}>
                <FormControlLabel
                  key={ano.value}
                  control={
                    <Checkbox
                      checked={anoCheckBoxes![index]}
                      onClick={() => {
                        let newAnoCheckBoxes = anoCheckBoxes!;
                        newAnoCheckBoxes[index] = !newAnoCheckBoxes[index];
                        setAnoCheckBoxes([...newAnoCheckBoxes]);

                        if (newAnoCheckBoxes[index]) {
                          setFiltrados([
                            ...filtrados,
                            ...publicacoes.filter(
                              (publicacao) => publicacao.ano === ano.value
                            ),
                          ]);
                        } else {
                          setFiltrados(
                            filtrados.filter(
                              (publicacaoExibicao) =>
                                publicacaoExibicao.ano !== ano.value
                            )
                          );
                        }
                      }}
                    />
                  }
                  label={ano.value}
                />
              </FormGroup>
            ))}
        </Grid>
      </Grid>

      <Divider
        sx={{
          borderBottomWidth: 2,
          marginTop: "20px",
          backgroundColor: pink[100],
        }}
      />

      <Typography variant="h4" sx={{ marginTop: "20px" }}>
        Número de publicações por ano
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={7} height="400px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={publicacoesporAnoState?.sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              })}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="Total" fill="#8884d8" label={{ position: "top" }}>
                {publicacoesporAnoState?.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorScheme[index % colorScheme.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={5} height="400px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend />
              <Tooltip />
              <Pie
                data={publicacoesporAnoState?.sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                })}
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius="50%"
                fill="#8884d8"
                dataKey="Total"
              >
                {publicacoesporAnoState?.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorScheme[index % colorScheme.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Graphs;
