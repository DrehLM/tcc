import { Application } from '../declarations';
import instituicoes from './instituicoes/instituicoes.service';
// Don't remove this comment. It's needed to format import lines nicely.

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function (app: Application): void {
  app.configure(instituicoes);
}
