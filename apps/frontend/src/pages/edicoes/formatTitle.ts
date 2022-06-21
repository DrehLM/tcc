import { Edicao } from "@tcc/interfaces";

export default function formatTitle(edicao?: Edicao) {
  const nome = edicao?.edicao ?? "Sem nome";
  const ano = edicao?.ano ? `(${edicao.ano})` : null;
  return [nome, ano].filter(Boolean).join(" ");
}
