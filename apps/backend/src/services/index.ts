import { Application } from '../declarations';
import instituicoes from './instituicoes/instituicoes.service';
import edicoes from './edicoes/edicoes.service';
import eventos from './eventos/eventos.service';
import trilhas from './trilhas/trilhas.service';
import academicos from './academicos/academicos.service';
import tags from './tags/tags.service';
import palavrasChave from './palavras-chave/palavras-chave.service';
// Don't remove this comment. It's needed to format import lines nicely.

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function (app: Application): void {
  app.configure(instituicoes);
  app.configure(edicoes);
  app.configure(eventos);
  app.configure(trilhas);
  app.configure(academicos);
  app.configure(tags);
  app.configure(palavrasChave);
}
