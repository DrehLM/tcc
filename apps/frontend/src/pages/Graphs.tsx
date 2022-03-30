import React, { useContext, useEffect, useState } from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import {
  pink,
  red,
  blue,
  yellow,
  green,
  orange,
  purple,
} from "@mui/material/colors";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

import {
  PublicacoesSelecionadasContext,
  TPublicacoesSeleciodadsContext,
} from "../components/PublicacoesSelecionadasContext";

import {
  DadosTotaisContext,
  TDadosTotaisContext,
} from "../components/DadosTotaisContext";

import FilterRenderer, { TCheckbox } from "../components/FilterRenderer";
import { PersonAddDisabledOutlined } from "@mui/icons-material";
import { Publicacao } from "../../../../libs/interfaces/src";

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

const options = [
  {
    label: "2010",
    value: 2010,
  },
  {
    label: "2012",
    value: 2012,
  },
  {
    label: "2019",
    value: 2019,
  },
  {
    label: "2020",
    value: 2020,
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graphs = () => {
  const { publicacoes } = useContext(
    PublicacoesSelecionadasContext
  ) as TPublicacoesSeleciodadsContext;

  const { publicacoesTotais } = useContext(
    DadosTotaisContext
  ) as TDadosTotaisContext;

  const [anoOptions, setAnoOptions] = useState<TCheckbox[]>();
  const [anoCheckBoxes, setAnoCheckBoxes] = useState<boolean[]>();
  const [filtrados, setFiltrados] = useState<Publicacao[]>(publicacoes);
  const [publicacoesporAnoState, setPublicacoesporAnoState] =
    useState<TPublicacoesPorAno[]>();

  const publicacoesPorAnoDictionay: TPublicacoesPorAnoDictionay = {};
  const publicacoesporAno: any[] | undefined = [];
  const anoOptionsArray: TCheckbox[] = [];

  useEffect(() => {
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
    // anoCheckBoxes(new Array(anoOptionsArray.length).fill(false));
    setAnoCheckBoxes(new Array(anoOptionsArray.length).fill(true));
  }, []);

  useEffect(() => {
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
          {/* <FilterRenderer title="Ano" options={anoOptionsArray} /> */}
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
              <>
                <FormGroup>
                  <FormControlLabel
                    key={ano.value}
                    control={
                      <Checkbox
                        checked={anoCheckBoxes![index]}
                        onClick={() => {
                          let newAnoCheckBoxes = anoCheckBoxes!;
                          newAnoCheckBoxes[index] = !newAnoCheckBoxes[index];
                          setAnoCheckBoxes([...newAnoCheckBoxes]);

                          console.log(newAnoCheckBoxes[index]);

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
                            console.log(filtrados);
                          }
                        }}
                      />
                    }
                    label={ano.value}
                  />
                </FormGroup>
              </>
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
                {data.map((entry, index) => (
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
                {data.map((entry, index) => (
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
